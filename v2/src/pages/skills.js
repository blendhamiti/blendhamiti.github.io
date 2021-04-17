import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import PageTitle from '../components/pageTitle'

function Skills() {
    const [skills, setSkills] = React.useState([]);
    const [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/skills.json")
            .then(response => response.json())
            .then(
                result => setSkills(result.skills),
                error => console.log(error)
            )
    }, []);

    React.useEffect(() => {
        fetch("/api/skills_categories.json")
            .then(response => response.json())
            .then(
                result => setCategories(result.categories),
                error => console.log(error)
            )
    }, []);

    return (
        <div className="skills container" id="skills">
            <PageTitle title="Skills" />
            <SkillsList categories={categories} skills={skills} />
        </div>
    );
}

function SkillsList(props) {
    const tables = props.categories.map((category, index) =>
        <Table
            title={category.name}
            content={props.skills.filter((skill) => skill.category.name === category.name)}
            key={index} />
    );

    return (
        <div className="row entry-skills">
            {tables}
        </div>
    );
}

function Table(props) {
    const rows = props.content.map((skill, index) =>
        <Row
            name={skill.name}
            level={skill.level}
            key={index} />
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
            <td className="skill">{props.name}</td>
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
