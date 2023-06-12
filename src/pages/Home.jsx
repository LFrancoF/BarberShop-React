import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

function Home() {

  const { user } = useAuth()

  return (
    <div>
      <h1>Home - Welcome {user.name} {user.lastname} </h1>
    </div>
  )
}

export default Home