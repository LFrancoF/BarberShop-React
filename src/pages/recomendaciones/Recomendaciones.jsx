import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom"

function Recomendaciones() {

  const [imagenName, setImagenName] = useState("")
    const [selectedElements, setSelectedElements] = useState("")
    const [formData, setFormData] = useState({
        idCategoria: "1",
        imagen: null
    })

  const navigate = useNavigate()

  const handleChangeImage = ({target}) => {
    setImagenName(target.files[0].name)
    transformFile(target.files[0])
  }

  const transformFile = (file) => {
      const reader = new FileReader()
      if (!file){
          setFormData({
              ...formData,
              ["imagen"]: null
          })
      }
      reader.readAsDataURL(file)
      reader.onloadend = () => {
          setFormData({
              ...formData,
              ["imagen"]: reader.result
          })
      }
  }

  const handleChangeOption = ({target}) => {
    setSelectedElements(target.value)
    setFormData({
        ...formData,
        ["idCategoria"]: target.value
    })
  }

  const handleSubmit = (e) =>{
    try {
      e.preventDefault()
      console.log(formData)
      //navigate to services recomend
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="card-body p-0">
              <h1 style={{fontSize:"40px"}}>Recomendacion personalizada</h1>
            </div>
            <div className="col-sm-5">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Projects</li>
            </ol>
          </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>

      <section className="content">
        <div className="d-flex justify-content-center vh-90">
          <div className="card card-primary w-50">
            <div className="card-header">
              <h3 className="card-title">Generar Recomendaciones</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="form-group">
                  <label>Categoria</label>
                  <select
                    className="form-control select2"
                    style={{ width: "100%" }}
                    name="categoria" id="categoria"
                    value={selectedElements}
                    onChange={handleChangeOption}
                  >
                    <option value="1" >Peluqueria</option>
                    <option value="2" >tratamientos faciales</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea className="form-control h-auto" rows="5" 
                      placeholder="Ingresa alguna nota u observacion" 
                      defaultValue={"Sube una fotografia tuya, enfocando lo mejor posible todo el rostro, elige una categoria de servicio, y asi te recomendaremos los mejores servicios"
                      +"ideales para ti, de acuerdo a tus rasgos faciales, pruebalo y escoge alguno de los servicios"
                      +"que te recomendemos :)"}
                      disabled/>
                </div>
                <div className="form-group">
                  <label htmlFor="imagen">Subir fotografia</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        accept='image/png, image/gif, image/jpeg'
                        className="custom-file-input"
                        name='imagen'
                        id="imagen"
                        onChange={handleChangeImage}
                      />
                      <label
                        className="custom-file-label"
                      >
                        {(imagenName) ? imagenName : "Subir"}
                      </label>
                    </div>
                  </div>
                  {(formData["imagen"]!= null) 
                      ? (<img src={formData["imagen"]} alt="fotografia" width={250} height={200} />) 
                      : (<></>)
                  }
                </div>
                
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Recomendaciones