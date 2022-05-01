import React from "react";

import "./SkillList.scss";
import {Card} from "./Card";
import {Skill} from "./Skill";

export class SkillList extends React.Component {
    skillList = this.props.skills.subSkills.map((skill, index) =>
        <li key={index}>
            <Skill progress={skill} />
        </li>
    );

    constructor(props) {
        super(props);
        console.log(this.skillList)
    }

    render() {
        return (
            <Card direction={this.props.direction === "horizontal" ? "horizontal" : "vertical"}>
                <div className="skills">
                    <h3 className="skills__title">{this.props.skills.domain}</h3>

                    <ul>{this.skillList}</ul>
                </div>
            </Card>
        );
    }
}