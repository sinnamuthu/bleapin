import React, { Component } from 'react';
import Parser from 'html-react-parser';
import ReactDOM from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import config from './Config';

class PostPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            commentParent: 0,
            dateStr: '',
            authorName: '',
            categories: [],
            readMore: false,
            commentData: [],
            name: '',
            nameErr: '',
            email: '',
            emailErr: '',
            website: '',
            websiteErr: '',
            content: '',
            contentErr: '',
            formInvalid: false,
            showCommentForm: false,
            postUrl: '',
        };
        /*this.readMore = this.readMore.bind(this);
        this.loadPostData = this.loadPostData.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setCommentParent = this.setCommentParent.bind(this);*/
        toast.configure();
        console.log();
    }

    readMore(e, val = true) {
        this.setState({
            readMore: val
        });
    }

    validateForm(event){
        const requiredFields = ['name', 'content'];
        if (event.target.name == 'email') {
            if (validator.isEmail(event.target.value)) 
                this.setState({emailErr: false});
            else if (validator.isEmpty(event.target.value))
                this.setState({emailErr: 'Email should not be empty'});
            else
                this.setState({emailErr: 'Email is Invalid'});
        } else {
            requiredFields.forEach(function(field){
                if (event.target.name == field) {
                    if (validator.isEmpty(event.target.value))
                        this.setState({[field + 'Err']: field.charAt(0).toUpperCase() + field.slice(1)+' should not be empty'});
                    else
                        this.setState({[field + 'Err']: false});
                }
            }.bind(this));
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    setCommentParent(e, id = 0){
        this.setState({
            showCommentForm: !this.state.showCommentForm,
            commentParent: id
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.emailErr === false && this.state.nameErr === false && this.state.contentErr === false){ 
            let today = new Date();
            let dateTime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const formData = {
                post: this.props.id,
                author_name: this.state.name,
                author_email: this.state.email,
                author_url: this.state.email,
                content: this.state.content,
                // date: dateTime,
                parent:  this.state.commentParent
            };
            axios({
                method: 'post',
                url: 'https://bleap.in/wp-json/wp/v2/comments',
                params: formData/*,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }*/
            }).then(res => {
                if (res.data.status === 201 || res.data.parent != 0)
                    toast.success("Successfully submitted and awaiting for admin approval", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
                else
                    toast.error("Something went wrong", {
                        position: "top-center",
                        autoClose: false,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
            }).catch(error => {
                if (error.response) {
                    // Object.values(error.response.message).forEach(function(val){
                        document.getElementById('errors').innerHTML = '<p>'+error.response.data.message+'</p>';
                    // }.bind(this));
                }
            });

        } else {
            var elements = document.getElementsByTagName('input');
            // for (var i = 0; i < elements.length; i++) {
            //     console.log(i);
            //     // elements[i].focus();elements[i].blur();
            // }​
            toast.error("Validation Error", {
                position: "top-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            return;
        }
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
        let commentData = [];
        axios.get('https://www.bleap.in/wp-json/wp/v2/comments?post='+this.props.id+'&order=asc&orderby=id').then(res => {
            if (res.data) {
                commentData = res.data;
            }
        })
        setTimeout(() => {
            this.setState({
                categories: categories
            });
            this.setState({
                commentData: commentData
            });
            console.log(this.state.commentData)
        }, 1000);
    }

    componentDidMount() {
        // this.loadPostData();
        let url = (window.location.pathname).replace('/bleap', '')
        this.setState({
            postUrl: url
        });
    }
    
    render() {
        return (
            <div></div>
        )
    }
}

export default PostPage;