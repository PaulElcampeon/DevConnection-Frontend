import React, { Component } from 'react';
import GenericMessage from '../components/GenericMessage.js';
import ProjectInProfile from './ProjectInProfile.js';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:8081/profile-service/get', {
            method: 'post',
            body: JSON.stringify(GenericMessage())
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    userInfo: data
                })
            });
    }

    renderProfile = () => {
        const {userInfo} = this.state.userInfo;

        if (userInfo !== null) {
            return (
                <dviv>
                    <img src={userInfo.imageUrl}/>
                    <h1>{userInfo.username}</h1>
                    <div>Years Experience:{userInfo.yearsExperience}</div>
                    <div className="description">
                        {userInfo.description}
                    </div>
                    <ul>
                        {userInfo.skills.map((skill) => <Skill skillName={skill} email={userInfo.email}/>)}
                    </ul>

                    <ul>
                        {userInfo.currentProjects.map((project) => <ProjectInProfile title={project} email={userInfo.email}/>)}
                    </ul>
                </dviv>
            )
        }
    }


    render() {
        return (
            <div>
                {this.renderProfile}
            </div>
        )
    }
}


export default Profile