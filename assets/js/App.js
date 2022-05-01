import React from 'react';
import './App.scss';
import { Profile } from "./components/Profile";
import {ProjectList} from "./components/ProjectList";
import {Project} from "./components/Project";
import {ProgressBar} from "./components/ProgressBar";
import {Skill} from "./components/Skill";
import {SkillList} from "./components/SkillList";
import {BlogPost} from "./components/BlogPost";

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
                <ProgressBar title={data.skills[0].subSkills[4].title} value={data.skills[0].subSkills[4].value} showValue={data.skills[0].subSkills[4].showValue} />
                <Skill progress={data.skills[0].subSkills[0]} />
                <SkillList skills={data.skills[0]} />
                <SkillList skills={data.skills[1]} direction="horizontal" />
                <BlogPost post={data.blogPosts[0]} direction="vertical" />
                <BlogPost post={data.blogPosts[0]} direction="horizontal" />
            </div>
        );
    }
}