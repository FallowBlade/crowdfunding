import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";


function ProjectCard(props) {
    const { project } = props;

    return (
        <div>
            <Link to={`/project/${project.id}`}>
                <img src={project.image} />
                <h3>{project.title}</h3>
            </Link>
        </div>
    );
}

export default ProjectCard;