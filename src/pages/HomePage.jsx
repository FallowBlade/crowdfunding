// Components

import React, { useState, useEffect } from "react";

import ProjectCard from "../components/ProjectCard/ProjectCard";

// Data
// import { allProjects } from "../data";
// import { Form } from "react-router-dom";


function HomePage() {
    const [projectList, setProjectList] = useState([]);
    console.log(projectList)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectList(data.results);
            });
    }, []);

    return (
        <>
            <div className="hero-container">
                <h1>Rejuvinature</h1>
                <p className="hero-text">Reinvigerate your neighbourhood!</p>
            </div>

            <div id="project-list">
                {projectList.map((project, key) => {
                    return <ProjectCard key={key} project={project} />;
                })}
            </div>

        </>
    );
}

export default HomePage;
