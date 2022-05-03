import React from "react";

import "./HobbyList.scss"
import {Card} from "./Card";
import {Hobby} from "./Hobby";

export class HobbyList extends React.Component {

    hobbies = this.props.hobbies.map((hobby, index) =>
        <Hobby key={index} hobby={hobby} />
    );

    stylingObject = {
        card: {
            maxWidth: this.props.direction === "vertical"  ? "28em" : "initial",
        },
    }

    render() {
        return (
            <Card direction={this.props.direction} style={this.stylingObject.card}>
                <div className="hobbies">
                    <h2>Hobbies</h2>

                    <div className="hobbies__list">
                        {this.hobbies}
                    </div>
                </div>
            </Card>
        );
    }
}