import { useContext } from "react";
import { UserContext } from "../../UserContextApi";

export default function Course() {
  const {user} = useContext(UserContext)
  return (
    <>
      <p>Your Course is {user?.course}</p>
    </>
  );
}
