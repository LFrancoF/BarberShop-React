import { deleteCitaRequest } from "../../api/citas.js"

function ModalDanger({idCita, refreshList}) {

  const deleteCita = async () => {
    try {
      await deleteCitaRequest(idCita)
      refreshList()
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <div className="modal fade" id="modal-danger">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Eliminar Cita</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">X</span>
              </button>
            </div>
            <div className="modal-body">
              <p>¿Esta seguro que desea eliminar todo el registro e historial de esta cita?</p>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
          <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={deleteCita}>Si</button>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    );
}

export default ModalDanger