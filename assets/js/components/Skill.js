import React from "react";

import "./Skill.scss";
import {ProgressBar} from "./ProgressBar";

export class Skill extends React.Component {
    render() {
        return (
            <div className="skill">
                <div className="skill__title">{this.props.progress.title}</div>
                <ProgressBar value={this.props.progress.value} className="skill__progress" />
            </div>
        );
    }
}