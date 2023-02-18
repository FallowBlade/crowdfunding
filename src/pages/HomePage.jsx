// Components

import { useState, useEffect } from React;

import ProjectCard from "../components/ProjectCard/ProjectCard";

// Data
import { allProjects } from "../data";
import { Form } from "react-router-dom";
import React from "react";

function HomePage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        setProjectList(allProjects);
    }, []);



    return (
        <div id="project-list">
            {allProjects.map((project, key) => {
                return <ProjectCard key={key} projectData={project} />;
            })}
        </div>
    );
}

export default HomePage;
