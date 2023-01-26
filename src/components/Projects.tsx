import React, { FC, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import PageTitle from '../components/PageTitle';
import { TProject } from '../util/types';

import * as styles from './Projects.module.scss';

interface ProjectProps {
  project: TProject;
}

const Projects: FC<{}> = () => {
  const getProjectsResult = useStaticQuery(graphql`
    query getProjects {
      allApiJson {
        nodes {
          projects {
            description
            icons
            name
            title
            path
          }
        }
      }
    }
  `);

  const projects: TProject[] = getProjectsResult.allApiJson.nodes.find(
    (node) => node.projects
  ).projects;

  const [githubProjects, setGithubProjects] = React.useState<TProject[]>([]);

  const allProjects = [...projects, ...githubProjects];

  const projectList = allProjects.map((project, index) => (
    <Project project={project} key={index} />
  ));

  useEffect(() => {
    fetch('https://api.github.com/users/blendhamiti/repos')
      .then((response) => response.json())
      .then(
        (result) => {
          setGithubProjects(
            result.map(
              (project): TProject => {
                return {
                  name: project.name,
                  title: project.name,
                  description: project.description,
                  path: project.html_url,
                };
              }
            )
          );
        },
        (error) => console.log(error)
      );
  }, []);

  return (
    <div id="projects">
      <PageTitle title="Projects" />
      <div className={styles.projects}>{projectList}</div>;
    </div>
  );
};

const Project: FC<ProjectProps> = ({ project }) => {
  const icons =
    project.icons &&
    project.icons.map((icon, index) => (
      <img
        src={require(`../images/icons/${icon}.svg`).default}
        alt={icon}
        width={25}
        height={25}
        key={index}
      />
    ));

  const linkButton = () =>
    project.path && (
      <span>
        <a href={project.path} target="_blank" rel="noreferrer">
          <button>
            View in GitHub <FontAwesomeIcon icon={faGithub} />
          </button>
        </a>
      </span>
    );

  return (
    <div className={styles.project}>
      <div>{icons}</div>
      <p>
        <strong>{project.title}</strong>
      </p>
      <p>{project.description}</p> {linkButton()}
    </div>
  );
};

export default Projects;
