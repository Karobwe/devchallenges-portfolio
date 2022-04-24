import React from 'react';
import ReactDOM from 'react-dom';

import './Profile.scss';
import { Card } from './Card';

export class Profile extends React.Component {
    cardDirection = 'vertical';

    render() {
        const bioParagraphs = this.props.user.bio.map((paragraph) =>
            <div>
                <p>{paragraph}</p>
                {/* Add line break on vertical layout after each paragraph, except the last one */}
                { this.cardDirection === "vertical" && paragraph !== this.props.user.bio[this.props.user.bio.length - 1] && (<br/>) }
            </div>
        );

        return (
            <Card direction="horizontal">
                <figure className="profile">
                    <div className="profile__picture__container">
                        <img src={this.props.user.picture.url} alt={this.props.user.picture.altText} className="profile__picture" />
                    </div>

                    <figcaption>
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