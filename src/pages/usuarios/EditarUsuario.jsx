import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { editUserRequest, getUserRequest } from "../../api/usuarios.js"

function EditarUsuario() {

    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState({
        nombre: "", apellido: ""
    })
    const [userData, setUserData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: ""
    })

    const params = useParams()

    useEffect(() => {
        async function usuarioData(){
            if (params.id){
                const res = await getUserRequest(params.id)
                setUserData({
                    nombre: res.data.nombre,
                    apellido: res.data.apellido,
                    email: res.data.email,
                    telefono: res.data.telefono
                })
                setTitle({nombre: res.data.nombre, apellido: res.data.apellido,})
            }
        }
        usuarioData()
    }, [])

    const handleChange = ({target: {name, value}}) => {
        setUserData({
            ...userData,
            [name]: value
        })
    }
    
    const navigate = useNavigate()

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            await editUserRequest(params.id, userData)
            navigate('/usuarios')

        } catch (error) {
            setErrors(error)
        }
        
    }

    return (
        <>
        <section className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-6">
                <h1>Editar usuario : {title.nombre} {title.apellido} </h1>
            </div>
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                    Home
                </li>
                <li className="breadcrumb-item active">Editar</li>
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
                <h3 className="card-title">Informacion de Usuario</h3>
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
                        defaultValue={userData.nombre}
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
                        defaultValue={userData.apellido}
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
                        defaultValue={userData.email}
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
                        defaultValue={userData.telefono}
                        onChange={handleChange}
                    />
                    </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                    <button type="button" className="btn btn-secondary mr-2"
                       onClick={()=> navigate(-1)}>Atras</button>
                    <button type="submit" className="btn btn-primary" >
                        Guardar
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

export default EditarUsuario