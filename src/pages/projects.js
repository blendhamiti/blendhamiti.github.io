import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import PageTitle from '../components/pageTitle';
import projectsData from '../assets/config/projects.json';

function Projects() {
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [projects, setProjects] = React.useState(projectsData.projects);

    React.useEffect(() => {
        fetch("https://api.github.com/users/blendhamiti/repos")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    const githubProjects = result.map(project => {
                        return {
                            "title": project.name,
                            "description": project.description,
                            "url": project.html_url
                        }
                    })
                    const updatedData = [...projects, ...githubProjects]
                    setProjects(updatedData);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return (
        <div className="projects container" id="projects">
            <PageTitle title="Projects" />
            <ProjectList data={projects} />
        </div>
    );
}

function ProjectList(props) {
    const projects = props.data.map((element, index) =>
        <Project data={element} key={index} />
    );

    return (
        <div className="row">
            {projects}
        </div>
    );
}

function Project(props) {
    const features = function () {
        if (props.data.features) {
            const featureList = props.data.features.map((element, index) =>
                <li key={index}>{element}</li>
            );
            return (
                <ul>
                    {featureList}
                </ul>
            );
        }
        return;
    }

    const linkButton = function () {
        if (props.data.url)
            return (
                <span>
                    <a href={props.data.url} target="_blank" >
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
                <div className="text-block">
                    <div className="title">
                        <div className="title-text">{props.data.title}</div>
                    </div>
                    <div className="description">
                        <p>
                            {props.data.description}
                        </p>
                        {features()}
                    </div>
                    <div className="button">{linkButton()}</div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
