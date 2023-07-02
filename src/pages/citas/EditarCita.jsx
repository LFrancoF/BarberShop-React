import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet-async'

function EditarCita() {

    const handleSubmit = e => {
        e.preventDefault()
        console.log("editando cita")
        
    }

    return (
      <>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Editar datos de Cita</h1>
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
              {/* form start */}
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Paciente</label>
                        <select
                          className="form-control select2"
                          style={{ width: "100%" }}
                          name="paciente"
                        >
                          <option value="selected">Paciente 1</option>
                          <option>Paciente 2</option>
                          <option>Paciente 3</option>
                        </select>
                      </div>
                      <div className="form-group">
                            <label>Date:</label>
                            <div className="input-group date" id="reservationdate" data-target-input="nearest">
                                <input type="text" className="form-control datetimepicker-input" data-target="#reservationdate"/>
                                <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                    <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Barbero</label>
                        <select
                          className="form-control select2"
                          style={{ width: "100%" }}
                          name="barbero"
                        >
                          <option value="selected">Barbero 1</option>
                          <option>Barbero 2</option>
                          <option>Barbero 3</option>
                        </select>
                      </div>
                      <div className="bootstrap-timepicker">
                            <div className="form-group">
                                <label>Time:</label>
                                <div
                                className="input-group date"
                                id="timepicker"
                                data-target-input="nearest"
                                >
                                <input
                                    type="text"
                                    className="form-control datetimepicker-input"
                                    data-target="#timepicker"
                                />
                                <div
                                    className="input-group-append"
                                    data-target="#timepicker"
                                    data-toggle="datetimepicker"
                                >
                                    <div className="input-group-text">
                                    <i className="far fa-clock" />
                                    </div>
                                </div>
                                </div>
                                {/* /.input group */}
                            </div>
                        </div>
                    </div>
                  </div>

                    <div className="form-group">
                        <label>Observacion</label>
                        <textarea className="form-control h-auto" name="descripcion" id="descripcion" rows="3" placeholder="Ingrese una observacion"></textarea>
                    </div>

                  <div className="form-group">
                    <label>Estado</label>
                    <select
                      className="form-control select2"
                      style={{ width: "100%" }}
                      name="estado"
                    >
                      <option value="selected">Asignada</option>
                      <option>Finalizada</option>
                      <option>Cancelada</option>
                      <option>Reagendada</option>
                    </select>
                  </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                    <Link to="/citas">
                        <button type="button" className="btn btn-secondary">Atras</button>
                    </Link>
                    <button type="submit" className="btn btn-primary ml-2">
                        Editar
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

export default EditarCita