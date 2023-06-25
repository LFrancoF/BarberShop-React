import { createContext, useEffect, useContext, useState } from "react";
import { registerRequest, loginRequest, verifyTokenReq, logoutRequest } from '../api/auth';
import Cookies from 'js-cookie';

const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('There is no auth provider')
    return context
}

export function AuthProvider({children}) {
    
    const [user, setUser] = useState(null)
    const [emailAutocomplete, setEmailAutocomplete] = useState(null)
    const [errors, setErrors] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect( () =>{
        async function checkLogin(){
            const cookies = Cookies.get()
            if (!cookies.token) {
                setIsAuthenticated(false)
                setUser(null)
                return;
            }
            try {
                const res = await verifyTokenReq(cookies.token)
                if (!res.data){
                    setIsAuthenticated(false)
                    return;
                } 
                setIsAuthenticated(true)
                setUser(res.data)
            } catch (error) {
                setIsAuthenticated(false)
                setUser(null)
            }
            
        }
        checkLogin();
    }, [])

    const signup = async (userRegister) => {
        try {
            //llevar datos al backend para registrar
            const res = await registerRequest(userRegister)
            setEmailAutocomplete(res.data.email)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    const login = async (userLogin) => {
        try {
            //llevar datos al backend para registrar
            const res = await loginRequest(userLogin)
            setIsAuthenticated(true)
            setUser(res.data)
            return res.data;
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    const logout = async () => {
        //cerrar sesion del usuario en el backend
       const res = await logoutRequest()
       setUser(null)
       setIsAuthenticated(false)
    }
    

    return (
    <authContext.Provider value={{signup, login, user, logout, emailAutocomplete, errors, isAuthenticated}}>
        {children}
    </authContext.Provider>
  )
}
