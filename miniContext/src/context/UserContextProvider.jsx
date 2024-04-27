import React from "react";
import UserContext from "./UserContext";

// children is a generic name
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    // used UserContextProvider and provided data as {user,setUser}
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
