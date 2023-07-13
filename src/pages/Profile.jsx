import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
import { getBarberRequest } from "../api/barberos.js"
import { getClientRequest } from "../api/clientes.js"
import Feature from './Feature';


function Profile() {

  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    preferencia: null,
    especialidad: null
  })

  useEffect(() => {
    async function usuario(){
      try {
        let especialidad
        let preferencia
        if(user.rol == "Barbero"){
          const barber = await getBarberRequest(user.id)
          especialidad = barber.data.especialidad
        }

        if(user.rol == "Cliente"){
          const client = await getClientRequest(user.id)
          preferencia = client.data.preferencia
        }

        setUserData({
          nombre: user.nombre,
          apellido: user.apellido,
          email: user.email,
          telefono: user.telefono,
          preferencia: preferencia,
          especialidad: especialidad
        })
      } catch (error) {
        setUserData(null)
      }
    }
    usuario();
  }, [])

  const { user } = useAuth()

  const navigate = useNavigate()

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Perfil de Usuario </h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  Home
                </li>
                <li className="breadcrumb-item active">Perfil</li>
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
                  <p className="text-muted text-center">{user.rol}</p>
                </div>
                {/* /.card-body */}
              </div>
            </div>

            <div className="col-md-9">
                {/* About Me Box */}
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Mi Informacion</h3>
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

                        <Feature rol={user.rol} pref={userData.preferencia} esp={userData.especialidad} />
                    </div>
                    {/* /.card-body */}
                    {/* <Link to="/home" className='ml-auto mr-2 mb-2'> */}
                      <button type="button" className="btn btn-secondary ml-auto mr-2 mb-2"
                       onClick={()=> navigate(-1)}>Atras</button>
                    {/* </Link> */}
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile