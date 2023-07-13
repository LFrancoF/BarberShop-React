import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { getCategoryRequest, editCategoryRequest } from "../../api/categorias.js"

function EditarCategoria() {

    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState("")
    const [categoryData, setCategoryData] = useState({
        nombre: "",
        descripcion: ""
    })

    const params = useParams()

    useEffect(() => {
        async function categoriaData(){
            if (params.id){
                const res = await getCategoryRequest(params.id)
                setCategoryData({
                    nombre: res.data.nombre,
                    descripcion: res.data.descripcion
                })
                setTitle(res.data.nombre)
            }
        }
        categoriaData()
    }, [])

    const handleChange = ({target: {name, value}}) => {
        setCategoryData({
            ...categoryData,
            [name]: value
        })
    }
    
    const navigate = useNavigate()

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            await editCategoryRequest(params.id, categoryData)
            navigate('/categorias')

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
                <h1>Editar categoria : {title} </h1>
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
                <h3 className="card-title">Informacion de la categoria</h3>
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
                        placeholder="Ingrese el nombre de la categoria"
                        defaultValue={categoryData.nombre}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="form-group">
                        <label>Descripcion</label>
                        <textarea className="form-control h-auto" name="descripcion" id="descripcion" rows="3" placeholder="Describa la categoria"
                            defaultValue={categoryData.descripcion}
                            onChange={handleChange}>
                            </textarea>
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

export default EditarCategoria