import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from 'react-router-dom'
import ModalDanger from "./ModalDanger"

import Pagination from "./Pagination"

function Servicios() {

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
      {id:1, nombre: "Corte semilargo frontal", img: "/adminlte-react/dist/img/servicio.jpg", categoria: "categoria de prod 1", precio: 30.00, duracion: 0.30, descripcion: "descripcion de servicio 1"},
      {id:2, nombre: "Burs Taper", img: "/adminlte-react/dist/img/servicio2.jpg", categoria: "categoria de prod 2", precio: 60.00, duracion: 0.30, descripcion: "descripcion de servicio 2"},
      {id:3, nombre: "Largo hacia atras amarrado ", img: "/adminlte-react/dist/img/servicio3.jpg", categoria: "categoria de prod 3", precio: 80.00, duracion: 0.30, descripcion: "descripcion de servicio 3"},
      {id:4, nombre: "Corte bajo con tupe", img: "/adminlte-react/dist/img/servicio4.jpg", categoria: "categoria de prod 4", precio: 30.00, duracion: 0.30, descripcion: "descripcion de servicio 4"},
      {id:5, nombre: "Peinado hacia atras", img: "/adminlte-react/dist/img/servicio5.jpg", categoria: "categoria de prod 5", precio: 100.00, duracion: 0.30, descripcion: "descripcion de servicio 5"},
      {id:6, nombre: "Burs Taper 2", img: "/adminlte-react/dist/img/servicio6.jpg", categoria: "categoria de prod 6", precio: 40.00, duracion: 0.30, descripcion: "descripcion de servicio 6"},
      {id:7, nombre: "Largo 1 semiondulado", img: "/adminlte-react/dist/img/servicio7.jpg", categoria: "categoria de prod 7", precio: 55.00, duracion: 0.30, descripcion: "descripcion de servicio 7"},
      {id:8, nombre: "Afeitado simple", img: "/adminlte-react/dist/img/servicio8.jpg", categoria: "categoria de prod 8", precio: 20.00, duracion: 0.30, descripcion: "descripcion de servicio 8"},
      {id:9, nombre: "Afeitado con delineado Deluxe", img: "/adminlte-react/dist/img/servicio9.jpg", categoria: "categoria de prod 9", precio: 82.00, duracion: 0.30, descripcion: "descripcion de servicio 9"},
      {id:10, nombre: "Combo deluxe afeitado", img: "/adminlte-react/dist/img/servicio10.jpg", categoria: "categoria de prod 10", precio: 30.00, duracion: 0.30, descripcion: "descripcion de servicio 10"},
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
              <h1 style={{ fontSize: "40px" }}>Servicios</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  Home
                </li>
                <li className="breadcrumb-item active">Servicios</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        {/* Default box */}
        <div className="mb-2">
          <Link to="/servicios/crear">
            <button type="button" className="btn btn-flex btn-success">Crear Servicio</button>
          </Link>
        </div>
        <div className="input-group">
          <input type="search" className="form-control form-control-lg" 
              placeholder="Buscar servicio" onChange={onSearchChange}
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
                  <img className="card-img-top" src={service.img}
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
                      <button className="btn btn-danger btn-sm m-2" data-toggle="modal" data-target="#modal-danger">
                        <i className="fas fa-trash" />
                      </button>
                      <Link to="/servicios/editar" className="btn btn-sm btn-primary m-2">
                        <i className="fas fa-pencil-alt" />
                      </Link>
                      <Link to="/servicios/ver" className="btn btn-info btn-sm m-2">
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
        <ModalDanger />
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

export default Servicios