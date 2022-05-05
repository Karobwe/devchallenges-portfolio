import React, {useState} from "react";

import "./FilterItem.scss";

export class FilterItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            itemClass: "filter__item"
        }
    }

    filterItemClickHandler = (e) => {
        let items = this.state.itemClass.split(" ");

        if(items.indexOf("active") === -1) {
            items.push("active");

            this.setState((prevState) => {
                return {itemClass: (prevState.itemClass + " active").trim()}
            });
        } else {
            items = items.splice(items.indexOf("active"), 1);

            this.setState((prevState) => {
                return {itemClass: prevState.itemClass.split(" ").splice(items.indexOf("active"), 1).join(" ")}
            });
        }

        // All above code job could be done without state and in one line: e.target.classList.toggle("active");
    }

    render() {
        return (
            <div className={this.state.itemClass} onClick={(e) => this.filterItemClickHandler(e)}>
                {this.props.text}
            </div>
        );
    }
}