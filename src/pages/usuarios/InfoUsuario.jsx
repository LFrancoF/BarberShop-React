import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useParams } from "react-router-dom"
import { getUserRequest } from "../../api/usuarios.js"

function InfoUsuario() {

  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    rol: ""
  })

  const params = useParams()

  useEffect(() => {
    async function usuarioData(){
      if (params.id){
          const res = await getUserRequest(params.id)
          setUserData({
              nombre: res.data.nombre,
              apellido: res.data.apellido,
              email: res.data.email,
              telefono: res.data.telefono,
              rol: res.data.rol
          })
      }
    }
    usuarioData()
  }, [])

  const navigate = useNavigate()
  

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Info de Usuario</h1>
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
                    {userData.nombre} {userData.apellido}
                  </h3>
                  <p className="text-muted text-center"> {userData.rol} </p>
                </div>
                {/* /.card-body */}
              </div>
            </div>

            <div className="col-md-9">
                {/* About Me Box */}
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Datos del Usuario</h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                        <strong>
                            <FontAwesomeIcon icon={faCircleInfo} className='mr-1' />
                            Nombre
                        </strong>
                        <p className="text-muted"> {userData.nombre} </p>
                        <hr />
                        <strong>
                            <FontAwesomeIcon icon={faCircleInfo} className='mr-1' />
                            Apellido
                        </strong>
                        <p className="text-muted"> {userData.apellido} </p>
                        <hr />
                        <strong>
                            <FontAwesomeIcon icon={faEnvelope} className='mr-1' />
                            Correo electronico
                        </strong>
                        <p className="text-muted">
                        <span className="tag tag-danger"> {userData.email} </span>
                        </p>
                        <hr />
                        <strong>
                            <FontAwesomeIcon icon={faPhone} className='mr-1' />
                            Telefono
                        </strong>
                        <p className="text-muted">
                            {userData.telefono}
                        </p>
                        <hr />
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

export default InfoUsuario