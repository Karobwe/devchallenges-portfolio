import React from "react";

import "./Hobby.scss";

export class Hobby extends React.Component {

    render() {
        return (
            <div className="hobby">
                <div className="hobby__picture__container">
                    <img src={this.props.hobby.picture.url} alt={this.props.hobby.picture.altText} className="hobby__picture"/>
                </div>

                <div className="hobby__details">
                    <h3 className="hobby__title">{this.props.hobby.title}</h3>

                    <p className="hobby__description">{this.props.hobby.description}</p>
                </div>
            </div>
        );
    }
}