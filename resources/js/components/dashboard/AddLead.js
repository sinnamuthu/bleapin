import React, { Component } from 'react';
import axios from 'axios';
import validator from 'validator';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '.././Config';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';

class AddLead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nameErr: '',
            phone: '',
            phoneErr: '',
            email: '',
            emailErr: '',
            city: '',
            cityErr: '',
            message: '',
            messageErr: '',
            formInvalid: false,
            interest: [],
            interestErr: '',
            modalemail: '',
            modalemailErr: '',
            source: 1,
            category: 0
        };
        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.modalValidateForm = this.modalValidateForm.bind(this);
        this.modalHandleSubmit = this.modalHandleSubmit.bind(this);
        this.interestChange = this.interestChange.bind(this);
        toast.configure();
    }

    componentDidMount(){
        if (!localStorage.getItem('modelShown')) {
            $('#myModal').modal('show');
            localStorage.setItem('modelShown', true);
        }
    }

    validateForm(event){
        const validateFields = ['name', 'phone'];
        if (event.target.name == 'email') {
            if (validator.isEmail(event.target.value)) 
                this.setState({emailErr: false});
            else if (validator.isEmpty(event.target.value))
                this.setState({emailErr: 'Email should not be empty'});
            else
                this.setState({emailErr: 'Email is Invalid'});
        } else {
            validateFields.forEach(function(field){
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
        this.validateForm(event);
        this.setState({ [event.target.name]: event.target.value });
    }

    interestChange(data = []){
        if (data == null)
            data = [];
        let newInterest = [];
        data.forEach(function(val, key){
            newInterest.push(val.value);
        });
        this.setState({
            interest: newInterest
        });
        setTimeout(() => {
            if (this.state.interest.length == 0) {
                this.setState({
                    interestErr: 'Atleast select one interest'
                });
            } else {
                this.setState({
                    interestErr: false
                });
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.interest.length == 0) {
            this.setState({
                interestErr: 'Atleast select one interest'
            });
            return;
        } else {
            this.setState({
                interestErr: false
            });
        }
        if (this.state.emailErr === false && this.state.nameErr === false && this.state.phoneErr === false){ //use || for more Err validations
            const formData = this.state;
            axios({
                method: 'post',
                url: config.ROUTE_URL+'/contact',
                params: formData/*,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }*/
            }).then(res => {
                if (res.data.status)
                    toast.success("Successfully submitted", {
                        position: "top-center",
                        autoClose: 1400,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
            }).catch(error => {
                Object.values(error.response.data.errors).forEach(function(val){
                    document.getElementById('errors').innerHTML = '<p>'+val+'</p>';
                }.bind(this));
            })

        } else {
            var elements = document.getElementsByTagName('input');
            // for (var i = 0; i < elements.length; i++) {
            //     console.log(i);
            //     // elements[i].focus();elements[i].blur();
            // }​
            toast.error("Please fill all the fields", {
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
    
    modalValidateForm(){
        if (validator.isEmail(event.target.value)) 
                this.setState({modalemailErr: false});
            else if (validator.isEmpty(event.target.value))
                this.setState({modalemailErr: 'Email should not be empty'});
            else
                this.setState({modalemailErr: 'Email is Invalid'});
    }

    modalHandleSubmit(event){
        event.preventDefault();
        if (this.state.modalemailErr == false) {
            let formData = {email: this.state.modalemail};
            axios({
                method: 'post',
                url: config.ROUTE_URL+'/join-us',
                params: formData
            }).then(res => {
                if (res.data.status) {
                    $('#myModal').modal('hide');
                    toast.success("Successfully submitted", {
                        position: "top-center",
                        autoClose: 1400,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
                }
            }).catch(error => {
                Object.values(error.response.data.errors).forEach(function(val){
                    document.getElementById('modal-errors').innerHTML = '<p>'+val+'</p>';
                }.bind(this));
            })
        } else{
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
    render() {
		const interestOptions = [
          { value: 'responsive', label: 'Responsive' },
          { value: 'eCommerce', label: 'E-Commerce' },
          { value: 'digitalMarketing', label: 'Digital Marketing' },
          { value: 'socialMedia', label: 'Social Media' },
          { value: 'seo', label: 'SEO' },
          { value: 'goodleAds', label: 'Goodle Ads' },
          { value: 'videoContent', label: 'Video Content' },
          { value: 'strategic', label: 'Strategic' }
        ];

        const interestStyles = {
            multiValue: (base, state) => {
                return state.data.isFixed ? { ...base, backgroundColor: 'gray' } : base;
            },
            multiValueLabel: (base, state) => {
                return state.data.isFixed
              ? { ...base, fontWeight: 'bold', color: 'white', paddingRight: 6 }
              : base;
            },
            multiValueRemove: (base, state) => {
                return state.data.isFixed ? { ...base, display: 'none' } : base;
            },
    };    
        
    return (
    	<React.Fragment>
            <MetaTags>
                <title>Add Lead</title>
            </MetaTags>
    		<section className= "container">
				<section className="card">
					<section className="card-body">
						<section className="row">
			                <aside className="col-lg-6">
							    <section className="contact-form-section">
                                <div id="errors"></div>							
			                    <section className="form">
			                        <form onSubmit={this.handleSubmit} noValidate>
			                            <div className={(this.state.nameErr) ? 'has-error form-group' : 'form-group'}>
			                                <input id="name" type="text" className="form-control border-bottom inputText" name="name" value={this.state.name}  required autoComplete="name" onChange={this.handleChange} onBlur={this.handleChange} placeholder="Name*" />
			                                {this.state.nameErr && <p className="help-block bg-white">{this.state.nameErr}</p> }
			                            </div>
			                            <div className={(this.state.phoneErr) ? 'has-error form-group' : 'form-group'}>
			                                <input id="phne" type="text" className="form-control border-bottom inputText" name="phone" value={this.state.phone}  onChange={this.handleChange} onBlur={this.handleChange} required autoComplete="phone" placeholder="Phone No*" />
			                                {this.state.phoneErr && <p className="help-block bg-white">{this.state.phoneErr}</p> }
			                            </div>
			                            <div className={(this.state.emailErr) ? 'has-error form-group' : 'form-group'}>
			                                <input id="email" type="email" className="form-control border-bottom inputText" name="email" value={this.state.email} onChange={this.handleChange} onBlur={this.handleChange} required autoComplete="email" placeholder="Email Id*" />
			                                {this.state.emailErr && <p className="help-block bg-white">{this.state.emailErr}</p> }
			                            </div>
			                            <div className={(this.state.cityErr) ? 'has-error form-group' : 'form-group'}>
			                                <input id="city" type="text" className="form-control border-bottom inputText" name="city" value={this.state.city}  onChange={this.handleChange} onBlur={this.handleChange} autoComplete="city" placeholder="City" />
			                                {this.state.cityErr && <p className="help-block bg-white">{this.state.cityErr}</p> }
			                            </div>
			                            <div className="form-group">
			                                <Select
			                                    name="interest"
			                                    onChange={this.interestChange}
			                                    isMulti
			                                    name="colors"
			                                    options={interestOptions}
			                                    className="sel-control"
			                                    classNamePrefix="select"
			                                />
			                                {this.state.interestErr && <p className="help-block bg-white">{this.state.interestErr}</p> }
			                            </div>
			                            <div className={(this.state.messageErr) ? 'has-error form-group' : 'form-group'}>
			                                <textarea id="message"className="form-control border-bottom inputText" name="message" value={this.state.message} onClick={this.validateForm} onChange={this.handleChange} placeholder="your message..."></textarea>
			                                {this.state.messageErr && <p className="help-block bg-white">{this.state.messageErr}</p> }
			                            </div>
			                            <div className="form-group">
			                                <select id="source"  defaultValue={1} className="form-control border-bottom inputText" name="source" onChange={this.handleChange}>
			                                	<option value="0">Website</option>
			                                	<option value="1">Phone</option>
			                                	<option value="2">TypeForm</option>
			                                </select>
			                            </div>
			                            <div className="form-group">
			                                <select id="category" defaultValue={0} className="form-control border-bottom inputText" name="category" onChange={this.handleChange}>
			                                	<option value="0">Lead</option>
			                                	<option value="1">Contact</option>
			                                </select>
			                            </div>
                                        {/*<div className="form-group">
                                            <input id="created_at" type="text" className="form-control border-bottom inputText" name="created_at" onChange={this.handleChange}/>
                                        </div>*/}
			                            <div className="form-group mb-0">
			                                <div className="col-md-8">
			                                    <button type="submit" className="btn-primary" style={{border: '2px solid #FFF'}}>
			                                        Send Now
			                                    </button>
			                                </div>
			                            </div>
			                        </form>
			                    </section>
			                    </section>
			                </aside>
	                    </section>
                    </section>
                </section>
            </section>
	    </React.Fragment>    
        );
    }
}
export default AddLead;