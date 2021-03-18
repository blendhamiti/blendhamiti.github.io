import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import PageTitle from '../components/pageTitle';

function Projects() {
    const [localProjects, setLocalProjects] = React.useState([]);
    const [ghProjects, setGhProjects] = React.useState([]);
    const projects = [...localProjects, ...ghProjects];

    React.useEffect(() => {
        fetch("/api/projects.json")
            .then(response => response.json())
            .then(
                result => setLocalProjects(result.projects),
                error => console.log(error)
            )
    }, []);

    React.useEffect(() => {
        fetch("https://api.github.com/users/blendhamiti/repos")
            .then(response => response.json())
            .then(
                result => setGhProjects(result.map(project => {
                    return {
                        "name": project.name,
                        "title": project.name,
                        "description": project.description,
                        "path": project.html_url,
                        "icons": []
                    }
                })),
                error => console.log(error)
            )
    }, []);

    return (
        <div className="projects container" id="projects">
            <PageTitle title="Projects" />
            <ProjectList projects={projects} />
        </div>
    );
}

function ProjectList(props) {
    const projects = props.projects.map(project =>
        <Project
            data={project}
            key={project.name} />
    );

    return (
        <div className="row">
            {projects}
        </div>
    );
}

function Project(props) {
    const icons = props.data.icons.map(icon =>
        <img
            className="icon"
            src={icon.path}
            height="25px"
            alt={icon.name}
            key={icon.name}
        />
    );

    const linkButton = function () {
        if (props.data.path)
            return (
                <span>
                    <a href={props.data.path} target="_blank" >
                        <button>
                            View in GitHub
                                <span> </span>
                            <FontAwesomeIcon icon={faGithub} />
                        </button>
                    </a>
                </span>
            );
    }

    return (
        <div className="block-entry">
            <div className="block-entry-content">
                <div className="icon-block">
                    {icons}
                </div>
                <div className="text-block">
                    <div className="title">
                        <div className="title-text">{props.data.title}</div>
                    </div>
                    <div className="description">
                        <p>
                            {props.data.description}
                        </p>
                    </div>
                    <div className="button">{linkButton()}</div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
