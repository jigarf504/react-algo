import { useContext } from "react";
import User from "./context/User";
import { UserContext, UserContextProivder } from "../UserContextApi.jsx";
export default function UseContext() {
  return (
    <>
      <UserContextProivder>
        <AppInternal />
      </UserContextProivder>
    </>
  );
}
function AppInternal() {
  const { toggleUser } = useContext(UserContext);
  return (
    <>
      <User />
      <button onClick={toggleUser}>Toggle</button>
    </>
  );
}
