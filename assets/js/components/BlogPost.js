import React from "react";

import "./BlogPost.scss";
import {Card} from "./Card";

export class BlogPost extends React.Component {
    stylingObject = {
        card: {
            paddingRight: 0,
        },
    }

    render() {
        return (
            <Card direction={this.props.direction} style={this.stylingObject.card}>
                <div className="blog-post">
                    <div className="blog-post__category">{this.props.post.category}</div>
                    <h3 className="blog-post__title">{this.props.post.title}</h3>
                    <img className="blog-post__picture" src={this.props.post.picture.url} alt={this.props.post.picture.altText}/>
                    <div className="blog-post__description">{this.props.post.description}</div>
                    <a href={this.props.post.link.url} className="blog-post__link">{this.props.post.link.value}</a>
                </div>
            </Card>
        );
    }
}