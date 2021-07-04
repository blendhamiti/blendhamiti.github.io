import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import PageTitle from '../components/PageTitle';
import { TSkill, TSkills } from '../util/types';

import * as styles from './Skills.module.scss';

interface CategoryProps {
  name: TSkills['category'];
  skills: TSkills['skills'];
}

interface StarProps {
  invisible: boolean;
}

const Skills: FC<{}> = () => {
  const getSkillsResult = useStaticQuery(graphql`
    query getSkills {
      allApiJson {
        nodes {
          skills {
            category
            skills {
              level
              name
            }
          }
        }
      }
    }
  `);

  const skills: TSkills[] = getSkillsResult.allApiJson.nodes.find(
    (node) => node.skills
  ).skills;

  const categories = skills.map((category, index) => (
    <Category name={category.category} skills={category.skills} key={index} />
  ));

  return (
    <div className={styles.container} id="skills">
      <PageTitle title="Skills" />
      <div className={styles.content}>
        <div className={styles.tables}>{categories}</div>
        <div className={styles.linkContainer}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://hr.nih.gov/working-nih/competencies/competencies-proficiency-scale"
          >
            <sup>[1]</sup>According to the NIH Proficiency Scale.
          </a>
        </div>
      </div>
    </div>
  );
};

const Category: FC<CategoryProps> = ({ name, skills }) => {
  const skillsList = skills.map((skill, index) => (
    <Skill name={skill.name} level={skill.level} key={index} />
  ));

  return (
    <div className={styles.table}>
      <div className={styles.title}>{name}</div>
      <table>
        <thead>
          <tr>
            <th>Skill</th>
            <th colSpan={5}>
              Proficiency<sup>[1]</sup>
            </th>
          </tr>
        </thead>
        <tbody>{skillsList}</tbody>
      </table>
    </div>
  );
};

const Skill: FC<TSkill> = ({ name, level }) => {
  const stars = [];
  for (let index = 0; index < 5; index++) {
    if (level > index) stars.push(<Star invisible={false} key={index} />);
    else stars.push(<Star invisible={true} key={index} />);
  }

  return (
    <tr>
      <td>{name}</td>
      {stars}
    </tr>
  );
};

const Star: FC<StarProps> = ({ invisible }) => {
  return (
    <td>
      <span className={clsx(invisible && styles.invisible)}>
        <FontAwesomeIcon icon={faStar} />
      </span>
    </td>
  );
};

export default Skills;
