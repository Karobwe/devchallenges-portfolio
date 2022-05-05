import React from "react";

import "./SimpleListHeader.scss";
import {Card} from "./Card";

export class SimpleListHeader extends React.Component {

    render() {
        return (
            <Card>
                <div className="simple-list">
                    <h3 className={"simple-list__title"}>{this.props.title}{typeof this.props.list === "object" ? " (" + this.props.list.length + ")" : ""}</h3>

                    <div className="simple-list__header">
                        {this.props.children}
                    </div>
                </div>
            </Card>
        );
    }
}