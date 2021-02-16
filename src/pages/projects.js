import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import PageTitle from '../components/pageTitle';
import projectsData from '../assets/config/projects.json'

function Projects() {
    return (
        <div className="projects container">
            <PageTitle title="Projects" />
            <ProjectList data={projectsData} />
        </div>
    );
}

function ProjectList(props) {
    const projects = props.data.projects.map((element) =>
        <Project data={element} />
    );

    return (
        <div className="row">
            <div className="col">
                {projects}
            </div>
        </div>
    );
}

function Project(props) {
    const icons = props.data.icons.map((element) =>
        <span className="icon">
        </span>
    );
    const features = props.data.features.map((element) =>
        <li>{element}</li>
    );

    return (
        <div className="block-entry">
            <div className="block-entry-content">
                <div className="icon-block">
                    {icons}
                </div>
                <div className="text-block">
                    <div className="title">
                        <span>{props.data.title}</span>
                        <span> </span>
                        <span>
                            <button>
                                View in GitHub
                                <span> </span>
                                <FontAwesomeIcon icon={faGithub} />
                            </button>
                        </span>
                    </div>
                    <div className="description">
                        <p>
                            {props.data.description}
                        </p>
                        <ul>
                            {features}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
