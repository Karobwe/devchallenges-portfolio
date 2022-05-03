import React from 'react';

import './App.scss';
import {Showcase} from "./components/Showcase";

const data = require('./data.json');

export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Showcase />
            </div>
        );
    }
}