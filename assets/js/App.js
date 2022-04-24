import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import { Profile } from "./components/Profile";
import { Card } from "./components/Card";

const data = {
    user: {
        name: "Billy Pearson",
        title: "Front-end developer",
        email: "billy@example.com",
        phone: "(+603) 546 624 342",
        bio: [
            "Self-motivated developer, who is willing to learn and create outstanding UI applications.",
            "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
        ],
        picture: {
            url: "https://images.pexels.com/photos/977402/pexels-photo-977402.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            altText: "",
        },
    }
}

export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Profile user={data.user} />
            </div>
        );
    }
}