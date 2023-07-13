import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import ModalDanger from "./ModalDanger"
import Pagination from "./Pagination"
import { getServicesRequest } from '../../api/servicios.js'
import { useAuth } from "../../context/authContext"

function Servicios() {

  const [services, setServices] = useState([])
  const [deleteId, setDeleteId] = useState("")

  const totalServices = services.length

  //pagination hooks
  const [servicesPerPage, setServicesPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')

  //indices por pagina de los servicios
  const lastIndex = currentPage * servicesPerPage
  const firstIndex = lastIndex - servicesPerPage

  useEffect(() => {
    async function serviceList(){
      /**/
      try {
        
        const listRes = await getServicesRequest()
        const list = listRes.data
        //si no hay nada en la busqueda, devolver la lista completa
        if (search == '' ) return setServices(list);
    
        //si hay algo en la busqueda devolver una nueva lista de servicios filtrados por nombre
        const filtered = list.filter(service => service.nombre.toLowerCase().includes(search.toLowerCase()))
        setServices(filtered)
        
      } catch (error) {
        setServices([])
      }
    }

    serviceList()
  }, [search])

  const { user } = useAuth()

  const onSearchChange = ({target}) => {
    setCurrentPage(1)
    setSearch(target.value)
  }

  const handleDeleteId = (id) => {
    setDeleteId(id)
  }

  const refreshList = async () => {
    const list = await getServicesRequest()
    setServices(list.data)
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

        {(user.rol == "Administrador") ? (
          <div className="mb-2">
            <Link to="/servicios/crear">
              <button type="button" className="btn btn-flex btn-success">Crear Servicio</button>
            </Link>
          </div>
        ) : (<></>) }
        
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

                {(services.length == 0) ? <h3>No hay servicios disponibles</h3> : <></> }

                {services.map(service => (

                  <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column mb-3" key={service.idServicio}>
                    <div className="card bg-light d-flex flex-fill" style={{width: "21rem"}}>
                      <img className="card-img-top" src={service.imagen ?? "/adminlte-react/dist/img/no-image.png"}
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

                          {(user.rol == "Administrador") ? (
                            <>
                              <button className="btn btn-danger btn-sm m-2" data-toggle="modal" data-target="#modal-danger"
                                onClick={() =>handleDeleteId(service.idServicio)}>
                                <i className="fas fa-trash" />
                              </button>
                              <Link to={`/servicios/editar/${service.idServicio}`} className="btn btn-sm btn-primary m-2">
                                <i className="fas fa-pencil-alt" />
                              </Link>
                            </>
                          ) : <></>}
                          
                          <Link to={`/servicios/ver/${service.idServicio}`} className="btn btn-info btn-sm m-2">
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
        <ModalDanger idService={deleteId} refreshList={refreshList} />
      </section>
    </>
  );
}

export default Servicios