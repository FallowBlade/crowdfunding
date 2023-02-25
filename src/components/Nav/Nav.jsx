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
            {!LoggedIn && <Link to="/login" className="btn">Login</Link>}
            {/* /* {loggedIn && <button onClick={handleClick}>Sign Out</button>} */}
            {LoggedIn && <button onClick={handleClick}>Sign Out</button>}
        </nav>
    );
}

export default Nav;




// {/* <div id="logo">
// <img src="src/images/Communitarian.png" alt="communitarian-logo" />
// </div> */}