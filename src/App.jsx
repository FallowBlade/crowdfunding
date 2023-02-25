import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import dateFormat from 'dateformat';

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";

// CSS
import "./App.css";

// Components
import Nav from "./components/Nav/Nav";

const HeaderLayout = () => (
  <div>
    <Nav />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
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







