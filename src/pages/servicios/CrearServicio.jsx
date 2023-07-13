import {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import { createServiceRequest } from "../../api/servicios.js"
import { getCategoriesRequest } from "../../api/categorias.js"

function CrearServicio() {

    const [categories, setCategories] = useState([])
    const [errors, setErrors] = useState([])
    const [imagenName, setImagenName] = useState("")
    const [selectedElements, setSelectedElements] = useState("")
    const [serviceData, setServiceData] = useState({
        nombre: "",
        imagen: null,
        precio: "",
        duracion: "",
        descripcion: "",
        idCategoria: ""
    })

    useEffect(() => {
        async function categorias(){
            try {
              const list = await getCategoriesRequest()
              setCategories(list.data)
              setServiceData({
                ...serviceData,
                ["idCategoria"]: list.data[0].idCategoria
            })
            } catch (error) {
                setCategories([])
            }
          }
          categorias();
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
        // console.log(name+ ": "+value)
        setServiceData({
            ...serviceData,
            [name]: value
        })
    }

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const res = await createServiceRequest(serviceData)
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
                <h1>Crear un Servicio</h1>
            </div>
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                    Home
                </li>
                <li className="breadcrumb-item active">Crear</li>
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
                <h3 className="card-title">Nuevo Servicio</h3>
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
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagen">Subir Imagen</label>
                        <div className="input-group">
                            <div className="custom-file">
                            <input
                                type="file"
                                accept='image/png, image/gif, image/jpeg'
                                className="custom-file-input"
                                name="imagen" id="imagen"
                                onChange={handleChangeImage}
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
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripcion</label>
                        <textarea 
                            className="form-control" 
                            name="descripcion" id="descripcion" rows="3" placeholder="Describa la categoria"
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Categoria</label>
                        <select
                            className="form-control select2"
                            style={{ width: "100%" }}
                            name="categoria" id="categoria"
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
                        Crear
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

export default CrearServicio