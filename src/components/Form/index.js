
import {Component} from 'react'

import './index.css'

class Form extends Component {
    state = {name: '', email: '', mobile: '', nameErr: false, emailErr: false, mobileErr: false}


    validateForm = () => {
        const {name, email, mobile} = this.state
      
        if (name===""){
            this.setState({nameErr: "*Enter Name"})
        }else{
            this.setState({nameErr: ''})
        }
        if (email === ""){
            this.setState({emailErr: "*Enter Email"})
           
        }else{
            this.setState({emailErr: ''})
        }
        if (mobile==="" || mobile.length < 10 || mobile.length < 10){
            this.setState({mobileErr: "*Enter Valid Mobile Number"})
        }
        else{
            this.setState({mobileErr: ''})
        }
        return true 
    }

    registerSuccess = (msg) => {
        alert(msg)
        this.setState({name: '', email: '', mobile: ''})
    }

   

    submitForm = async (e) => {
       e.preventDefault()
       const {name, email, mobile} = this.state
       const formIsValid = this.validateForm()
       
       if (formIsValid){
        const url = "/api/signup"
        const details = {name, email,mobile}
        const options = {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
           },
         body: JSON.stringify(details)
        }
       
        const response = await fetch(url,options)
        
        if (response.ok){
            const data = await response.json()
            this.registerSuccess(data.message)
            
        }
        
        
       }
       

    }

    handleName= e => {
        this.setState({name: e.target.value})
    }

    handleEmail= e => {
        this.setState({email: e.target.value})
    }

    handleMobile= e => {
        this.setState({mobile: e.target.value})
   
    }

    renderForm = () => {
        const {name, email,mobile, nameErr, emailErr, mobileErr} = this.state
        return (
        <form className="form" onSubmit={this.submitForm}>
            <label htmlFor="name">Name*</label>
            <input value={name} onChange={this.handleName} className='input' type="text" id="name" placeholder='Enter Your Name'/>
            {nameErr && <p className='error-msg'>{nameErr}</p>}
            <label htmlFor="email">Email*</label>
            <input value={email} onChange={this.handleEmail} className='input' type="email" id="email" placeholder='Enter Your Email'/>
            {emailErr && <p className='error-msg'>{emailErr}</p>}
            <label htmlFor="mobile">Mobile Number*</label>
            <input value={mobile} onChange={this.handleMobile} className='input' type="number" id="mobile" placeholder='Enter Your Mobile Number'/>
            {mobileErr && <p className='error-msg'>{mobileErr}</p>}
            <button className="register-btn" type="submit">Register Now</button>
        </form>
        )
    }

    render(){
        
        return (
           <div className="main-form-container">
            <div className="form-left-section">
                <h1>Get In Touch</h1>
                <p>Please complete the form and we will get back to you.</p>
            </div>  
            {this.renderForm()}
           </div>
        )
    }
}

export default Form