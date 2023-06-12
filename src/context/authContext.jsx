import { createContext, useEffect, useContext, useState } from "react";
import { usuarios } from "../assets/Users";

const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('There is no auth provider')
    return context
}


export function AuthProvider({children}) {

    const [user, setUser] = useState(null)

    useEffect(() => {
      const userSession = window.localStorage.getItem('userSession')
      if (userSession) {
        const user = JSON.parse(userSession)
        setUser(user[0])
      }
    }, [])
    

    const signup = (name, lastname, email, password) => {
        console.log(name, lastname, email, password);
        //llevar datos al backend para registrar
        usuarios.push({
            name,
            lastname,
            email,
            password
        })
        console.log(usuarios);
    }

    const login = (email, password) => {
        //llevar datos al backend para verificar login
        // usuarios.push({
        //     email,
        //     password
        // })
        // console.log(usuarios);

        if (usuarios[0].email == email && usuarios[0].password == password){
            setUser(usuarios[0])
            return usuarios;
        }
        return;
    }

    const logout = () => {
        //cerrar sesion del usuario
        setUser(null)
        window.localStorage.removeItem('userSession')
        return;
    }
    

    return (
    <authContext.Provider value={{signup, login, user, logout}}>
        {children}
    </authContext.Provider>
  )
}
