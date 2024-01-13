import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/LoginPage/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import { jwtDecode } from "jwt-decode";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const getDetailsFromAPI = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const { exp } = jwtDecode(token);
        const expTime = exp * 1000;
        if (Date.now() <= expTime) {
          return setLoggedIn(true);
        }
      }
      return setLoggedIn(false);
    };
    getDetailsFromAPI();
  }, []);
  return <div className="App">{loggedIn ? <Dashboard /> : <Login />}</div>;
}

export default App;
