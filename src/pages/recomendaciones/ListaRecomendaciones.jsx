import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from 'react-router-dom'

import Pagination from "./Pagination"

function ListaRecomendaciones() {

  const [services, setServices] = useState([])

  const totalServices = services.length

  const [servicesPerPage, setServicesPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')

  //indices por pagina de losservicios
  const lastIndex = currentPage * servicesPerPage
  const firstIndex = lastIndex - servicesPerPage

  const serviceList = () => {
    const list = [
      {id:1, nombre: "Servicio 1", categoria: "categoria de prod 1", precio: 30.00, duracion: 0.30, descripcion: "descripcion de servicio 1"},
      {id:2, nombre: "Servicio 2", categoria: "categoria de prod 2", precio: 60.00, duracion: 0.30, descripcion: "descripcion de servicio 2"},
      {id:3, nombre: "Servicio 3", categoria: "categoria de prod 3", precio: 80.00, duracion: 0.30, descripcion: "descripcion de servicio 3"},
      {id:4, nombre: "Servicio 4", categoria: "categoria de prod 4", precio: 30.00, duracion: 0.30, descripcion: "descripcion de servicio 4"},
      {id:5, nombre: "Servicio 5", categoria: "categoria de prod 5", precio: 100.00, duracion: 0.30, descripcion: "descripcion de servicio 5"},
    ]
    //si no hay nada en la busqueda, devolver la lista completa
    if (search == '' ) return setServices(list);

    //si hay algo en la busqueda devolver una nueva lista de servicios filtrados por nombre
    const filtered = list.filter(service => service.nombre.toLowerCase().includes(search.toLowerCase()))
    return setServices(filtered);
  }

  useEffect(() => {
    serviceList()
  }, [search])

  const onSearchChange = ({target}) => {
    setCurrentPage(1)
    setSearch(target.value)
  }

  return (
    <>
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="card-body p-0">
              <h1 style={{ fontSize: "40px" }}>Recomendaciones generadas</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  Home
                </li>
                <li className="breadcrumb-item active">Recomendaciones</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        {/* Default box */}
        <div className="d-flex justify-content-end">
          <Link to="/recomendaciones" className="ml-auto mr-2 mb-2">
              <button type="button" className="btn btn-secondary">Atras</button>
          </Link>
        </div>
        <div className="input-group">
          <input type="search" className="form-control form-control-lg" 
              placeholder="Buscar" onChange={onSearchChange}
          />
          <div className="input-group-append">
              <button type="submit" className="btn btn-lg btn-default">
                  <i className="fa fa-search"></i>
              </button>
          </div>
        </div>
        <div className="card card-solid">
          <div className="card-body pb-0">
            <div className="row">
              {services.map(service => (

                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column mb-3" key={service.id}>
                <div className="card bg-light d-flex flex-fill" style={{width: "21rem"}}>
                  <img className="card-img-top" src="/adminlte-react/dist/img/user-img.jpg"
                    style={{ height:"200px", objectFit: 'cover' }} alt="Card image cap"/>
                  <div className="card-body pt-0 mt-3">
                    <div className="row">
                      <div className="col-8">
                        <h2 className="lead">
                          <b> {service.nombre} </b>
                        </h2>
                        <p className="text-muted text-sm">
                          <b>Categoria: </b> {service.categoria}
                        </p>
                      </div>
                      <div className="col-4 text-center">
                        <h4>Bs. {service.precio} </h4>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <Link to="/recomendaciones/ver" className="btn btn-info btn-sm m-2">
                        <i className="fas fa-eye" /> Ver
                      </Link>
                    </div>
                  </div>
                </div>
                </div>

              )).slice(firstIndex, lastIndex)}
              
            </div>
          </div>
          {/* /.card-body */}
          <Pagination
            servicesPerPage={servicesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalServices={totalServices}
          />
          
        </div>
        {/* /.card */}
      </section>

      <Helmet>
        <script
          src="/adminlte-react/datatable.js"
          id="serviciosScript"
        ></script>
      </Helmet>
    </>
  );
}

export default ListaRecomendaciones