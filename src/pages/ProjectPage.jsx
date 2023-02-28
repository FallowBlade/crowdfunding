import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PledgeForm from "../components/PledgeForm/PledgeForm";

// const getUser = async () => {
//     // fetch request for users
//     // console log and results.json
//     const userList = await fetch(`${import.meta.env.VITE_API_URL}users/`)

//     const parsedUserList = await userList.json()

//     console.log(parsedUserList);
// }


function ProjectPage() {

    const [project, setProjectData] = useState({ pledges: [] });
    const [user, setuser] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`).then((results) => {
            return results.json();
        })
            .then((data) => {
                setProjectData(data);
            });
    }, []);

    // need another FETCH request for users, convert to JSON. This should then return all your users. THEN you arleady have your ID, so if you had a list of IDs. User with this ID, I want the username.

    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}users/${id}`).then((results) => {
    //         return results.json();
    //     })
    //         .then((data) => {
    //             setUserData(data);
    //         });
    // }, []);

    return (
        <>
            <h2>{project.title}</h2>
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
            <div>
                <PledgeForm />
            </div>
        </>

    );
}



export default ProjectPage;