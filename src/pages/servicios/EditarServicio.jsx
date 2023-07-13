import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { getServiceRequest, editServiceRequest } from "../../api/servicios.js"
import { getCategoriesRequest } from "../../api/categorias.js"

function EditarServicio() {

    const [categories, setCategories] = useState([])
    const [selectedElements, setSelectedElements] = useState("")
    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState("")
    const [imagenName, setImagenName] = useState("")
    const [disabledImage, setDisabledImage] = useState(true)
    const [serviceData, setServiceData] = useState({
        nombre: "",
        imagen: null,
        precio: "",
        duracion: "",
        descripcion: "",
        idCategoria: ""
    })

    const params = useParams()

    useEffect(() => {
        async function servicioData(){
            if (params.id){

                //categories
                const cat = await getCategoriesRequest()
                setCategories(cat.data)

                const res = await getServiceRequest(params.id)
                setSelectedElements(res.data.idCategoria)
                setServiceData({
                    nombre: res.data.nombre,
                    precio: res.data.precio,
                    duracion: res.data.duracion,
                    descripcion: res.data.descripcion,
                    idCategoria: res.data.idCategoria
                })
                setTitle(res.data.nombre)
            }
        }
        servicioData()
    }, [])

    const handleChangeImage = ({target}) => {
        setImagenName(target.files[0].name)
        transformFile(target.files[0])
    }

    const transformFile = (file) => {
        const reader = new FileReader()
        if (!file){
            setServiceData({
                ...serviceData,
                ["imagen"]: null
            })
        }
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setServiceData({
                ...serviceData,
                ["imagen"]: reader.result
            })
        }
    }

    const handleChangeOption = ({target}) => {
        setSelectedElements(target.value)
        setServiceData({
            ...serviceData,
            ["idCategoria"]: target.value
        })
    }

    const handleChange = ({target: {name, value}}) => {
        setServiceData({
            ...serviceData,
            [name]: value
        })
    }

    const handleImageInput = () => {
        setDisabledImage(!disabledImage)
    }
    
    const navigate = useNavigate()

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            await editServiceRequest(params.id, serviceData)
            navigate('/servicios')

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
                <h1>Editar servicio : {title}</h1>
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
                <h3 className="card-title">Datos del Servicio</h3>
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
                            placeholder="Ingrese el nombre de la categoria nueva"
                            defaultValue={serviceData.nombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagen">Subir Imagen</label>
                        <input className="ml-1" type="checkbox" onClick={handleImageInput}></input>
                        <div className="input-group">
                            <div className="custom-file">
                                <input
                                    type="file"
                                    accept='image/png, image/gif, image/jpeg'
                                    className="custom-file-input"
                                    name="imagen" id="imagen"
                                    onChange={handleChangeImage}
                                    disabled={disabledImage}
                                />
                                <label
                                    className="custom-file-label"
                                >
                                    {(imagenName) ? imagenName : "Subir imagen"}
                                </label>
                            </div>
                        </div>
                        {(serviceData["imagen"]!= null) 
                            ? (<img src={serviceData["imagen"]} alt="Servicio" width={250} height={200} />) 
                            : (<></>)
                        }
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="precio">Precio (Bs)</label>
                        <input required
                            type="number"
                            min="0"
                            step=".01"
                            className="form-control"
                            name="precio" id="precio"
                            placeholder="Ingrese el precio del servicio"
                            defaultValue={serviceData.precio}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duracion">Duracion (minutos)</label>
                        <input
                            type="number"
                            min="0"
                            className="form-control"
                            name="duracion" id="duracion"
                            placeholder="Ingrese la duracion del servicio"
                            defaultValue={serviceData.duracion}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripcion</label>
                        <textarea className="form-control" name="descripcion" id="descripcion" rows="3" placeholder="Describa la categoria"
                        onChange={handleChange} defaultValue={serviceData.descripcion}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Categoria</label>
                        <select
                            className="form-control select2"
                            style={{ width: "100%" }}
                            id="categoria" name="categoria"
                            value={selectedElements}
                            onChange={handleChangeOption}
                        >
                            {categories.map(cat => (
                                <option value={cat.idCategoria} key={cat.idCategoria}>{cat.nombre}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                    <button type="button" className="btn btn-secondary mr-2"
                        onClick={()=> navigate(-1)}>Atras</button>
                    <button type="submit" className="btn btn-primary">
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

export default EditarServicio