import { deleteClientRequest } from "../../api/clientes.js"

function ModalDanger({idClient, refreshList}) {

  const deleteClient = async () => {
    try {
      await deleteClientRequest(idClient)
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
            <h4 className="modal-title">Eliminar Cliente</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">x</span>
            </button>
          </div>
          <div className="modal-body">
            <p>¿Esta seguro que desea eliminar el registro de este cliente?</p>
          </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={deleteClient}>Si</button>
          </div>
        </div>
        {/* /.modal-content */}
      </div>
      {/* /.modal-dialog */}
    </div>
  );
}

export default ModalDanger