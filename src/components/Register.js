import React, { Component } from 'react';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            confirmUsername: "",
            email: "",
            confirmEmail: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:8080/account/register', {
            method: 'post',
            body: JSON.stringify(this.state),
            headers:{
                'Content-Type': 'application/json',
            }
        })
            .then((response) =>  response.json())
            .then((data) => {
                if (data.status === 201) {
                    console.log("Registered successfully")
                } else if (data.status === 403) {
                    console.log(data.message)
                } else {
                    console.log("An error has occured on the server")
                }
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="registerDiv">
                <h1>Register</h1>
                <form>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
                    <input type="text" name="confirmUsername" placeholder="Confirm Username" onChange={this.handleChange}/>

                    <input type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                    <input type="email" name="confirmEmail" placeholder="Confirm Email" onChange={this.handleChange}/>

                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange}/>

                    <input type="submit" value="Register" onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }
}

export default Register