import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Log from "../pages/Log";
import CreateAccount from "../pages/CreateAccount";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import "../App.css";
import "../styles/global.scss";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/recovery-password",
    element: <RecoveryPassword />,
  },
  {
    path: "/log",
    element: <Log />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);

function App() {
  // const initialState = useInitialState();
  return (
    <div className="App">
      <AppContext.Provider value={useInitialState()}>
        <Layout>
          <RouterProvider router={root} />
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
