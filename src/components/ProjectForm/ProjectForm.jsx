import React, { useState } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";

function CreateProjectForm() {

    const authToken = window.localStorage.getItem("token");

    // STATE //
    const [project, setProject] = useState({
        // from JSON Raw Body in Deployed (default values)
        // this is what you return at the bottom - your list might look different to mine. If so, don't worry!
        "title": "",
        "description": "",
        "goal": null,
        "image": "",
        "is_open": true,
        "date_created": "2023-03-05T12:31:24.145010Z",
    });



    // enables redirect / HOOKS
    const navigate = useNavigate();

    // accesses project ID so the pledge can be connected to it
    const { id } = useParams();

    // copies the original data, replaces the old data for each id/value pair to what is input in the form (changes state). this will be submitted to API below

    //ACTIONS
    const handleChange = (event) => {
        const { id, value } = event.target;
        setProject((prevProject) => ({
            ...prevProject,
            [id]: value,
        }));
    };


    // POST the data to your deployed, using fetch.
    // send the token with it to authorise the ability to post
    // wait for the response - 
    // if successful, return the JSON payload and display, redirect to / (homepage): I need to change this
    // if not successful, return the json response display in console
    const postData = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}project/`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${authToken}`,
                },
                body: JSON.stringify(project),
            }
        );
        return response.json();
    };

    // if authtoken exists, post the data on submit, wait for the response and nav back to home page
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (authToken) {
            const postProject = await postData();
            navigate("/");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter project name"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Tell us about your project"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="goal">Goal amount:</label>
                    <input
                        type="number"
                        id="goal"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="image">Image Link:</label>
                    <input
                        type="file"
                        id="image"
                        placeholder="paste an image link here"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Create project</button>
            </form>
        </div>
    );
}

export default CreateProjectForm;