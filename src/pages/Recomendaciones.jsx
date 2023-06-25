
function Recomendaciones() {
  return (
    <>
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="card-body">
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
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Generar Recomendaciones</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form>
              <div className="card-body">
                <div className="form-group">
                  <label>Categoria</label>
                  <select
                    className="form-control select2"
                    style={{ width: "100%" }}
                  >
                    <option value="selected">Cortes de Cabello</option>
                    <option>Estetica</option>
                    <option>Tratamientos Faciales</option>
                    <option>Cortes de Barba</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Observacion</label>
                  <textarea className="form-control" rows="3" placeholder="Ingresa alguna nota u observacion"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputFile">Subir fotografia</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="exampleInputFile"
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="exampleInputFile"
                      >
                        Cargar archivo
                      </label>
                    </div>
                    <div className="input-group-append">
                      <span className="input-group-text">Upload</span>
                    </div>
                  </div>
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