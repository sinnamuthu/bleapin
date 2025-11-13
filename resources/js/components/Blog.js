import React, { Component } from 'react';
import BlogPost from './BlogPost';
import debounce from "lodash.debounce";
import MetaTags from 'react-meta-tags';

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 1,
            totalPages: 0,
            posts: [],
        };
        this.loadPosts = this.loadPosts.bind(this);
        this.loadPosts();
    }

    loadPosts() {
        var instance = axios.create();
        delete instance.defaults.headers.common['X-CSRF-TOKEN'];
        delete instance.defaults.headers.common['X-Requested-With'];
        axios.get('https://bleap.in/wp-json/wp/v2/posts/?per_page=5&page='+this.state.page
        ).then(res => {
            console.log(res);
            this.setState({
                totalPages: res.headers['x-wp-totalpages']
            });
            if (res.data) {
                this.setState(prevState => ({
                    page: prevState.page + 1,
                    posts: [...this.state.posts, ...res.data]
                }));
            }
        })
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <React.Fragment>
                <MetaTags>
                    <title>Social Media | Online Marketing Blogs in Chennai, India</title>
                    <meta name="description" content="Team at Bleap regularly shares latest knowledge generated from hands-on experience of working on projects from across the industries. Join our gang and get our updates from our blog."/>
                    <link rel="canonical" href="https://www.bleap.in/blog" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Social Media | Online Marketing Blogs in Chennai, India" />
                    <meta property="og:description" content="Team at Bleap regularly shares latest knowledge generated from hands-on experience of working on projects from across the industries. Join our gang and get our updates from our blog." />
                    <meta property="og:url" content="https://www.bleap.in/blog/" />
                    <meta property="og:site_name" content="BLeap" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:description" content="Team at Bleap regularly shares latest knowledge generated from hands-on experience of working on projects from across the industries. Join our gang and get our updates from our blog." />
                    <meta name="twitter:title" content="Social Media | Online Marketing Blogs in Chennai, India" />
                </MetaTags>
                    <section className="sub-page blog">
                        <section className="container">
                            {this.state.posts.map(post => {
                                return <BlogPost 
                                            key={post.id} 
                                            id={post.id}
                                            title={post.title.rendered} 
                                            authorID={post.author} 
                                            date={post.date} 
                                            categories={post.categories} 
                                            image={post.jetpack_featured_media_url} 
                                            content={post.content.rendered}
                                            url={post.link}
                                        />
                            })}

                            {this.state.page <= this.state.totalPages &&
                                <button className="btn btn-primary" onClick={this.loadPosts}>Load More</button>
                            }
                        </section>
                    </section>
            </React.Fragment>        
        );
    }
}
export default Blog;