import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirectToRegister: false
        }
    }

    attemptlogin = () => {
        fetch('http://localhost:8080/login', {
            method: 'post',
            body: JSON.stringify()
        })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((data) => {
                console.log(data)
            });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    triggerAuthenticated =  (e) => {
        e.preventDefault()
        this.props.setAuthenticated();
    }

    setRedirectToRegister = () => {
        this.setState({
            redirectToRegister: true
        })
    }

    redirectToRegisterPage = () => {
        if (this.state.redirectToRegister) {
            return <Redirect to="register"/>
        }

    }

    render() {
        return (
            <div className="loginDiv">
                <h1>Please Login</h1>
                <form>
                    <input type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                    <input type="submit" value="Login" onClick={this.triggerAuthenticated}/>
                </form>
                <a href="#">Forgot Password?</a>
                <button onClick={this.setRedirectToRegister}>Register</button>
                {this.redirectToRegisterPage()}
            </div>
        )
    }
}

export default Login