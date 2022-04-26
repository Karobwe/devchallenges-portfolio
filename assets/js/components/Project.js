import React from "react";

import "./Project.scss";
import { Card } from './Card';

export class Project extends React.Component {
    tags = this.props.project.tags.map((tag, index) =>
        <li key={index} className="tag">{tag}</li>
    );

    render() {
        return (
            <Card direction="horizontal">
                <figure className="project">
                    <div className="project__picture__container">
                        <img src={this.props.project.picture.url} alt={this.props.project.picture.altText} className="project__picture" />
                    </div>

                    <figcaption className="project__content">
                        <ul className="project__tags">
                            {this.tags}
                        </ul>

                        <h3 className="project__title">{this.props.project.title}</h3>

                        <p className="project__description">{this.props.project.description}</p>

                        <div className="project__links">
                            <a href={this.props.project.links.demo} className="project__demo" target="_blank">Demo</a>
                            <a href={this.props.project.links.code} className="project__code" target="_blank">Code</a>
                        </div>
                    </figcaption>
                </figure>
            </Card>
        );
    }
}