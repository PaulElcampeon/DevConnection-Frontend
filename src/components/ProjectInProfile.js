import React, { Component } from 'react';
import GenericMessage from '../components/GenericMessage.js';

class ProjectInProfile extends Component {
    constructor(props) {
        super(props);
    }

    getProjectMessage = () => {
        return {
            title: this.props.title
        }
    }

    openProject = (e) => {
        console.log(e.target.name)
        console.log("showing remove")

        fetch('https://localhost:8081/project-service/get', {
            method: 'post',
            body: JSON.stringify(this.getProjectMessage)
        })
            .then((response) => response.json())
            .then((data) => {
            });
    }

    render() {
        return (
            <li name={this.props.title} onClick={this.openProject}>
                {this.props.title}
            </li>
        )
    }

}

export default ProjectInProfile