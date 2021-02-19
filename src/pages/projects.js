import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import PageTitle from '../components/pageTitle';
import projectsData from '../assets/config/projects.json';

function Projects() {
    return (
        <div className="projects container" id="projects">
            <PageTitle title="Projects" />
            <ProjectList data={projectsData} />
        </div>
    );
}

function ProjectList(props) {
    const projects = props.data.projects.map((element, index) =>
        <Project data={element} key={index} />
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
    // const devIconStyle = {
    //     fill: "#e9ecef",
    //     width: "30px",
    // }
    // const icons = props.data.icons.map((element, index) =>
    //     <span className="icon" key={index} title={element}>
    //         <DevIcon icon={element} style={devIconStyle} />
    //     </span>
    // );
    const features = props.data.features.map((element, index) =>
        <li key={index}>{element}</li>
    );
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
        <div className="block-entry" data-aos="fade-left">
            <div className="block-entry-content">
                {/* <div className="icon-block">
                    {icons}
                </div> */}
                <div className="text-block">
                    <div className="title">
                        <div className="title-text">{props.data.title}</div>
                        <div className="title-button">{linkButton()}</div>
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
