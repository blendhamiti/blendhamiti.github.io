import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import skillsData from '../assets/config/skills.json'
import PageTitle from '../components/pageTitle'

function Skills() {
    return (
        <div className="skills container">
            <PageTitle title="Skills" />
            <SkillsList data={skillsData} />
        </div>
    );
}

function SkillsList(props) {
    const tables = props.data.skills.map((element) =>
        <Table
            title={element.category}
            content={element.skills} />
    );

    return (
        <div className="row entry-skills">
            <div className="col">
                <div className="row">
                    {tables}
                </div>
            </div>
        </div>
    );
}

function Table(props) {
    const rows = props.content.map((element) =>
        <Row
            skill={element.name}
            level={element.level} />
    );

    return (
        <div className="col-lg-6">
            <div className="block-entry block-entry-skills">
                <div className="block-entry-content">
                    <div className="text-block">
                        <div className="title">{props.title}</div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="pl-sm-3">Skill</th>
                                            <th className="text-center" colspan="5">
                                                <span className="link-text">Proficiency<sup>[1]</sup></span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rows}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="text-block">
                        <div class="footnote">
                            <a target="_blank"
                                href="https://hr.nih.gov/working-nih/competencies/competencies-proficiency-scale">
                                <span><sup>[1]</sup>According to the NIH Proficiency Scale.</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

function Row(props) {
    const filledStar = (
        <td className="xp">
            <span className="xp-star">
                <FontAwesomeIcon icon={faStar} />
            </span>
        </td>
    );
    const emptyStar = (
        <td className="xp">
            <span className="xp-star invisible">
                <FontAwesomeIcon icon={faStar} />
            </span>
        </td>
    );
    const stars = [];
    for (let index = 0; index < 5; index++) {
        if (props.level > index)
            stars.push(filledStar);
        else
            stars.push(emptyStar)
    }

    return (
        <tr className="skill-entry">
            <td className="skill">{props.skill}</td>
            {stars}
        </tr>
    );
}

export default Skills;
