import { deleteServiceRequest } from "../../api/servicios.js"

function ModalDanger({idService, refreshList}) {

  const deleteService = async () => {
    try {
      await deleteServiceRequest(idService)
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
              <h4 className="modal-title">Eliminar Servicio</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>¿Esta seguro que desea eliminar este servicio?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={deleteService}>Si</button>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    );
}

export default ModalDanger