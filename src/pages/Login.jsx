import { useState } from "react"
import {Link, Navigate, useNavigate} from 'react-router-dom';
import { useAuth } from "../context/authContext";

function Login() {

    const [userForm, setUserForm] = useState({
        email: "",
        password: "",
    });

    const {login, user} = useAuth()

    const navigate = useNavigate()

    const handleChange = ({target: {name, value}}) => {
        setUserForm({
            ...userForm,
            [name]: value
        })
    }

    const handleLogin = e => {
        e.preventDefault()
        //await y navigate
        const userSession = login(userForm.email, userForm.password)
        if ( userSession )
        {
            window.localStorage.setItem(
                'userSession', JSON.stringify(userSession)
            )
            navigate('/home')
        } else {
            console.log("Error de login");
        }
    }

    return user != null ? <Navigate to="/home" /> : (
        <div className="hold-transition login-page">
            <div className="login-box">
                {/* /.login-logo */}
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                    <Link to="/" className="h1"><b>Iniciar Sesión</b></Link>
                    </div>
                    <div className="card-body">
                    <p className="login-box-msg">Ingresa tus datos para iniciar sesión</p>

                    <form onSubmit={handleLogin}>
                        <div className="input-group mb-3">
                        <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange}/>
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-envelope" />
                            </div>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange}/>
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-lock" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-8">
                            <div className="icheck-primary">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">
                                Remember me
                            </label>
                            </div>
                        </div>
                        {/* /.col */}
                        <div className="col-4">
                            <button type="submit" className="btn btn-primary btn-block">
                                Ingresar
                            </button>
                        </div>
                        {/* /.col */}
                        </div>
                    </form>

                    <br /> <br />
                    <p className="mb-0">
                        <Link to="/register" className="text-center">Registrarse</Link>
                    </p>
                    </div>
                    {/* /.card-body */}
                </div>
                {/* /.card */}
                </div>
        </div>
        
    )
  }
  
  export default Login