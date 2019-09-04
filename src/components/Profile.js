import React, { Component } from 'react';
import GenericMessage from '../components/GenericMessage.js';
import ProjectInProfile from './ProjectInProfile.js';
import Skill from './Skill.js';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: "",
            requestForProfile: false,
        }
    }

    componentDidMount() {
        console.log("calling")
        fetch('http://localhost:8080/profile-service/get', {
            method: 'post',
            body: JSON.stringify({ email: "dave@live.com" }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("devConToken")
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    userInfo: data
                })
            });
    }

    renderProfile = () => {
        console.log("yippe")
        if (this.state.userInfo !== "") {
            console.log("reading")
            return (
                <div>
                    <img src={this.state.userInfo.imageUrl} />
                    <h1>{this.state.userInfo.username}</h1>
                    <div>Years Experience:{this.state.userInfo.yearsExperience}</div>
                    <div className="description">
                        {this.state.userInfo.description}
                    </div>
                    <ul>
                        {this.state.userInfo.skills.map((skill) => <Skill skillName={skill} email={this.state.userInfo.email} />)}
                    </ul>

                    <ul>
                        {this.state.userInfo.currentProjects.map((project) => <ProjectInProfile title={project} email={this.state.userInfo.email} />)}
                    </ul>
                </div>
            )
        }
    }


    render() {
        return (
            <div>
                {this.renderProfile()}
            </div>
        )
    }
}


export default Profile