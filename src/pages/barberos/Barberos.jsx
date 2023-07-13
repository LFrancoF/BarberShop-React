import { useState, useEffect } from 'react'
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import ModalDanger from "./ModalDanger"
import { getBarbersRequest } from "../../api/barberos.js"
import { useAuth } from "../../context/authContext"

function Barberos() {

  const [barberList, setBarberList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [deleteId, setDeleteId] = useState("")

  useEffect(() => {
    async function barberos(){
      try {
        if (isLoading){
          const list = await getBarbersRequest()
          setBarberList(list.data)
          setIsLoading(false)
        }
      } catch (error) {
        setBarberList([])
        setIsLoading(true)
      }
    }
    barberos();
  }, [])

  const { user } = useAuth()

  const handleDeleteId = (id) => {
    setDeleteId(id)
  }

  const refreshList = async () => {
    const list = await getBarbersRequest()
    setBarberList(list.data)
  }

  return (
    <>
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row">
          <div className="card-body p-0">
            <h1 style={{fontSize:"40px"}}>Barberos</h1>

            
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item active">Barberos</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>

    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {(user.rol == "Administrador") ? (
              <div>
                <Link to="/barberos/crear">
                  <button type="button" className="btn btn-flex btn-success">Registrar Barbero</button>
                </Link>
              </div>
            ) : (<></>) }
            {/* /.card */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Lista de Barberos registrados</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                {(isLoading) ? (<h2>Cargando datos...</h2>) : (
                  <table id="barberosTable" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nombre Completo</th>
                        <th>Telefono</th>
                        <th>Especialidad</th>
                        {(user.rol == "Administrador") ? (<th>Acciones</th>) : (<th>Info</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      { barberList.map( barber => (
                        <tr key={barber.idUsuario}>
                            <td>{barber.idUsuario}</td>
                            <td>
                              <a>
                              {barber.nombre} {barber.apellido}
                              </a>
                            </td>
                            <td>
                              <a>
                                {barber.telefono}
                              </a>
                            </td>
                            <td>
                              <a>
                                {barber.especialidad}
                              </a>
                            </td>
                            <td className="project-actions text-right d-flex justify-content-around" >
                                <Link to={`/barberos/ver/${barber.idUsuario}`}  className="btn btn-primary btn-sm">
                                    <i className="fas fa-eye mr-1">
                                    </i>
                                    Ver
                                </Link>
                                
                                {(user.rol == "Administrador") ? (
                                  <>
                                    <Link to={`/barberos/editar/${barber.idUsuario}`} className="btn btn-info btn-sm" >
                                        <i className="fas fa-pencil-alt mr-1">
                                        </i>
                                        Editar
                                    </Link>
                                    <button className="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-danger"
                                      onClick={() =>handleDeleteId(barber.idUsuario)}>
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

      <ModalDanger idBarber={deleteId} refreshList={refreshList} />
    </section>
    <Helmet>
      <script src="/adminlte-react/datatable.js" id="barberosScript"> 
      </script>
    </Helmet>
    </>
  )
}

export default Barberos