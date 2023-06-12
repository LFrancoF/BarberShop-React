import { useState } from "react"
import { Link, Navigate} from "react-router-dom";
import { useAuth } from "../context/authContext"

function Register() {

    const [userForm, setUserForm] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
    });

    const {signup, user} = useAuth()

    const handleChange = ({target: {name, value}}) => {
        setUserForm({
            ...userForm,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        //await y navigate
        signup(userForm.name, userForm.lastname, userForm.email, userForm.password)
    }
    
    return user != null ? <Navigate to="/home" /> : (
        <div className="hold-transition register-page">
            <div className="register-box">
                <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <a href="../../index2.html" className="h1">
                    <b>Registro</b>
                    </a>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">Ingresa tus datos para registrarse</p>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Nombre"
                            onChange={handleChange}
                            />
                            <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-user" />
                            </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                            type="text"
                            name="lastname"
                            className="form-control"
                            placeholder="Apellido"
                            onChange={handleChange}
                            />
                            <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-user" />
                            </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={handleChange}
                            />
                            <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-envelope" />
                            </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={handleChange}
                            />
                            <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-lock" />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7">
                            
                            </div>
                            {/* /.col */}
                            <div className="col-5">
                            <button type="submit" className="btn btn-primary btn-block">
                                Registrarse
                            </button>
                            </div>
                            {/* /.col */}
                        </div>
                    </form>

                    <br />
                    <Link to="/login" className="text-center">
                    Ya tengo una cuenta
                    </Link>
                </div>
                {/* /.form-box */}
                </div>
                {/* /.card */}
            </div>
        </div>
    );
}

export default Register