import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { createBarberRequest } from "../../api/barberos.js"

function CrearBarbero() {
    
    const [errors, setErrors] = useState([])
    const [barberData, setBarberData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        password: "",
        especialidad: ""
    })

    const handleChange = ({target: {name, value}}) => {
        setBarberData({
            ...barberData,
            [name]: value
        })
    }

    const navigate = useNavigate()

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            await createBarberRequest(barberData)
            navigate('/barberos')
        } catch (error) {
            setErrors(error.response.data)
        }
        
    }

    return (
        <>
        <section className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-6">
                <h1>Registrar un Barbero</h1>
            </div>
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                    <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Registrar</li>
                </ol>
            </div>
            </div>
        </div>
        {/* /.container-fluid */}
        </section>

        <section className="content">
            <div className="container-fluid">
            {/* general form elements */}
            <div className="card card-primary">
                <div className="card-header">
                <h3 className="card-title">Nuevo Barbero</h3>
                </div>
                {/* /.card-header */}
                {
                    errors.map((error, i) => (
                        <p className="text-danger" style={{margin: "1px"}} key={i}>
                            {error}
                        </p>  
                    ))
                }
                {/* form start */}
                <form onSubmit={handleSubmit}>
                <div className="card-body">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input required
                        type="text"
                        className="form-control"
                        name="nombre" id="nombre"
                        placeholder="Ingrese el nombre"
                        onChange={handleChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input required
                        type="text"
                        className="form-control"
                        name="apellido" id="apellido"
                        placeholder="Ingrese el apellido"
                        onChange={handleChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input required
                        type="email"
                        className="form-control"
                        name="email" id="email"
                        placeholder="Ingrese el correo electronico"
                        onChange={handleChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="telefono">Telefono</label>
                    <input required
                        type="number"
                        min="0"
                        className="form-control"
                        name="telefono" id="telefono"
                        placeholder="Ingrese el nro. de Telefono"
                        onChange={handleChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input required
                        type="password"
                        className="form-control"
                        name="password" id="password"
                        placeholder="Ingrese la contraseña"
                        onChange={handleChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="especialidad">Especialidad</label>
                    <input required
                        type="text"
                        className="form-control"
                        name="especialidad" id="especialidad"
                        placeholder="Ingrese la especialidad del barbero"
                        onChange={handleChange}
                    />
                    </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                    <button type="button" className="btn btn-secondary mr-2"
                       onClick={()=> navigate(-1)}>Atras</button>
                    <button type="submit" className="btn btn-primary">
                        Registrar
                    </button>
                </div>
                </form>
            </div>
            {/* /.card */}
            </div>
        </section>
        </>
    );
}

export default CrearBarbero