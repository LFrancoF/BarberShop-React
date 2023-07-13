import { deleteCategoryRequest } from "../../api/categorias.js"

function ModalDanger({idCategory, refreshList}) {

  const deleteCategory = async () => {
    try {
      await deleteCategoryRequest(idCategory)
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
              <h4 className="modal-title">Eliminar Categoria</h4>
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
              <p>¿Esta seguro que desea eliminar esta categoria?</p>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
          <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={deleteCategory}>Si</button>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    );
}

export default ModalDanger