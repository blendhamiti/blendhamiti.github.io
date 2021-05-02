import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import PageTitle from '../components/PageTitle';

import * as styles from './Skills.module.scss';

function Skills() {
  const [skills, setSkills] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/skills.json')
      .then((response) => response.json())
      .then(
        (result) => setSkills(result.skills),
        (error) => console.log(error)
      );
  }, []);

  React.useEffect(() => {
    fetch('/api/skills_categories.json')
      .then((response) => response.json())
      .then(
        (result) => setCategories(result.categories),
        (error) => console.log(error)
      );
  }, []);

  return (
    <div className={styles.container} id="skills">
      <PageTitle title="Skills" />
      <SkillsList categories={categories} skills={skills} />
    </div>
  );
}

function SkillsList(props) {
  const tables = props.categories.map((category, index) => (
    <Table
      title={category.name}
      content={props.skills.filter(
        (skill) => skill.category.name === category.name
      )}
      key={index}
    />
  ));

  return <div className={styles.tables}>{tables}</div>;
}

function Table(props) {
  const rows = props.content.map((skill, index) => (
    <Row name={skill.name} level={skill.level} key={index} />
  ));

  return (
    <div>
      <div>
        <div>
          <div>
            <div>{props.title}</div>
          </div>

          <div>
            <div>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Skill</th>
                      <th colSpan={5}>
                        <span>
                          Proficiency<sup>[1]</sup>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <div>
              <a
                target="_blank"
                href="https://hr.nih.gov/working-nih/competencies/competencies-proficiency-scale"
              >
                <span>
                  <sup>[1]</sup>According to the NIH Proficiency Scale.
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row(props) {
  const stars = [];
  for (let index = 0; index < 5; index++) {
    if (props.level > index) stars.push(<Star invisible={false} key={index} />);
    else stars.push(<Star invisible={true} key={index} />);
  }

  return (
    <tr>
      <td>{props.name}</td>
      {stars}
    </tr>
  );
}

function Star(props) {
  return (
    <td>
      <span className={clsx(props.invisible && styles.invisible)}>
        <FontAwesomeIcon icon={faStar} />
      </span>
    </td>
  );
}

export default Skills;
