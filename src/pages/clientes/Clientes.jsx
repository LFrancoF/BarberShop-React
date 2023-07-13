import { useState, useEffect } from 'react'
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import ModalDanger from "./ModalDanger"
import { getClientsRequest } from "../../api/clientes.js"


function Clientes() {

  const [clientList, setClientList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [deleteId, setDeleteId] = useState("")

  useEffect(() => {
    async function clientes(){
      try {
        if (isLoading){
          const list = await getClientsRequest()
          setClientList(list.data)
          setIsLoading(false)
        }
      } catch (error) {
        setClientList([])
        setIsLoading(true)
      }
    }
    clientes();
  }, [])

  const handleDeleteId = (id) => {
    setDeleteId(id)
  }

  const refreshList = async () => {
    const list = await getClientsRequest()
    setClientList(list.data)
  }

  return (
    <>
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row">
          <div className="card-body p-0">
            <h1 style={{fontSize:"40px"}}>Clientes</h1>

            
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item active">Clientes</li>
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
              <Link to="/clientes/crear">
                <button type="button" className="btn btn-flex btn-success">Registrar Cliente</button>
              </Link>
            </div>
            {/* /.card */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Lista de Clientes registrados</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                {(isLoading) ? (<h2>Cargando datos...</h2>) : (
                  <table id="clientesTable" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nombre Completo</th>
                        <th>Telefono</th>
                        <th>Preferencia</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      { clientList.map( client => (
                        <tr key={client.idUsuario}>
                            <td>{client.idUsuario}</td>
                            <td>
                              <a>
                                {client.nombre} {client.apellido}
                              </a>
                            </td>
                            <td>
                              <a>
                                {client.telefono}
                              </a>
                            </td>
                            <td>
                              <a>
                                {client.preferencia}
                              </a>
                            </td>
                            <td className="project-actions text-right d-flex justify-content-around" >
                                <Link to={`/clientes/ver/${client.idUsuario}`}  className="btn btn-primary btn-sm">
                                    <i className="fas fa-eye mr-1">
                                    </i>
                                    Ver
                                </Link>
                                <Link to={`/clientes/editar/${client.idUsuario}`} className="btn btn-info btn-sm" >
                                    <i className="fas fa-pencil-alt mr-1">
                                    </i>
                                    Editar
                                </Link>
                                <button className="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-danger"
                                  onClick={() =>handleDeleteId(client.idUsuario)}>
                                    <i className="fas fa-trash mr-1">
                                    </i>
                                    Eliminar
                                </button>
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

      <ModalDanger idClient={deleteId} refreshList={refreshList} />
    </section>
    <Helmet>
      <script src="/adminlte-react/datatable.js" id="clientesScript"> 
      </script>
    </Helmet>
    </>
  )
}

export default Clientes