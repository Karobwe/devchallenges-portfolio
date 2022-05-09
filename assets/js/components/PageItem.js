import React, {useState} from "react";

import "./PageItem.scss";

export class PageItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
        }
    }

    pageItemClickHandler = () => {
        this.setState((state) => {
            return {isActive: !state.isActive};
        });

        this.props.onPageChange();
    }

    render() {
        return (
            <div
                className={`page__item ${this.state.isActive ? 'active' : ''}`.trim()}
                onClick={() => this.pageItemClickHandler()}
            >
                <a href={"#"} className={"page__item__link"}>{this.props.text}</a>
            </div>
        );
    }
}