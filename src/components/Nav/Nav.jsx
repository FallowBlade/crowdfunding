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
            <div class="logo">
                <img src="src/images/assets/Rejuvinature-logo.png" alt="Rejuvinature-logo" />
            </div>
        </nav>


    );
}

export default Nav;




