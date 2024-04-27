import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h2>React with Chai</h2>
      <Login></Login> <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
