import React from "react";

import "./ProjectList.scss";
import {Project} from "./Project";

export class ProjectList extends React.Component {
    projectsList = this.props.projects.map((project, index) =>
        <Project key={index} project={project} />
    );

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className={`projects ${this.props.direction === 'vertical' ? ' vertical' : 'horizontal'}`.trim()}>
                {this.projectsList}
            </ul>
        );
    }
}