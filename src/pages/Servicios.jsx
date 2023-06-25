import { Helmet } from "react-helmet-async"

function Servicios() {
  return (
    <>
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="card-body">
            <h1 style={{fontSize:"40px"}}>Servicios</h1>

            
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Projects</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {/* /.card */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Lista de Servicios o Tratamientos disponibles</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <table id="serviciosTable" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Categoria</th>
                      <th>Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Corte de Pelo Deluxe</td>
                      <td>Corte</td>
                      <td>50.00$</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Arreglo de Barba</td>
                      <td>Tratamiento</td>
                      <td>40.00$</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Afeitado y Arreglo Express</td>
                      <td>Estetica</td>
                      <td>60.00$</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>-</th>
                      <th>-</th>
                      <th>-</th>
                      <th>-</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container-fluid */}
    </section>
    <Helmet>
      <script src="/adminlte-react/datatable.js" id="serviciosScript"> 
      </script>
    </Helmet>
    </>
  )
}

export default Servicios