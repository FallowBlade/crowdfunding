import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import dateFormat from 'dateformat';

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";


// Components
import Nav from "./components/Nav/Nav";

// CSS
import "./App.css";
import { useState } from "react";

const Layout = () => {
  const [loggedIn, setLoggedIn] =
    useState(window.localStorage.getItem("token") != null)

  return (
    <>
      <Nav LoggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={[loggedIn, setLoggedIn]} />
    </>
  );
}


// const HeaderLayout = () => (
//   <div>
//     <Nav />
//     <Outlet />
//   </div>
// );

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/login", element: <LoginPage /> },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
