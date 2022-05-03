import React from "react";

import "./Experience.scss";

export class Experience extends React.Component {

    render() {
        return (
            <div className="experience">
                <div className="experience__logo__container">
                    <img src={this.props.experience.employer.logo.url} alt={this.props.experience.employer.logo.altText} className="experience__logo"/>
                </div>

                <div className="experience__details">
                    <h4 className="experience__period">{this.props.experience.startAt} - {this.props.experience.endAt}</h4>

                    <h3 className="experience__job">{this.props.experience.job}</h3>
                </div>

                <div className="experience__description">{this.props.experience.description}</div>
            </div>
        );
    }
}