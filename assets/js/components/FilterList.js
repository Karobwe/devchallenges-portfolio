import React from "react";

import "./FilterList.scss";
import {FilterItem} from "./FilterItem";

export class FilterList extends React.Component {

    filters = this.props.filters.map((tag, index) =>
        <FilterItem key={index} text={tag} />
    );

    render() {
        return (
            <div className="filters">
                {this.filters}
            </div>
        );
    }
}