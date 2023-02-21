import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ProjectPage() {

    const [project, setProjectData] = useState({ pledges: [] });

    const { id } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`).then((results) => {
            return results.json();
        })
            .then((data) => {
                setProjectData(data);
            });
    }, []);

    return (
        <div>
            <h2>{project.title}</h2>
            <h3>Goal Amount: {project.total}</h3>
            <h3>Owner: {project.owner}</h3>
            <h3>Created at: {project.date_created}</h3>
            <h3>{`Status: ${project.is_open}`}</h3>
            <img src={project.image} />
            <h3>Our Amazing Pledgers:</h3>

            <ul>
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                            {pledgeData.amount}, {pledgeData.comment} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProjectPage;