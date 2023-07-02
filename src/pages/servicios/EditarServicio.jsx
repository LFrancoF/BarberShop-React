import { Link } from "react-router-dom"

function EditarServicio() {

    const handleSubmit = e => {
        e.preventDefault()
        console.log("editando servicio")
        
    }

    return (
        <>
        <section className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-6">
                <h1>Editar servicio : Servicio nombre</h1>
            </div>
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                    Home
                </li>
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
                <h3 className="card-title">Datos del Servicio</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre" id="nombre"
                            placeholder="Ingrese el nombre de la categoria nueva"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="precio">Precio (Bs)</label>
                        <input
                            type="number"
                            className="form-control"
                            name="precio" id="precio"
                            placeholder="Ingrese el precio del servicio"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duracion">Duracion (horas)</label>
                        <input
                            type="number"
                            className="form-control"
                            name="duracion" id="duracion"
                            placeholder="Ingrese la duracion del servicio"
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripcion</label>
                        <textarea className="form-control" name="descripcion" id="descripcion" rows="3" placeholder="Describa la categoria"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Categoria</label>
                        <select
                            className="form-control select2"
                            style={{ width: "100%" }}
                            name="categoria"
                        >
                            <option value="selected">Categoria 1</option>
                            <option>Categoria 2</option>
                            <option>Categoria 3</option>
                        </select>
                    </div>
                    <div className="form-group">
                  <label htmlFor="exampleInputFile">Imagen</label>
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
                        Subir imagen
                      </label>
                    </div>
                  </div>
                </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                    <Link to="/servicios" className="mr-2">
                        <button type="button" className="btn btn-secondary">Atras</button>
                    </Link>
                    <button type="submit" className="btn btn-primary">
                        Guardar
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

export default EditarServicio