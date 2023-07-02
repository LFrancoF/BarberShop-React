import { Helmet } from 'react-helmet-async'
import { Link } from "react-router-dom"

function InfoServicio() {
  return (
    <>
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Detalles del servicio</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                Home
              </li>
              <li className="breadcrumb-item active">Detalles</li>
            </ol>
          </div>
        </div>
      </div>
      {/* /.container-fluid */}
    </section>

    <section className="content">
    {/* Default box */}
    <div className="card card-solid">
        <div className="card-body">
          <div className="d-flex justify-content-end">
            <Link to="/servicios" className="ml-auto mr-2 mt-2">
                <button type="button" className="btn btn-secondary">Atras</button>
            </Link>
          </div>
        <div className="row">
            <div className="col-12 col-sm-6">
            <h3 className="d-inline-block d-sm-none">Servicio Review</h3>
            <div className="col-12">
                <img src="/adminlte-react/dist/img/servicio5.jpg" className="product-image" alt="Product Image" />
            </div>
            <div className="col-12 product-image-thumbs">
                <div className="product-image-thumb active"><img src="/adminlte-react/dist/img/servicio5.jpg" alt="Product Image" /></div>
            </div>
            </div>
            <div className="col-12 col-sm-6">
            <h3 className="my-3">Peinado hacia atras</h3>
            <p>
                Aqui se describe el servicio con toda la informacion detallada del mismo,
                detalles de cada procedimiento con una clara especificacion si es necesario,
                para entender todo el corte, peinado o afeitado.
            </p>
            <hr />
            <h4 className="mt-3">Duracion <small>aproximada del servicio</small></h4>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-default text-center">
                    <input type="radio" name="color_option" id="color_option_b1" autoComplete="off" />
                    <span className="text-xl">00</span>
                    <br />
                    horas
                </label>
                <label className="btn btn-default text-center">
                    <input type="radio" name="color_option" id="color_option_b2" autoComplete="off" />
                    <span className="text-xl">30</span>
                    <br />
                    minutos
                </label>
            </div>
            <div className="bg-gray py-2 px-3 mt-4">
                <h2 className="mb-0">
                Bs 80.00
                </h2>
                <h4 className="mt-0">
                <small>Precio </small>
                </h4>
            </div>
            <div className="mt-4">
                <Link to="/citas/crear">
                  <div className="btn btn-primary btn-lg btn-flat">
                    <i className="fas fa-book fa-lg mr-2" />
                    Agendar cita
                  </div>
                </Link>
            </div>
            </div>
        </div>
        </div>
        {/* /.card-body */}
    </div>
    {/* /.card */}
    </section>
    <Helmet>
        <script src="/adminlte-react/product-images.js" id="usuariosScript"> 
        </script>
    </Helmet>
</>
  );
}

export default InfoServicio