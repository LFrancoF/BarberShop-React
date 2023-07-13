
function Estado({state}) {

    if (state == "Pendiente") return <span className="badge badge-primary">Pendiente</span>;
    if (state == "Asignado") return <span className="badge badge-success">Asignado</span>;
    if (state == "Cancelado") return <span className="badge badge-danger">Cancelado</span>;
    if (state == "Reagendado") return <span className="badge badge-secondary">Reagendado</span>;

    return <></>;

}

export default Estado