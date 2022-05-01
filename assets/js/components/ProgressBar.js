import React from "react";

import "./ProgressBar.scss";

export class ProgressBar extends React.Component {
    stylingObject = {
        progress: {
            width: typeof this.props.value === "string" ? this.props.value : parseInt(this.props.value) + "%",
        },
        value: {
            visibility: this.props.showValue === true ? "visible" : "hidden",
        }
    }

    render() {
        return (
            <div className="progressbar">
                <div className="progress" style={this.stylingObject.progress}>
                    <span className="progress__value" style={this.stylingObject.value}>
                        {this.props.value || "."}
                    </span>
                </div>
            </div>
        );
    }
}