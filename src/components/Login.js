import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirectToRegister: false,
        }
    }

    getLoginCredentials = () => {
        const {email, password} = this.state;
        return {"email": email, "password":password}
    }

    attemptlogin = (e) => {
        e.preventDefault()
        fetch('http://localhost:8080/login', {
            method: 'post',
            body: JSON.stringify(this.getLoginCredentials()),
            headers:{
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.headers.get("Authorization"))
                    localStorage.setItem("devConToken", response.headers.get("Authorization"))
                    localStorage.setItem("devConEmail", this.state.email)
                    this.props.setAuthenticated();
                    console.log("Logged in successfully")
                } else if (response.status === 403) {
                    console.log("Login failed")
                } else {
                    console.log("Error occured on the server")
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
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
                    <input type="submit" value="Login" onClick={this.attemptlogin}/>
                </form>
                <a href="#">Forgot Password?</a>
                <button onClick={this.setRedirectToRegister}>Register</button>
                {this.redirectToRegisterPage()}
            </div>
        )
    }
}

export default Login