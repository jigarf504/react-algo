import { useContext } from "react";
import { UserContext } from "../../UserContextApi";

export default function WelcomeBanner() {
  const {user} = useContext(UserContext);
  return (
    <>
      <h1>Welcome {user?.name}</h1>
    </>
  );
}
