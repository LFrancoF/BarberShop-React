import { Link } from "react-router-dom"

function InfoCita() {
  return (
    <>
    <section className="content-header">
        <div className="container-fluid">
        <div className="row mb-2">
            <div className="col-sm-6">
            <h1>Informacion de la cita</h1>
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
                        # 25
                    </h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <dl className="row">
                        <dt className="col-sm-4">Cliente</dt>
                        <dd className="col-sm-8">
                            Gustavo Franco Moron
                        </dd>
                        <dt className="col-sm-4">Barbero</dt>
                        <dd className="col-sm-8">
                            Barbero con Apellido
                        </dd>
                        <dt className="col-sm-4">Fecha</dt>
                        <dd className="col-sm-8">
                            28 de Junio de 2023
                        </dd>
                        <dt className="col-sm-4">Hora</dt>
                        <dd className="col-sm-8">
                            18:00
                        </dd>
                        <dt className="col-sm-4">Observacion</dt>
                        <dd className="col-sm-8">
                            Observacion de la cita
                        </dd>
                        <dt className="col-sm-4">Estado</dt>
                        <dd className="col-sm-8">
                            Asignada
                        </dd>
                    </dl>
                </div>
                {/* /.card-body */}
            </div>
            <Link to="/citas">
                <button type="button" className="btn btn-primary">Cerrar</button>
            </Link>
        </div>
    </section>
    </>
  );
}

export default InfoCita