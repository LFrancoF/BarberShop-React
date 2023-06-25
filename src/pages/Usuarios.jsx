import { Helmet } from 'react-helmet-async'

function Usuarios() {
    return (
        <>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="card-body">
                <h1 style={{fontSize:"40px"}}>Administrar Usuarios</h1>
    
                
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Projects</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
    
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {/* /.card */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Lista de Usuarios del Sistema</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table id="usuariosTable" className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Nombre Completo</th>
                          <th>Telefono</th>
                          <th>Rol/Tipo</th>
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
                              Cliente
                            </a>
                          </td>
                          <td className="project-actions text-right d-flex justify-content-around" >
                              <a className="btn btn-primary btn-sm" href="#" >
                                  <i className="fas fa-folder">
                                  </i>
                                  Ver
                              </a>
                              <a className="btn btn-info btn-sm" href="#" >
                                  <i className="fas fa-pencil-alt">
                                  </i>
                                  Editar
                              </a>
                              <a className="btn btn-danger btn-sm" href="#" >
                                  <i className="fas fa-trash">
                                  </i>
                                  Eliminar
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>
                            <a>
                              Carlos Fernandez
                            </a>
                          </td>
                          <td>
                            <a>
                              62641230
                            </a>
                          </td>
                          <td>
                            <a>
                                Cliente
                            </a>
                          </td>
                          <td className="project-actions text-right d-flex justify-content-around" >
                              <a className="btn btn-primary btn-sm" href="#" >
                                  <i className="fas fa-folder">
                                  </i>
                                  Ver
                              </a>
                              <a className="btn btn-info btn-sm" href="#" >
                                  <i className="fas fa-pencil-alt">
                                  </i>
                                  Editar
                              </a>
                              <a className="btn btn-danger btn-sm" href="#" >
                                  <i className="fas fa-trash">
                                  </i>
                                  Eliminar
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td>3</td>
                          <td>
                            <a>
                              Alejandra Ruiz F
                            </a>
                          </td>
                          <td>
                            <a>
                              66985412
                            </a>
                          </td>
                          <td>
                            <a>
                                Barbero
                            </a>
                          </td>
                          <td className="project-actions text-right d-flex justify-content-around" >
                              <a className="btn btn-primary btn-sm" href="#" >
                                  <i className="fas fa-folder">
                                  </i>
                                  Ver
                              </a>
                              <a className="btn btn-info btn-sm" href="#" >
                                  <i className="fas fa-pencil-alt">
                                  </i>
                                  Editar
                              </a>
                              <a className="btn btn-danger btn-sm" href="#" >
                                  <i className="fas fa-trash">
                                  </i>
                                  Eliminar
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td>4</td>
                          <td>
                            <a>
                              Carlos Sanchez Parada
                            </a>
                          </td>
                          <td>
                            <a>
                              75641230
                            </a>
                          </td>
                          <td>
                            <a>
                              Barbero
                            </a>
                          </td>
                          <td className="project-actions text-right d-flex justify-content-around" >
                              <a className="btn btn-primary btn-sm" href="#" >
                                  <i className="fas fa-folder">
                                  </i>
                                  Ver
                              </a>
                              <a className="btn btn-info btn-sm" href="#" >
                                  <i className="fas fa-pencil-alt">
                                  </i>
                                  Editar
                              </a>
                              <a className="btn btn-danger btn-sm" href="#" >
                                  <i className="fas fa-trash">
                                  </i>
                                  Eliminar
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td>5</td>
                          <td>
                            <a>
                              Carla Alejandra Trinidad
                            </a>
                          </td>
                          <td>
                            <a>
                              64512354
                            </a>
                          </td>
                          <td>
                            <a>
                              Cliente
                            </a>
                          </td>
                          <td className="project-actions text-right d-flex justify-content-around" >
                              <a className="btn btn-primary btn-sm" href="#" >
                                  <i className="fas fa-folder">
                                  </i>
                                  Ver
                              </a>
                              <a className="btn btn-info btn-sm" href="#" >
                                  <i className="fas fa-pencil-alt">
                                  </i>
                                  Editar
                              </a>
                              <a className="btn btn-danger btn-sm" href="#" >
                                  <i className="fas fa-trash">
                                  </i>
                                  Eliminar
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td>6</td>
                          <td>
                            <a>
                              Luis Suarez S
                            </a>
                          </td>
                          <td>
                            <a>
                              75641230
                            </a>
                          </td>
                          <td>
                            <a>
                              Cliente
                            </a>
                          </td>
                          <td className="project-actions text-right d-flex justify-content-around" >
                              <a className="btn btn-primary btn-sm" href="#" >
                                  <i className="fas fa-folder">
                                  </i>
                                  Ver
                              </a>
                              <a className="btn btn-info btn-sm" href="#" >
                                  <i className="fas fa-pencil-alt">
                                  </i>
                                  Editar
                              </a>
                              <a className="btn btn-danger btn-sm" href="#" >
                                  <i className="fas fa-trash">
                                  </i>
                                  Eliminar
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td>7</td>
                          <td>
                            <a>
                              Enrique Quiroga Paz
                            </a>
                          </td>
                          <td>
                            <a>
                              61220540
                            </a>
                          </td>
                          <td>
                            <a>
                              Cliente
                            </a>
                          </td>
                          <td className="project-actions text-right d-flex justify-content-around" >
                              <a className="btn btn-primary btn-sm" href="#" >
                                  <i className="fas fa-folder">
                                  </i>
                                  Ver
                              </a>
                              <a className="btn btn-info btn-sm" href="#" >
                                  <i className="fas fa-pencil-alt">
                                  </i>
                                  Editar
                              </a>
                              <a className="btn btn-danger btn-sm" href="#" >
                                  <i className="fas fa-trash">
                                  </i>
                                  Eliminar
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td>8</td>
                          <td>
                            <a>
                              Sara Alejandra Quiroz
                            </a>
                          </td>
                          <td>
                            <a>
                              75641230
                            </a>
                          </td>
                          <td>
                            <a>
                              Barbero
                            </a>
                          </td>
                          <td className="project-actions text-right d-flex justify-content-around" >
                              <a className="btn btn-primary btn-sm" href="#" >
                                  <i className="fas fa-folder">
                                  </i>
                                  Ver
                              </a>
                              <a className="btn btn-info btn-sm" href="#" >
                                  <i className="fas fa-pencil-alt">
                                  </i>
                                  Editar
                              </a>
                              <a className="btn btn-danger btn-sm" href="#" >
                                  <i className="fas fa-trash">
                                  </i>
                                  Eliminar
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td>9</td>
                          <td>
                            <a>
                              Daniela Montero M
                            </a>
                          </td>
                          <td>
                            <a>
                              77855410
                            </a>
                          </td>
                          <td>
                            <a>
                              Cliente
                            </a>
                          </td>
                          <td className="project-actions text-right d-flex justify-content-around" >
                              <a className="btn btn-primary btn-sm" href="#" >
                                  <i className="fas fa-folder">
                                  </i>
                                  Ver
                              </a>
                              <a className="btn btn-info btn-sm" href="#" >
                                  <i className="fas fa-pencil-alt">
                                  </i>
                                  Editar
                              </a>
                              <a className="btn btn-danger btn-sm" href="#" >
                                  <i className="fas fa-trash">
                                  </i>
                                  Eliminar
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td>10</td>
                          <td>
                            <a>
                              Helen Castro C
                            </a>
                          </td>
                          <td>
                            <a>
                              75641230
                            </a>
                          </td>
                          <td>
                            <a>
                              Cliente
                            </a>
                          </td>
                          <td className="project-actions text-right d-flex justify-content-around" >
                              <a className="btn btn-primary btn-sm" href="#" >
                                  <i className="fas fa-folder">
                                  </i>
                                  Ver
                              </a>
                              <a className="btn btn-info btn-sm" href="#" >
                                  <i className="fas fa-pencil-alt">
                                  </i>
                                  Editar
                              </a>
                              <a className="btn btn-danger btn-sm" href="#" >
                                  <i className="fas fa-trash">
                                  </i>
                                  Eliminar
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td>11</td>
                          <td>
                            <a>
                              Diego Armando Sanchez
                            </a>
                          </td>
                          <td>
                            <a>
                              75641230
                            </a>
                          </td>
                          <td>
                            <a>
                              Cliente
                            </a>
                          </td>
                          <td className="project-actions text-right d-flex justify-content-around" >
                              <a className="btn btn-primary btn-sm" href="#" >
                                  <i className="fas fa-folder">
                                  </i>
                                  Ver
                              </a>
                              <a className="btn btn-info btn-sm" href="#" >
                                  <i className="fas fa-pencil-alt">
                                  </i>
                                  Editar
                              </a>
                              <a className="btn btn-danger btn-sm" href="#" >
                                  <i className="fas fa-trash">
                                  </i>
                                  Eliminar
                              </a>
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
        </section>
        <Helmet>
          <script src="/adminlte-react/datatable.js" id="usuariosScript"> 
          </script>
        </Helmet>
        </>
      )
}

export default Usuarios