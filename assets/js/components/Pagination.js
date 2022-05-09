import React from "react";

import "./Pagination.scss";
import {FilterItem} from "./FilterItem";
import {PageItem} from "./PageItem";

export class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.pageCount = Math.floor(this.props.pageItems.length / this.props.itemsPerPage);
        let nextPage, prevPage;

        if(this.props.currentPage <= 0) {
            nextPage = 1;
            prevPage = this.pageCount;
        } else if(this.props.currentPage >= this.pageCount) {
            nextPage = 1;
            prevPage = this.pageCount;
        } else {
            nextPage = this.props.currentPage + 1;
            prevPage = this.props.currentPage - 1;
        }

        this.state = {
            items: this.paginate(this.props.pageItems, this.props.itemsPerPage, this.props.currentPage || 1),
            current: this.props.currentPage,
            next: nextPage,
            prev: prevPage,
        }

        this.pageItems = this.state.items.map((item, index) =>
            <PageItem key={index} text={index + 1} onPageChange={this.changePageHandler} />
        );
    }

    changePageHandler() {
        // if (this.props.currentPage < this.pageCount) {
        //     this.setState({
        //         items: this.paginate(this.props.state.items, this.props.itemsPerPage, this.props.currentPage + 1),
        //     });
        // }
        console.log(arguments)
    }

    /**
     * From https://stackoverflow.com/a/42761393/7058317
     * @param array array of what should be paginated
     * @param pageSize items per page
     * @param pageNumber
     * @returns {*} a portion of input array
     */
    paginate(array, pageSize, pageNumber) {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    }

    render() {
        console.log(this)
        return (
            <div className="pagination">
                {this.pageItems}
            </div>
        );
    }
}