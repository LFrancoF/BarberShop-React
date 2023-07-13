import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { getClientRequest, editClientRequest } from "../../api/clientes.js"

function EditarCliente() {

    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState({
        nombre: "", apellido: ""
    })
    const [clientData, setClientData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        preferencia: ""
    })

    const params = useParams()

    useEffect(() => {
        async function clienteData(){
            if (params.id){
                const res = await getClientRequest(params.id)
                setClientData({
                    nombre: res.data.nombre,
                    apellido: res.data.apellido,
                    email: res.data.email,
                    telefono: res.data.telefono,
                    preferencia: res.data.preferencia
                })
                setTitle({nombre: res.data.nombre, apellido: res.data.apellido,})
            }
        }
        clienteData()
    }, [])

    const handleChange = ({target: {name, value}}) => {
        setClientData({
            ...clientData,
            [name]: value
        })
    }
    
    const navigate = useNavigate()

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            await editClientRequest(params.id, clientData)
            navigate('/clientes')

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
                <h1>Editar cliente : {title.nombre} {title.apellido} </h1>
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
                <h3 className="card-title">Informacion del Cliente</h3>
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
                        defaultValue={clientData.nombre}
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
                        defaultValue={clientData.apellido}
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
                        defaultValue={clientData.email}
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
                        defaultValue={clientData.telefono}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="preferencia">Preferencia</label>
                    <input required
                        type="text"
                        className="form-control"
                        name="preferencia" id="preferencia"
                        placeholder="Ingrese la preferencia de servicio del cliente"
                        defaultValue={clientData.preferencia}
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

export default EditarCliente