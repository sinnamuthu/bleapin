import React, { Component } from 'react';
import Parser from 'html-react-parser';
import ReactDOM from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import config from './Config';
import { Link, NavLink } from 'react-router-dom';

class BlogPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            dateStr: '',
            authorName: '',
            categories: [],
            readMore: false,
            url: ''
        };
        this.readMore = this.readMore.bind(this);
        this.loadPostData = this.loadPostData.bind(this);
        this.replaceUrl = this.replaceUrl.bind(this);
        toast.configure();
    }

    replaceUrl(){
        let url = (this.props.url).replace('https://www.bleap.in', '');
        this.setState({
            url: url
        });
    }

    readMore(e, val = true) {
        this.setState({
            readMore: val
        });
    }

    loadPostData(){
        let mydate = new Date(this.props.date);
        let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
        let dateStr = month+' '+mydate.getDate()+', '+ mydate.getFullYear();
        this.setState({
            dateStr: dateStr
        });

        const authorName = '';
        var instance = axios.create();
        delete instance.defaults.headers.common['X-CSRF-TOKEN'];
        delete instance.defaults.headers.common['X-Requested-With'];
        axios.get('https://www.bleap.in/wp-json/wp/v2/users/'+this.props.authorID).then(res => {
            if (res.data) {
                this.setState({
                    authorName: res.data.name
                });
            }
        });
        let categories = [];
        this.props.categories.map((categoryID) => {
            axios.get('https://www.bleap.in/wp-json/wp/v2/categories/'+categoryID).then(res => {
                if (res.data) {
                    categories.push(res.data.name)
                }
            })
        });
        setTimeout(() => {
            this.setState({
                categories: categories
            });
        }, 1000);
    }

    componentDidMount() {
        this.loadPostData();
        this.replaceUrl();
    }
    
    render() {
        return (
            <div>
                <h3>{Parser(this.props.title)}</h3>
                
                <div className="row">
                    <div className="col-md-12 post-meta">
                        { 'by '+this.state.authorName+' | '+this.state.dateStr+' | '+this.state.categories.join(', ') }
                    </div>
                </div>
                
                <div className="post-meta ">
                    <img className="blog-image" src={this.props.image} />
                </div>
                <div className="post-metaimg">
                { 
                    Parser((this.props.content.substring(0, 500)).concat('...'))
               
                }
               </div>
                <div className="post-read">
                    <div className="row">
                        <div className="col-md-12">
                            {
                                <a href={this.props.url} target="_blank"><strong>Read More</strong></a>
                                /*<Link to={config.ROUTE_URL+this.state.url}><strong>Read More</strong></Link>*/
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogPost;