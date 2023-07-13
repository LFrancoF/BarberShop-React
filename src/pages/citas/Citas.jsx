import { useState, useEffect } from "react"
import { Helmet } from 'react-helmet-async'
import { Link } from "react-router-dom"
import ModalDanger from "./ModalDanger"
import { getAllCitasRequest, getMyCitasRequest } from '../../api/citas.js'
import { useAuth } from "../../context/authContext"
import Estado from './Estado'

function Citas() {

  const [citaList, setCitaList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [deleteId, setDeleteId] = useState("")

  useEffect(() => {
    async function citas(){
      try {
        if (isLoading){
          if (user.rol != "Administrador"){
            const list = await getMyCitasRequest(user.id, user.rol)
            setCitaList(list.data)
            return setIsLoading(false)
          }

          const list = await getAllCitasRequest()
          setCitaList(list.data)
          return setIsLoading(false)
        }
      } catch (error) {
        setCitaList([])
        setIsLoading(true)
      }
    }
    citas();
  }, [])

  const { user } = useAuth()

  const handleDeleteId = (id) => {
    setDeleteId(id)
  }

  const refreshList = async () => {
    if (user.rol != "Administrador"){
      const list = await getMyCitasRequest(user.id, user.rol)
      return setCitaList(list.data)
    }
    const list = await getAllCitasRequest()
    return setCitaList(list.data)
  }
  
  return (
    <>
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row">
          <div className="card-body p-0">
            <h1 style={{fontSize:"40px"}}>Citas</h1>

            
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item active">Citas</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>

    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div>
              <Link to="/citas/crear">
                <button type="button" className="btn btn-flex btn-success">Agendar nueva cita</button>
              </Link>
            </div>
            {/* /.card */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Lista de Citas</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                {(isLoading) ? (<h2>Cargando datos...</h2>) : (
                  <table id="citasTable" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        {(user.rol == "Cliente") ? (<th>Barbero</th>) : (<th>Cliente</th>)}
                        <th>Servicio</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      { citaList.map( cita => (
                        <tr key={cita.idCita}>
                            <td>{cita.idCita}</td>
                            <td>
                              <a>
                                {(user.rol == "Cliente") ? cita.barbero : cita.cliente}
                              </a>
                            </td>
                            <td>
                              <a>
                                {cita.servicio}
                              </a>
                            </td>
                            <td>
                              
                              <Estado state={cita.estado}/>
                            
                            </td>
                            <td className="project-actions text-right d-flex justify-content-around" >
                                <Link to={`/citas/ver/${cita.idCita}`}  className="btn btn-primary btn-sm">
                                    <i className="fas fa-eye mr-1">
                                    </i>
                                    Ver
                                </Link>
                                {(user.rol != "Cliente") ? (
                                <>
                                  <Link to={`/citas/editar/${cita.idCita}`} className="btn btn-info btn-sm" >
                                      <i className="fas fa-pencil-alt mr-1">
                                      </i>
                                      Editar
                                  </Link>
                                  <button className="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-danger"
                                    onClick={() =>handleDeleteId(cita.idCita)}>
                                      <i className="fas fa-trash mr-1">
                                      </i>
                                      Eliminar
                                  </button>
                                </>
                                ) : (<></>) }
                            </td>
                        </tr>
                      ) ) }
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                        <th>-</th>
                      </tr>
                    </tfoot>
                  </table>)
                }
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container-fluid */}

      <ModalDanger idCita={deleteId} refreshList={refreshList} />
    </section>
    <Helmet>
      <script src="/adminlte-react/datatable.js" id="citasScript"> 
      </script>
    </Helmet>
    </>
  )
}

export default Citas