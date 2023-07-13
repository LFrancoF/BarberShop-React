import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getCategoryRequest } from "../../api/categorias.js"

function InfoCategoria() {

    const [categoryData, setCategoryData] = useState({
        idCategoria: "",
        nombre: "",
        descripcion: ""
      })
    
      const params = useParams()
    
      useEffect(() => {
        async function categoriaData(){
          if (params.id){
              const res = await getCategoryRequest(params.id)
              setCategoryData({
                idCategoria : res.data.idCategoria,
                nombre: res.data.nombre,
                descripcion: res.data.descripcion
              })
          }
        }
        categoriaData()
      }, [])

      const navigate = useNavigate()

    return (
        <>
        <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1>Informacion de la categoria</h1>
                </div>
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item active">Info</li>
                </ol>
                </div>
            </div>
            </div>
            {/* /.container-fluid */}
        </section>
        <section className="content">
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">
                        <i className="fas fa-calendar mr-2" />
                            # {categoryData.idCategoria}
                        </h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                        <dl className="row">
                            <dt className="col-sm-4">Nombre</dt>
                            <dd className="col-sm-8">
                                {categoryData.nombre}
                            </dd>
                            <dt className="col-sm-4">Descripcion</dt>
                            <dd className="col-sm-8">
                                {categoryData.descripcion}
                            </dd>
                        </dl>
                    </div>
                    {/* /.card-body */}
                </div>
                <button type="button" className="btn btn-secondary mr-2"
                        onClick={()=> navigate(-1)}>Atras</button>
            </div>
        </section>
        </>
      );
}

export default InfoCategoria