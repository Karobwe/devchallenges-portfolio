import React from "react";

import "./ExperienceList.scss"
import "./Experience";
import {Experience} from "./Experience";
import {Card} from "./Card";

export class ExperienceList extends React.Component {
    experiencesList = this.props.experiences.map((experience, index) =>
        <Experience key={index} experience={experience} />
    );

    stylingObject = {
        card: {
            maxWidth: this.props.direction === "vertical"  ? "28em" : "initial",
        },
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card direction={this.props.direction} style={this.stylingObject.card}>
                <div className="experiences">
                    <h2>Experiences</h2>

                    <div className="experiences__list">
                        {this.experiencesList}
                    </div>
                </div>
            </Card>
        );
    }
}