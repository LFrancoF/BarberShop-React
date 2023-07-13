import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from "react-router-dom"
import { getServicesRequest } from "../../api/servicios.js"
import { getServiceRequest } from "../../api/servicios.js"
import { getClientsRequest } from "../../api/clientes.js"
import { getBarbersRequest } from "../../api/barberos.js"
import { createCitaRequest } from "../../api/citas.js"
import { useAuth } from "../../context/authContext"

function CrearCita() {

  const [clientes, setClientes] = useState([])
  const [selectedClient, setSelectedClient] = useState("")

  const [barberos, setBarberos] = useState([])
  const [selectedBarber, setSelectedBarber] = useState("")

  const [servicios, setServicios] = useState([])
  const [selectedService, setSelectedService] = useState("")

  const [errors, setErrors] = useState([])
  const [citaData, setCitaData] = useState({
      fecha: "",
      hora: "",
      idCliente: "",
      idBarbero: "",
      idServicio: "",
      costo: "",
      nota: "",
      estado: "Pendiente"
  })

  useEffect(() => {
    async function cargarOpciones(){
      try {
        //clientes
        const list1 = await getClientsRequest()
        setClientes(list1.data)
        let idCliente
        (user.rol == "Cliente") ? idCliente=user.idCliente : idCliente=list1.data[0].idCliente

        //barberos
        const list2 = await getBarbersRequest()
        setBarberos(list2.data)
        let idBarbero
        (user.rol == "Barbero") ? idBarbero=user.idBarbero : idBarbero=list2.data[0].idBarbero

        //servicios
        const list3 = await getServicesRequest()
        setServicios(list3.data)
        setSelectedService(list3.data[0].idServicio)
        setCitaData({
          ...citaData,
          ["idCliente"]: idCliente,
          ["idBarbero"]: idBarbero,
          ["idServicio"]: list3.data[0].idServicio,
          ["costo"]: list3.data[0].precio
      })
      } catch (error) {
        setClientes([])
        setBarberos([])
        setServicios([])
      }
    }
    cargarOpciones()
  }, [])

  const { user } = useAuth()

  const handleChangeClient = ({target}) => {
    setSelectedClient(target.value)
    setCitaData({
        ...citaData,
        ["idCliente"]: target.value
    })
  }

  const handleChangeBarber = ({target}) => {
    setSelectedBarber(target.value)
    setCitaData({
        ...citaData,
        ["idBarbero"]: target.value
    })
  }

  const handleChangeService = async({target}) => {
    setSelectedService(target.value)
    const servicio = await getServiceRequest(target.value)
    setCitaData({
        ...citaData,
        ["idServicio"]: target.value,
        ["costo"]: servicio.data.precio
    })
  }

  const handleChange = ({target: {name, value}}) => {
    setCitaData({
      ...citaData,
      [name]: value
  })
  }

  const navigate = useNavigate()

  const handleSubmit = async e => {
      try {
        e.preventDefault()
        await createCitaRequest(citaData)
        navigate('/citas')
      } catch (error) {
        setErrors(error.response.data)
      }
      
  }

    return (
      <>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Agendar nueva Cita</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">Home</li>
                  <li className="breadcrumb-item active">Agendar</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>

        <section className="content">
          <div className="container-fluid">
            {/* general form elements */}
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Nueva Cita</h3>
              </div>
              {/* /.card-header */}
              {
                    errors.map((error, i) => (
                        <p className="text-danger" style={{margin: "1px"}} key={i}>
                            {error}
                        </p>  
                    ))
                }
              {/* form start */}
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">

                      {(user.rol == "Cliente") 
                      ? (<div className="form-group">
                          <strong>Cliente: {user.nombre} {user.apellido} </strong> 
                        </div>)
                      : (
                        <div className="form-group">
                          <label>Cliente</label>
                          <select
                            className="form-control select2"
                            style={{ width: "100%" }}
                            name="idCliente" id="idCliente"
                            value={selectedClient}
                            onChange={handleChangeClient}
                          >
                            {clientes.map(client => (
                                <option value={client.idCliente} key={client.idCliente}>{client.nombre}</option>
                            ))}
                          </select>
                        </div>
                      )}
                      
                      <div className="form-group">
                            <label>Fecha:</label>
                            <div className="input-group date" id="reservationdate" data-target-input="nearest">
                                {/* <input type="text" name='fecha' id='fecha' className="form-control datetimepicker-input" data-target="#reservationdate"
                                  onChange={handleChange} />
                                <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                    <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                                </div> */}
                                <input required type="date" name='fecha' id='fecha' className="form-control"
                                  onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                      
                      {(user.rol == "Barbero") 
                        ? (<div className="form-group">
                            <strong>Barbero: {user.nombre} {user.apellido} </strong> 
                          </div>)
                        : (
                          <div className="form-group">
                            <label>Barbero</label>
                            <select
                              className="form-control select2"
                              style={{ width: "100%" }}
                              name="idBarbero" id="idBarbero"
                              value={selectedBarber}
                              onChange={handleChangeBarber}
                            >
                              {barberos.map(bar => (
                                  <option value={bar.idBarbero} key={bar.idBarbero}>{bar.nombre}</option>
                              ))}
                            </select>
                          </div>
                      )}

                      <div className="bootstrap-timepicker">
                            <div className="form-group">
                                <label>Hora:</label>
                                <div
                                className="input-group date"
                                id="timepicker"
                                >
                                <input required
                                    type="time"
                                    name='hora' id='hora' 
                                    className="form-control"
                                    onChange={handleChange}
                                />
                                {/* <div
                                    className="input-group-append"
                                    data-target="#timepicker"
                                    data-toggle="datetimepicker"
                                >
                                    <div className="input-group-text">
                                    <i className="far fa-clock" />
                                    </div>
                                </div> */}
                                </div>
                                {/* /.input group */}
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Servicio</label>
                    <select
                      className="form-control select2"
                      style={{ width: "100%" }}
                      name="idServicio" id="idServicio"
                      value={selectedService}
                      onChange={handleChangeService}
                    >
                      {servicios.map(ser => (
                          <option value={ser.idServicio} key={ser.idServicio}>{ser.nombre}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                      <label>Nota</label>
                      <textarea className="form-control h-auto" name="nota" id="nota" rows="3" placeholder="Ingrese alguna nota"
                      onChange={handleChange} ></textarea>
                  </div>

                  {(user.rol == "Cliente") ? (<></>) : (
                      <div className="form-group">
                        <label>Estado</label>
                        <select
                          className="form-control select2"
                          style={{ width: "100%" }}
                          name="estado" id="estado"
                          defaultValue={"Pendiente"}
                          onChange={handleChange}
                        >
                          <option>Pendiente</option>
                          <option>Asignado</option>
                          <option>Cancelado</option>
                          <option>Reagendado</option>
                        </select>
                      </div>
                  )}
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                    <button type="button" className="btn btn-secondary mr-2"
                        onClick={()=> navigate(-1)}>Atras</button>
                    <button type="submit" className="btn btn-primary">
                      Agendar
                    </button>
                </div>
              </form>
            </div>
            {/* /.card */}
          </div>
        </section>
        <Helmet>
          <script src="/adminlte-react/datatime.js"> 
          </script>
        </Helmet>
      </>
    );
}

export default CrearCita