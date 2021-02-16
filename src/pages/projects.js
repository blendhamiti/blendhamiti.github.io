import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import PageTitle from '../components/pageTitle';
import projectsData from '../assets/config/projects.json'

function Projects() {
    return (
        <div>
            <PageTitle title="Projects" />
            <ProjectList data={projectsData} />
        </div>
    );
}

function ProjectList() {
    const projects = props.data.projects.map((element) =>
        
    );

    return (
        <div class="block-entry">
            <div class="block-entry-content">
                <div class="icon-block">
                    <span class="icon"><i class="devicon-mysql-plain-wordmark"></i></span>
                    <span class="icon"><i class="devicon-php-plain"></i></span>
                    <span class="icon"><i class="devicon-codeigniter-plain-wordmark"></i></span>
                    <span class="icon"><i class="devicon-bootstrap-plain"></i></span>
                    <span class="icon"><i class="devicon-sass-original"></i></span>
                </div>
                <div class="text-block">
                    <div class="title">
                        Digital Planning Board
                        </div>
                    <div class="description">
                        <p>An interactive web app for users to organise their schedule in a
                                calendar and divide tasks via a tasks board.</p>
                        <li>Server & DB: Apache, MySQL </li>
                        <li>Backend: PHP with CodeIgniter framework</li>
                        <li>Frontend: Bootstrap (Sass)</li>
                        <li>JS libs used: jQuery, Popper.js, FullCalendar, Moment.js, Muuri.js. </li>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Project() {
    return (
        <div class="block-entry">
            <div class="block-entry-content">
                <div class="icon-block">
                    <span class="icon"><i class="devicon-mysql-plain-wordmark"></i></span>
                    <span class="icon"><i class="devicon-php-plain"></i></span>
                    <span class="icon"><i class="devicon-codeigniter-plain-wordmark"></i></span>
                    <span class="icon"><i class="devicon-bootstrap-plain"></i></span>
                    <span class="icon"><i class="devicon-sass-original"></i></span>
                </div>
                <div class="text-block">
                    <div class="title">
                        Digital Planning Board
                        </div>
                    <div class="description">
                        <p>An interactive web app for users to organise their schedule in a
                                calendar and divide tasks via a tasks board.</p>
                        <li>Server & DB: Apache, MySQL </li>
                        <li>Backend: PHP with CodeIgniter framework</li>
                        <li>Frontend: Bootstrap (Sass)</li>
                        <li>JS libs used: jQuery, Popper.js, FullCalendar, Moment.js, Muuri.js. </li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
