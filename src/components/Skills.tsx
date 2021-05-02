import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import PageTitle from '../components/PageTitle';

import * as styles from './Skills.module.scss';

function Skills({ data }) {
  const categories = data.map((category, index) => (
    <Table category={category} key={index} />
  ));

  return (
    <div className={styles.container} id="skills">
      <PageTitle title="Skills" />
      <div className={styles.content}>{categories}</div>
    </div>
  );
}

function Table({ category }) {
  const rows = category.skills.map((skill, index) => (
    <Row skill={skill} key={index} />
  ));

  return (
    <div>
      <div>
        <div>
          <div>
            <div>{category.category}</div>
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

function Row({ skill }) {
  const stars = [];
  for (let index = 0; index < 5; index++) {
    if (skill.level > index) stars.push(<Star invisible={false} />);
    else stars.push(<Star invisible={true} />);
  }

  return (
    <tr>
      <td>{skill.name}</td>
      {stars}
    </tr>
  );
}

function Star({ invisible }) {
  return (
    <td>
      <span className={clsx(invisible && styles.invisible)}>
        <FontAwesomeIcon icon={faStar} />
      </span>
    </td>
  );
}

export default Skills;
