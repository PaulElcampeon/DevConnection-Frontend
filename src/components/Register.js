import React, { Component } from 'react';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <div className="registerDiv">
                <h1>Register</h1>
                <form>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="text" name="confirmUsername" placeholder="Confirm Username" />

                    <input type="email" name="email" placeholder="Email" />
                    <input type="email" name="confirmEmail" placeholder="Confirm Email" />

                    <input type="password" name="password" placeholder="Password" />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" />

                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default Register