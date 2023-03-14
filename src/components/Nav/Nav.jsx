import { Link } from "react-router-dom";

function Nav(props) {
    const { LoggedIn, setLoggedIn } = props

    const handleClick = () => {
        window.localStorage.removeItem("token")
        setLoggedIn(false)
    }

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/CreateProject">Build Project</Link>
            {!LoggedIn && <Link to="/login" className="btn">Login</Link>}
            {/* /* {loggedIn && <button onClick={handleClick}>Sign Out</button>} */}
            {LoggedIn && <button onClick={handleClick}>Sign Out</button>}

            <img class="logo" src="src/images/Rejuvinature-logo-static.png" alt="Rejuvinature-logo" />

        </nav>


    );
}

export default Nav;




