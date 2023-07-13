import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { getBarberRequest, editBarberRequest } from "../../api/barberos.js"

function EditarBarbero() {

    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState({
        nombre: "", apellido: ""
    })
    const [barberData, setBarberData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        especialidad: ""
    })

    const params = useParams()

    useEffect(() => {
        async function barberoData(){
            if (params.id){
                const res = await getBarberRequest(params.id)
                setBarberData({
                    nombre: res.data.nombre,
                    apellido: res.data.apellido,
                    email: res.data.email,
                    telefono: res.data.telefono,
                    especialidad: res.data.especialidad
                })
                setTitle({nombre: res.data.nombre, apellido: res.data.apellido,})
            }
        }
        barberoData()
    }, [])

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
            await editBarberRequest(params.id, barberData)
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
                <h1>Editar barbero : {title.nombre} {title.apellido}</h1>
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
                <h3 className="card-title">Informacion del Barbero</h3>
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
                        defaultValue={barberData.nombre}
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
                        defaultValue={barberData.apellido}
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
                        defaultValue={barberData.email}
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
                        defaultValue={barberData.telefono}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="especialidad">Especialidad</label>
                    <input required
                        type="text"
                        className="form-control"
                        name="especialidad" id="especialidad"
                        placeholder="Ingrese la especialidad del Barbero"
                        defaultValue={barberData.especialidad}
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

export default EditarBarbero