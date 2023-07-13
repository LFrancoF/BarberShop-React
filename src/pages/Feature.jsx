
function Feature({rol, pref, esp}) {
  if (rol == "Barbero"){
    return (
      <>
        <strong>
        <i className="far fa-file-alt mr-1" /> Especialidad
        </strong>
        <p className="text-muted">
            {esp ?? "Sin especialidad"}
        </p>
        <hr />
      </>
    )
  }

  if (rol == "Cliente"){
    return (
      <>
        <strong>
        <i className="far fa-file-alt mr-1" /> Preferencia
        </strong>
        <p className="text-muted">
            {pref ?? "Sin preferencia"}
        </p>
        <hr />
      </>
    )
  }
  
  return (<></>)
  
  
}

export default Feature