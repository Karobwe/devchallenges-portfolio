import React from "react";

import "./Pagination.scss";
import {FilterItem} from "./FilterItem";
import {PageItem} from "./PageItem";

export class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.onPageChange = this.onPageChange.bind(this);

        this.pageCount = Math.floor(this.props.items.length / this.props.count);

        this.state = {
            itemsInCurrentPage: this.paginate(this.props.items, this.props.count, this.props.page || 1),
            page: this.props.page,
        }

        this.pageItems = this.state.itemsInCurrentPage.map((item, index) =>
            <PageItem key={index + 1} text={index + 1} onPageChange={this.onPageChange} />
        );
    }

    paginate(array, pageSize, pageNumber) {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    }

    onPageChange(pageNumber) {
        this.setState(
            {
                itemsInCurrentPage: this.paginate(this.props.items, this.props.count, pageNumber || this.props.page)
            }
        );
    }

    render() {
        return (
            <div className="pagination">
                {this.pageItems}
            </div>
        );
    }
}