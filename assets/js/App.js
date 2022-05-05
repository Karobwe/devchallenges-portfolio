import React from 'react';

import './App.scss';
import {Showcase} from "./components/Showcase";
import {FilterItem} from "./components/FilterItem";
import {FilterList} from "./components/FilterList";
import {SimpleListHeader} from "./components/SimpleListHeader";

const data = require('./data.json');

export class App extends React.Component {

    filters = [];

    constructor(props) {
        super(props);

        data.projects.map(project => {
            project.tags.forEach(tag => {
                if(!this.filters.includes(tag)) this.filters.push(tag);
            });
        });

        this.filters = [... new Set(this.filters)];
    }

    render() {
        return (
            <div className="container">
                {/*<Showcase />*/}
                <FilterItem text="React" />
                <FilterList projects={data.projects} filters={this.filters} />
                <SimpleListHeader title={"Projects"}>
                    <FilterList projects={data.projects} filters={this.filters} />
                </SimpleListHeader>
            </div>
        );
    }
}