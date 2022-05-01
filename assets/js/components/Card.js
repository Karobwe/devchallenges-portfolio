import React from "react";

import "./Card.scss";

/**
 * Represent a UI card
 *
 * "direction" prop accept "horizontal" or "vertical" as value (horizontal by default)
 */
export class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`card ${this.props.direction === 'vertical' ? ' vertical' : 'horizontal'}`.trim()} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}