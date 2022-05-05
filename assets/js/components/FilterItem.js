import React, {useState} from "react";

import "./FilterItem.scss";

export class FilterItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
        }
    }

    filterItemClickHandler = () => {
        this.setState((state) => {
            return {isActive: !state.isActive};
        });
    }

    render() {
        return (
            <div className={`filter__item ${this.state.isActive ? 'active' : ''}`.trim()} onClick={() => this.filterItemClickHandler()}>
                {this.props.text}
            </div>
        );
    }
}