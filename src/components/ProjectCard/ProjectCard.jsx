import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import PledgeForm from "../PledgeForm/PledgeForm";


function ProjectCard(props) {
    const { project } = props;

    return (
        <div className="project-card">
            <div>
                <Link to={`/project/${project.id}`}>
                    <img src={project.image} />
                    <h3>{project.title}</h3>
                </Link>
                <Link to={`/pledges/${PledgeForm}`}>
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard;