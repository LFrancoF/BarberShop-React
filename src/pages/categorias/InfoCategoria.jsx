import { Link } from "react-router-dom"

function InfoCategoria() {
    return (
        <>
        <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1>Informacion de la categoria</h1>
                </div>
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item active">Info</li>
                </ol>
                </div>
            </div>
            </div>
            {/* /.container-fluid */}
        </section>
        <section className="content">
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">
                        <i className="fas fa-calendar mr-2" />
                            # 1
                        </h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                        <dl className="row">
                            <dt className="col-sm-4">Nombre</dt>
                            <dd className="col-sm-8">
                                Cortes de Cabello
                            </dd>
                            <dt className="col-sm-4">Observacion</dt>
                            <dd className="col-sm-8">
                                Observacion de la categoria
                            </dd>
                        </dl>
                    </div>
                    {/* /.card-body */}
                </div>
                <Link to="/categorias">
                    <button type="button" className="btn btn-primary">Cerrar</button>
                </Link>
            </div>
        </section>
        </>
      );
}

export default InfoCategoria