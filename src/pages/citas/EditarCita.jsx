import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { getCitaRequest, editCitaRequest } from "../../api/citas.js"

function EditarCita() {

  const [errors, setErrors] = useState([])
  const [title, setTitle] = useState("")
  const [citaData, setCitaData] = useState({
    idCita: "",
    nota: "",
    estado: ""
  })

  const params = useParams()

  useEffect(() => {
      async function cita(){
          if (params.id){
              const res = await getCitaRequest(params.id)
              setCitaData({
                idCita: res.data.idCita,
                nota: res.data.nota,
                estado: res.data.estado,
              })
              setTitle(res.data.idCita)
          }
      }
      cita()
  }, [])

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
          await editCitaRequest(params.id, citaData)
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
                <h1>Editar Cita : {citaData.idCita}</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">Home</li>
                  <li className="breadcrumb-item active">Editar</li>
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
                <h3 className="card-title">Editar Cita</h3>
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
                  

                  <div className="form-group">
                      <label>Nota</label>
                      <textarea className="form-control h-auto" name="nota" id="nota" rows="3" placeholder="Ingrese una observacion"
                      defaultValue={citaData.nota} onChange={handleChange}></textarea>
                  </div>

                  <div className="form-group">
                    <label>Estado</label>
                    <select
                      className="form-control select2"
                      style={{ width: "100%" }}
                      name="estado" id="estado"
                      value={citaData.estado}
                      onChange={handleChange}
                    >
                      <option>Pendiente</option>
                      <option>Asignado</option>
                      <option>Cancelado</option>
                      <option>Reagendado</option>
                    </select>
                  </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                    <button type="button" className="btn btn-secondary mr-2"
                        onClick={()=> navigate(-1)}>Atras</button>
                    <button type="submit" className="btn btn-primary ml-2">
                        Editar
                    </button>
                </div>
              </form>
            </div>
            {/* /.card */}
          </div>
        </section>
      </>
    );
}

export default EditarCita