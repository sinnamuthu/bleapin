import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
            email: '',
            // emailErr: '',
            password: ''
        };
        // this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        toast.configure();
	}

	componentDidMount() {
		// document.getElementById('csrf-token').value = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
	}

	handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

	handleSubmit(event) {
        event.preventDefault();
        const formData = this.state;
        axios({
            method: 'POST',
            url: '/login',
            params: formData
        }).then(res => {
        	console.log(res.data);
            if (res.data.status)
                window.location.href = "/dashboard";
            else{
            	toast.error("Credentials do not match", {
	                position: "top-center",
	                autoClose: false,
	                hideProgressBar: false,
	                closeOnClick: true,
	                pauseOnHover: true,
	                draggable: true
	            });
	            return;
            }
        }).catch(error => {
            if (error.response) {
                Object.values(error.response.data.errors).forEach(function(val){
                    document.getElementById('errors').innerHTML = '<p>'+val+'</p>';
                }.bind(this));
            }
        });
    }

	render() {
		return (
			<section className="sub-page login">
                <section className="container">
                    <div className="row justify-content-center">
				        <div className="col-md-8">
				            <div className="card">
				            	<div id="errors"></div>
				                <div className="card-header">Login</div>

				                <div className="card-body">
				                    <form onSubmit={this.handleSubmit}>
				                        <div className="form-group row">
				                            <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

				                            <div className="col-md-6">
				                                <input id="email" type="email" className="form-control" name="email" value={this.state.email}  onChange={this.handleChange} required autoComplete="email" autoFocus />
				                            </div>
				                        </div>

				                        <div className="form-group row">
				                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

				                            <div className="col-md-6">
				                                <input id="password" type="password" className="form-control" name="password" value={this.state.password}  onChange={this.handleChange} required autoComplete="current-password" />
				                            </div>
				                        </div>

				                        <div className="form-group row">
				                            <div className="col-md-6 offset-md-4">
				                                <div className="form-check">
				                                    <input className="form-check-input" type="checkbox" name="remember" id="remember" />

				                                    <label className="form-check-label" htmlFor="remember">
				                                        Remember Me
				                                    </label>
				                                </div>
				                            </div>
				                        </div>

				                        <div className="form-group row mb-0">
				                            <div className="col-md-8 offset-md-4">
				                                <button type="submit" className="btn btn-primary">
				                                    Login
				                                </button>
				                            </div>
				                        </div>
				                    </form>
				                </div>
				            </div>
				        </div>
				    </div>
                </section>
            </section>
		);
	}
}

export default Login;