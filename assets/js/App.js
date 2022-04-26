import React from 'react';
import './App.scss';
import { Profile } from "./components/Profile";
import {ProjectList} from "./components/ProjectList";

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
    },
    projects: [
        {
            title: "404 Not Found",
            description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
            tags: ["HTML", "CSS", "responsive"],
            picture: {
                url: "https://images.pexels.com/photos/192273/pexels-photo-192273.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                altText: "",
            },
            links: {
                demo: "https://sad-jepsen-a4528b.netlify.app/",
                code: "https://github.com/Karobwe/devchallenges-edie-homepage",
            },
        },
        {
            title: "My team page",
            description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
            tags: ["HTML", "CSS", "responsive"],
            picture: {
                url: "https://images.pexels.com/photos/192273/pexels-photo-192273.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                altText: "",
            },
            links: {
                demo: "https://happy-varahamihira-7f756e.netlify.app/",
                code: "https://github.com/Karobwe/devchallenges-my-team-page",
            },
        },
        {
            title: "Interior Consultant",
            description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
            tags: ["HTML", "CSS", "responsive"],
            picture: {
                url: "https://images.pexels.com/photos/192273/pexels-photo-192273.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                altText: "",
            },
            links: {
                demo: "https://sad-jepsen-a4528b.netlify.app/",
                code: "https://github.com/Karobwe/devchallenges-edie-homepage",
            },
        },
        {
            title: "Recipe Blog",
            description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
            tags: ["HTML", "CSS", "responsive"],
            picture: {
                url: "https://images.pexels.com/photos/192273/pexels-photo-192273.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                altText: "",
            },
            links: {
                demo: "https://sad-jepsen-a4528b.netlify.app/",
                code: "https://github.com/Karobwe/devchallenges-edie-homepage",
            },
        },
        {
            title: "My Gallery",
            description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
            tags: ["HTML", "CSS", "responsive"],
            picture: {
                url: "https://images.pexels.com/photos/192273/pexels-photo-192273.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                altText: "",
            },
            links: {
                demo: "https://sad-jepsen-a4528b.netlify.app/",
                code: "https://github.com/Karobwe/devchallenges-edie-homepage",
            },
        },
        {
            title: "Checkout",
            description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
            tags: ["HTML", "CSS", "responsive"],
            picture: {
                url: "https://images.pexels.com/photos/192273/pexels-photo-192273.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                altText: "",
            },
            links: {
                demo: "https://sad-jepsen-a4528b.netlify.app/",
                code: "https://github.com/Karobwe/devchallenges-edie-homepage",
            },
        },
        {
            title: "Edie Homepage",
            description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
            tags: ["HTML", "CSS", "responsive"],
            picture: {
                url: "https://images.pexels.com/photos/192273/pexels-photo-192273.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                altText: "",
            },
            links: {
                demo: "https://sad-jepsen-a4528b.netlify.app/",
                code: "https://github.com/Karobwe/devchallenges-edie-homepage",
            },
        },
        {
            title: "Portfolio",
            description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
            tags: ["HTML", "CSS", "responsive"],
            picture: {
                url: "https://images.pexels.com/photos/192273/pexels-photo-192273.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                altText: "",
            },
            links: {
                demo: "https://sad-jepsen-a4528b.netlify.app/",
                code: "https://github.com/Karobwe/devchallenges-edie-homepage",
            },
        },
    ],
}

export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Profile user={data.user} />
                <ProjectList projects={data.projects} direction="vertical" />
            </div>
        );
    }
}