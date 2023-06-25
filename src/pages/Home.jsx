import { useAuth } from "../context/authContext";

function Home() {

  const { user } = useAuth()

  return (
    <div>
      <h1>Home - Welcome {user.nombre} {user.apellido} </h1>
    </div>
  )
}

export default Home