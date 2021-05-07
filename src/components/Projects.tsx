import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import PageTitle from '../components/PageTitle';

import * as styles from './Projects.module.scss';

function Projects({ data }) {
  const [githubProjects, setGithubProjects] = React.useState([]);

  const allProjects = [...data, ...githubProjects];

  const projects = allProjects.map((project, index) => (
    <Project project={project} key={index} />
  ));

  React.useEffect(() => {
    fetch('https://api.github.com/users/blendhamiti/repos')
      .then((response) => response.json())
      .then(
        (result) => {
          setGithubProjects(
            result.map((project) => {
              return {
                name: project.name,
                title: project.name,
                description: project.description,
                path: project.html_url,
                icons: [],
              };
            })
          );
        },
        (error) => console.log(error)
      );
  }, []);

  return (
    <div id="projects">
      <PageTitle title="Projects" />
      <div className={styles.projects}>{projects}</div>;
    </div>
  );
}

function Project({ project }) {
  const icons = project.icons.map((icon) => (
    <img
      src={require(`../images/icons/${icon}.svg`).default}
      alt={icon}
      width={25}
      height={25}
    />
  ));

  const linkButton = function () {
    if (project.path)
      return (
        <span>
          <a href={project.path} target="_blank">
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
            <div>{project.title}</div>
          </div>
          <div>
            <p>{project.description}</p>
          </div>
          <div>{linkButton()}</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
