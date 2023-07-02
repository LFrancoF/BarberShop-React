import { Link } from "react-router-dom"

function EditarCategoria() {

    const handleSubmit = e => {
        e.preventDefault()
        console.log("editando categoria")
        
    }

    return (
        <>
        <section className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-6">
                <h1>Editar categoria : Nombre categoria</h1>
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
                <h3 className="card-title">Informacion de la categoria</h3>
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
                        placeholder="Ingrese el nombre de la categoria"
                    />
                    </div>
                    <div class="form-group">
                        <label>Descripcion</label>
                        <textarea className="form-control h-auto" name="descripcion" id="descripcion" rows="3" placeholder="Describa la categoria"></textarea>
                    </div> 
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                    <Link to="/categorias" className='mr-2'>
                      <button type="button" className="btn btn-secondary">Atras</button>
                    </Link>
                    <button type="submit" className="btn btn-primary" >
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

export default EditarCategoria