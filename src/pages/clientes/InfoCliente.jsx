import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

function InfoCliente() {
    return (
        <>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Informacion de Usuario</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      Home
                    </li>
                    <li className="breadcrumb-item active">Info</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
    
                  {/* Profile Image */}
                  <div className="card card-primary card-outline">
                    <div className="card-body box-profile">
                      <div className="text-center">
                        <img
                          className="profile-user-img img-fluid img-circle"
                          src="/adminlte-react/dist/img/user-img.jpg"
                          alt="User profile picture"
                        />
                      </div>
                      <h3 className="profile-username text-center">
                        Gustavo Franco Moron
                      </h3>
                      <p className="text-muted text-center">Cliente</p>
                    </div>
                    {/* /.card-body */}
                  </div>
                </div>
    
                <div className="col-md-9">
                    {/* About Me Box */}
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Datos del cliente</h3>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <strong>
                                <FontAwesomeIcon icon={faCircleInfo} className='mr-1' />
                                Nombre
                            </strong>
                            <p className="text-muted"> Gustavo L </p>
                            <hr />
                            <strong>
                                <FontAwesomeIcon icon={faCircleInfo} className='mr-1' />
                                Apellido
                            </strong>
                            <p className="text-muted"> Franco Moron </p>
                            <hr />
                            <strong>
                                <FontAwesomeIcon icon={faEnvelope} className='mr-1' />
                                Correo electronico
                            </strong>
                            <p className="text-muted">
                            <span className="tag tag-danger"> gustavo@email.com </span>
                            </p>
                            <hr />
                            <strong>
                            <i className="far fa-file-alt mr-1" /> Preferencia
                            </strong>
                            <p className="text-muted">
                                Cortes de cabello
                            </p>
                        </div>
                        {/* /.card-body */}
                        <Link to="/clientes" className='ml-auto mr-2 mb-2'>
                          <button type="button" className="btn btn-secondary">Atras</button>
                        </Link>
                    </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}

export default InfoCliente