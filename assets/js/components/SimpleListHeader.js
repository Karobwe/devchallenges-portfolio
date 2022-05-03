import React from "react";

import "./SimpleListHeader.scss";
import {Card} from "./Card";

export class SimpleListHeader extends React.Component {

    constructor(props) {
        super(props);
        console.log(typeof props.list)
    }

    render() {
        return (
            <Card>
                <h3>{this.props.title}{typeof this.props.list === "object" ? " (" + this.props.list.length + ")" : ""}</h3>
            </Card>
        );
    }
}