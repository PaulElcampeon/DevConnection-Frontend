import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <div className="loginDiv">
                <h1>Please Login</h1>
                <form>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="submit" value="Login" />
                </form>
                <a href="#">Forgot Password?</a>
                <button>Register</button>
            </div>
        )
    }
}

export default Login