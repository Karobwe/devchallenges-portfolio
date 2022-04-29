import React from 'react';
import './App.scss';
import { Profile } from "./components/Profile";
import {ProjectList} from "./components/ProjectList";
import {Project} from "./components/Project";

const data = require('./data.json');

export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Profile user={data.user} />
                <Profile user={data.user} direction="horizontal" />
                {/*<ProjectList projects={data.projects} direction="vertical" />*/}
                <Project project={data.projects[0]} direction="vertical" />
                <Project project={data.projects[0]} direction="horizontal" />
            </div>
        );
    }
}