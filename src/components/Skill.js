import React, { Component } from 'react';

class Skill extends Component {
    constructor(props) {
        super(props);
    }

    updateProfileSkillsMessage = () => {
        return {
            email: this.props.email,
            remove: true,
            skill: this.props.name
        }
    }

    removeSkill = (e) => {
        console.log(e.target.name)
        console.log("removing skill")

        fetch('https://localhost:8081/profile-service/update/skills', {
            method: 'post',
            body: JSON.stringify(this.updateProfileSkillsMessage)
        })
            .then((response) => response.json())
            .then((data) => {
            });
    }

    showRemove = (e) => {
        console.log(e.target.name)
        console.log("showing remove")
    }

    hideRemove = (e) => {
        console.log(e.target.name)
        console.log("hidding remove")
    }

    render() {
        return (
            <li name={this.props.name} onMouseEnter={this.showRemove} onMouseLeave={this.hideRemove}>{this.props.name}
                <span onClick={this.removeSkill}>x</span>
            </li>
        )
    }

}

export default Skill