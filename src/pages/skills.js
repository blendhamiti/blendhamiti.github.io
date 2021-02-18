import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import skillsData from '../assets/config/skills.json'
import PageTitle from '../components/pageTitle'

function Skills() {
    return (
        <div className="skills container" id="skills">
            <PageTitle title="Skills" />
            <SkillsList data={skillsData} />
        </div>
    );
}

function SkillsList(props) {
    const tables = props.data.skills.map((element, index) =>
        <Table
            title={element.category}
            content={element.skills}
            key={index} />
    );

    return (
        <div className="row entry-skills">
            <div className="col-6">
                {tables}
            </div>
        </div>
    );
}

function Table(props) {
    const rows = props.content.map((element, index) =>
        <Row
            skill={element.name}
            level={element.level}
            key={index} />
    );

    return (
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
                                        <th className="text-center" colSpan="5">
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

                <div className="text-block">
                    <div className="footnote">
                        <a target="_blank"
                            href="https://hr.nih.gov/working-nih/competencies/competencies-proficiency-scale">
                            <span><sup>[1]</sup>According to the NIH Proficiency Scale.</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

function Row(props) {
    const stars = [];
    for (let index = 0; index < 5; index++) {
        if (props.level > index)
            stars.push(
                <Star invisible={false} key={index} />
            );
        else
            stars.push(
                <Star invisible={true} key={index} />
            );
    }

    return (
        <tr className="skill-entry">
            <td className="skill">{props.skill}</td>
            {stars}
        </tr>
    );
}

function Star(props) {
    return (
        <td className="xp">
            <span className={(props.invisible) ? "xp-star invisible" : "xp-star"}>
                <FontAwesomeIcon icon={faStar} />
            </span>
        </td>
    );
}

export default Skills;
