import { useState } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";

function LoginForm() {

    const authToken = window.localStorage.getItem("token")
    const [loggedIn] = useOutletContext();

    const [, setLoggedIn] = useOutletContext();
    // State
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    // Hooks
    const navigate = useNavigate();

    // Actions
    const handleChange = (event) => {
        const { id, value } = event.target;

        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    }

    // above we are overiding what was in the previous credentials, and setting the new credentials.

    // PostData
    const postData = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}api-token-auth/`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            }
        );
        return response.json();
    };


    // Create the submit for login page.

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            const { token } = await postData();
            if (token != undefined) {
                window.localStorage.setItem("token", token);
                setLoggedIn(true);
                navigate("/");
            } else {
                setLoggedIn(false);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    onChange={handleChange}
                    placeholder="Enter username"
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={handleChange}
                    placeholder="Password"
                />
            </div>
            <button type="submit">
                Login
            </button>
        </form>
    );
}

export default LoginForm;