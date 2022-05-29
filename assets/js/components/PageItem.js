import React, {useState} from "react";

import "./PageItem.scss";

export class PageItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isActive: false,
        }
    }

    handleClick = () => {
        this.props.onPageChange(this.props.text);
    }

    render() {
        let active = `page__item ${this.state.isActive ? 'active' : ''}`.trim();
        let text = this.props.text;

        return (
            <div className={active} onClick={this.handleClick}>
                <a href={"#"} className={"page__item__link"}>{text}</a>
            </div>
        );
    }
}