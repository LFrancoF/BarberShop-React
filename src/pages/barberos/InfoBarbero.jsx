import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useParams } from "react-router-dom"
import { getBarberRequest } from "../../api/barberos.js"

function InfoBarbero() {

  const [barberData, setBarberData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    especialidad: ""
  })

  const params = useParams()

  useEffect(() => {
    async function barberoData(){
      if (params.id){
          const res = await getBarberRequest(params.id)
          setBarberData({
              nombre: res.data.nombre,
              apellido: res.data.apellido,
              email: res.data.email,
              telefono: res.data.telefono,
              especialidad: res.data.especialidad
          })
      }
    }
    barberoData()
  }, [])

  const navigate = useNavigate()

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
                      {barberData.nombre} {barberData.apellido}
                    </h3>
                    <p className="text-muted text-center">Barbero</p>
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
  
              <div className="col-md-9">
                  {/* About Me Box */}
                  <div className="card card-primary">
                      <div className="card-header">
                          <h3 className="card-title">Datos del barbero</h3>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                          <strong>
                              <FontAwesomeIcon icon={faCircleInfo} className='mr-1' />
                              Nombre
                          </strong>
                          <p className="text-muted"> {barberData.nombre} </p>
                          <hr />
                          <strong>
                              <FontAwesomeIcon icon={faCircleInfo} className='mr-1' />
                              Apellido
                          </strong>
                          <p className="text-muted"> {barberData.apellido} </p>
                          <hr />
                          <strong>
                              <FontAwesomeIcon icon={faEnvelope} className='mr-1' />
                              Correo electronico
                          </strong>
                          <p className="text-muted">
                          <span className="tag tag-danger"> {barberData.email} </span>
                          </p>
                          <hr />
                          <strong>
                              <FontAwesomeIcon icon={faPhone} className='mr-1' />
                              Telefono
                          </strong>
                          <p className="text-muted">
                          <span className="tag tag-danger"> {barberData.telefono} </span>
                          </p>
                          <hr />
                          <strong>
                          <i className="far fa-file-alt mr-1" /> Especialidad
                          </strong>
                          <p className="text-muted">
                            {barberData.especialidad}
                          </p>
                      </div>
                      {/* /.card-body */}
                      <button type="button" className="btn btn-secondary ml-auto mr-2 mb-2"
                       onClick={()=> navigate(-1)}>Atras</button>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}

export default InfoBarbero