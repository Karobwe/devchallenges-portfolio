import React from 'react';

import { Profile } from "./Profile";
import {ProjectList} from "./ProjectList";
import {Project} from "./Project";
import {ProgressBar} from "./ProgressBar";
import {Skill} from "./Skill";
import {SkillList} from "./SkillList";
import {BlogPost} from "./BlogPost";
import {Experience} from "./Experience";
import {ExperienceList} from "./ExperienceList";
import {Hobby} from "./Hobby";
import {HobbyList} from "./HobbyList";
import {SimpleListHeader} from "./SimpleListHeader";
import {FilterItem} from "./FilterItem";
import {FilterList} from "./FilterList";
import {PageItem} from "./PageItem";
import {Pagination} from "./Pagination";

const data = require('../data.json');

export class Showcase extends React.Component {

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
            <>
                {/*<Profile user={data.user} />*/}
                {/*<Profile user={data.user} direction="horizontal" />*/}
                {/*/!*<ProjectList projects={data.projects} direction="vertical" />*!/*/}
                {/*<Project project={data.projects[0]} direction="vertical" />*/}
                {/*<Project project={data.projects[0]} direction="horizontal" />*/}
                {/*<ProgressBar title={data.skills[0].subSkills[4].title} value={data.skills[0].subSkills[4].value} showValue={data.skills[0].subSkills[4].showValue} />*/}
                {/*<Skill progress={data.skills[0].subSkills[0]} />*/}
                {/*<SkillList skills={data.skills[0]} />*/}
                {/*<SkillList skills={data.skills[1]} direction="horizontal" />*/}
                {/*<BlogPost post={data.blogPosts[0]} direction="vertical" />*/}
                {/*<BlogPost post={data.blogPosts[0]} direction="horizontal" />*/}
                {/*<Experience experience={data.experiences[0]} />*/}
                {/*<ExperienceList experiences={data.experiences} direction="vertical" />*/}
                {/*<ExperienceList experiences={data.experiences} direction="horizontal" />*/}
                {/*<Hobby hobby={data.hobbies[0]} />*/}
                {/*<HobbyList hobbies={data.hobbies} direction="horizontal" />*/}
                {/*<HobbyList hobbies={data.hobbies} direction="vertical" />*/}
                {/*<SimpleListHeader title="Projects" list={data.projects} />*/}
                {/*<FilterItem text="React" />*/}
                {/*<FilterList projects={data.projects} filters={this.filters} />*/}
                {/*<SimpleListHeader title={"Projects"} list={data.projects}>*/}
                {/*    <FilterList projects={data.projects} filters={this.filters} />*/}
                {/*</SimpleListHeader>*/}
                <PageItem text={1} />
                <Pagination pageItems={data.projects} itemsPerPage={3} currentPage={1} />
            </>
        );
    }
}