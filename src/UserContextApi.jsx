import { createContext, useState } from "react";

export const UserContext = createContext({
  user:{
    name: null,
    course: null,
  },
  toggleUser:null,
});
const foo = {
  name: "Jigar",
  course: "Fullstack Developer",
};
const bar = {
  name: "Priyank",
  course: "PHP Developer",
};
export const UserContextProivder = ({ children }) => {
  const [user, setUser] = useState(foo);

  const toggleUser = () => {
    if (user === foo) {
      setUser(bar);
    } else {
      setUser(foo);
    }
  };
  return (
    <UserContext.Provider value={{ user, toggleUser }}>
      {children}
    </UserContext.Provider>
  );
};
