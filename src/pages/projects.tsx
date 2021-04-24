import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import PageTitle from "../components/pageTitle";

import styles from "./projects.module.scss";

function Projects() {
    const [localProjects, setLocalProjects] = React.useState([]);
    const [ghProjects, setGhProjects] = React.useState([]);
    const projects = [...localProjects, ...ghProjects];

    React.useEffect(() => {
        fetch("/api/projects.json")
            .then((response) => response.json())
            .then(
                (result) => setLocalProjects(result.projects),
                (error) => console.log(error)
            );
    }, []);

    React.useEffect(() => {
        fetch("https://api.github.com/users/blendhamiti/repos")
            .then((response) => response.json())
            .then(
                (result) =>
                    setGhProjects(
                        result.map((project) => {
                            return {
                                name: project.name,
                                title: project.name,
                                description: project.description,
                                path: project.html_url,
                                icons: [],
                            };
                        })
                    ),
                (error) => console.log(error)
            );
    }, []);

    return (
        <div id="projects">
            <PageTitle title="Projects" />
            <ProjectList projects={projects} />
        </div>
    );
}

function ProjectList(props) {
    const projects = props.projects.map((project) => (
        <Project data={project} key={project.name} />
    ));

    return <div className={styles.projects}>{projects}</div>;
}

function Project(props) {
    const icons = props.data.icons.map((icon) => (
        <img src={icon.path} height="25px" alt={icon.name} key={icon.name} />
    ));

    const linkButton = function () {
        if (props.data.path)
            return (
                <span>
                    <a href={props.data.path} target="_blank">
                        <button>
                            View in GitHub <FontAwesomeIcon icon={faGithub} />
                        </button>
                    </a>
                </span>
            );
    };

    return (
        <div>
            <div>
                <div>{icons}</div>
                <div>
                    <div>
                        <div>{props.data.title}</div>
                    </div>
                    <div>
                        <p>{props.data.description}</p>
                    </div>
                    <div>{linkButton()}</div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
