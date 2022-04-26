import React from "react";

import "./Profile.scss";
import { Card } from './Card';

export class Profile extends React.Component {
    cardDirection = "vertical";

    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    changeTransformFunction(e) {
        let pictureContainer = e.target.parentNode;
        pictureContainer.style.setProperty("--x", this.getRandomInteger(-1, 1));
        pictureContainer.style.setProperty("--y", this.getRandomInteger(-1, 1));
        pictureContainer.style.setProperty("--z", this.getRandomInteger(-1, 1));
        pictureContainer.style.setProperty("--angle", ".0" + this.getRandomInteger(10, 60) + "turn");
    }

    render() {
        const bioParagraphs = this.props.user.bio.map((paragraph, index) =>
            <div key={index}>
                <p>{paragraph}</p>
                {/* Add line break on vertical layout after each paragraph, except the last one */}
                { this.cardDirection === "vertical" && paragraph !== this.props.user.bio[this.props.user.bio.length - 1] && (<br/>) }
            </div>
        );

        return (
            <Card direction="horizontal">
                <figure className="profile">
                    <div className="profile__picture__container" onMouseEnter={(e) => this.changeTransformFunction(e)}>
                        <img src={this.props.user.picture.url} alt={this.props.user.picture.altText} className="profile__picture" />
                    </div>

                    <figcaption className="profile__content">
                        <div className="profile__identity">
                            <h1 className="profile__name">{this.props.user.name}</h1>
                            <h2 className="profile__title">{this.props.user.title}</h2>
                        </div>

                        <div className="profile__contact">
                            <div className="profile__email">
                                <span className="material-icons">email</span>
                                {this.props.user.email}
                            </div>

                            <div className="profile__phone">
                                <span className="material-icons">phone</span>
                                {this.props.user.phone}
                            </div>
                        </div>

                        <div className="profile__bio">{bioParagraphs}</div>
                    </figcaption>
                </figure>
            </Card>
        );
    }
}