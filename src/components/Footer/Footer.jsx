
// function Footer(props) {
//     const { loggedIn, setLoggedIn } = props

//     const handleClick = () => {
//         window.localStorage.removeItem("token")
//         setLoggedIn(false)
//     }

//     return (
//         <nav>
//             <Link to="/">Home</Link>
//             {!loggedIn && <Link to="/login" className="btn">Login</Link>}
//             {loggedIn && <button onClick={handleClick}>Sign Out</button>}
//         </nav>
//     );
// }

// export default Nav;