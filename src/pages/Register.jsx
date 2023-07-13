import { useState } from "react"
import { Link, useNavigate, Navigate} from "react-router-dom"
import { useAuth } from "../context/authContext"
import { useForm } from "react-hook-form"

function Register() {

    const { register, formState: {
        errors
    } } = useForm()

    const [userDataForm, setUserDataForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        password: "",
        idRol: "1",
    });

    const {signup, user, errors: registerErrors, isAuthenticated, deleteErrors} = useAuth()
    
    const navigate = useNavigate()

    const handleChange = ({target: {name, value}}) => {
        setUserDataForm({
            ...userDataForm,
            [name]: value
        })
    }

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            const res = await signup(userDataForm)
            if (res) navigate('/login')
        } catch (error) {
            console.log("Error en el registro")
        }
        
    }

    const goToLogin = async e => {
        deleteErrors()
        navigate('/login')
    }

    if (isAuthenticated) return <Navigate  to="/home" />
    
    return (
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

                    {
                        registerErrors.map((error, i) => (
                          <p className="text-danger" style={{margin: "1px"}} key={i}>
                            {error}
                          </p>  
                        ))
                    }

                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input
                            type="text"
                            {...register('nombre', {required: true})}
                            className="form-control"
                            placeholder="Nombre"
                            onChange={handleChange}
                            />
                            {
                                errors.nombre && (
                                    <p className="text-danger">Nombre requerido</p>
                                )
                            }

                            <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-user" />
                            </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                            type="text"
                            {...register('apellido', {required: true})}
                            className="form-control"
                            placeholder="Apellido"
                            onChange={handleChange}
                            />
                            {
                                errors.apellido && (
                                    <p className="text-danger">Apellido requerido</p>
                                )
                            }

                            <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-user" />
                            </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                            type="email"
                            {...register('email', {required: true})}
                            className="form-control"
                            placeholder="Email"
                            onChange={handleChange}
                            />
                            {
                                errors.email && (
                                    <p className="text-danger">Email requerido</p>
                                )
                            }

                            <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-envelope" />
                            </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                            type="number"
                            {...register('telefono', {required: true})}
                            className="form-control"
                            placeholder="Telefono"
                            onChange={handleChange}
                            />
                            {
                                errors.telefono && (
                                    <p className="text-danger">Telefono requerido</p>
                                )
                            }

                            <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-envelope" />
                            </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                            type="password"
                            {...register('password', {required: true})}
                            className="form-control"
                            placeholder="Password"
                            onChange={handleChange}
                            />
                            {
                                errors.password && (
                                    <p className="text-danger">Contraseña requerida</p>
                                )
                            }

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
                    <p className="mb-0" onClick={goToLogin}>
                        <button className=" btn btn-light ">Ya tengo una cuenta</button>
                    </p>
                </div>
                {/* /.form-box */}
                </div>
                {/* /.card */}
            </div>
        </div>
    );
}

export default Register