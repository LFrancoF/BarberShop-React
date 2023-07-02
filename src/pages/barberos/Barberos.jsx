import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import ModalDanger from "./ModalDanger"

function Barberos() {

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
            <div>
              <Link to="/barberos/crear">
                <button type="button" className="btn btn-flex btn-success">Registrar Barbero</button>
              </Link>
            </div>
            {/* /.card */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Lista de Barberos registrados</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <table id="barberosTable" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre Completo</th>
                      <th>Telefono</th>
                      <th>Especialidad</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>1</td>
                      <td>
                        <a>
                          Gustavo Franco Moron
                        </a>
                      </td>
                      <td>
                        <a>
                          75641230
                        </a>
                      </td>
                      <td>
                        <a>
                          Peluqueria
                        </a>
                      </td>
                      <td className="project-actions text-right d-flex justify-content-around" >
                          <Link to="/barberos/ver"  className="btn btn-primary btn-sm">
                              <i className="fas fa-eye mr-1">
                              </i>
                              Ver
                          </Link>
                          <Link to="/barberos/editar" className="btn btn-info btn-sm" >
                              <i className="fas fa-pencil-alt mr-1">
                              </i>
                              Editar
                          </Link>
                          <button className="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-danger">
                              <i className="fas fa-trash mr-1">
                              </i>
                              Eliminar
                          </button>
                      </td>
                  </tr>
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
                </table>
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

      <ModalDanger />
    </section>
    <Helmet>
      <script src="/adminlte-react/datatable.js" id="barberosScript"> 
      </script>
    </Helmet>
    </>
  )
}

export default Barberos