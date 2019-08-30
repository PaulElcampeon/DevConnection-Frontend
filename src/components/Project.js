import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props)

    }

    renderProject = () => {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.description}</h1>
                <h1>{this.props.owner}</h1>
                {this.props.positions.map((position) =>
                    <li>
                        <h1>{position.position} filled: {position.filled} ({this.name})</h1>
                    </li>
                )}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderProject}
            </div>
        )
    }
}
