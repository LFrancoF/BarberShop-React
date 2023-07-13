import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getCitaRequest } from "../../api/citas.js"

function InfoCita() {

    const [citaData, setCitaData] = useState({
        idCita: "",
        fecha: "",
        hora: "",
        cliente: "",
        barbero: "",
        servicio: "",
        costo: "",
        nota: "",
        estado: "",
        form: null
    })

    const params = useParams()

    useEffect(() => {
        async function cita(){
        if (params.id){
            const res = await getCitaRequest(params.id)
            const fecha = new Date(res.data.fecha)
            setCitaData({
                idCita: res.data.idCita,
                fecha: fecha.toISOString().split('T')[0],
                hora: res.data.hora.slice(0,5),
                cliente: res.data.cliente,
                barbero: res.data.barbero,
                servicio: res.data.servicio,
                costo: res.data.costo,
                nota: res.data.nota,
                estado: res.data.estado,
                form: res.data.form_recomendacion
            })
        }
        }
        cita()
    }, [])

    const navigate = useNavigate()

    return (
        <>
        <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1>Informacion de la cita </h1>
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
                            # {citaData.idCita}
                        </h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                        <dl className="row">
                            <dt className="col-sm-4">Cliente</dt>
                            <dd className="col-sm-8">
                                {citaData.cliente}
                            </dd>
                            <dt className="col-sm-4">Barbero</dt>
                            <dd className="col-sm-8">
                                {citaData.barbero}
                            </dd>
                            <dt className="col-sm-4">Fecha</dt>
                            <dd className="col-sm-8">
                                {citaData.fecha}
                            </dd>
                            <dt className="col-sm-4">Hora</dt>
                            <dd className="col-sm-8">
                                {citaData.hora}
                            </dd>
                            <dt className="col-sm-4">Servicio</dt>
                            <dd className="col-sm-8">
                                {citaData.servicio}
                            </dd>
                            <dt className="col-sm-4">Nota</dt>
                            <dd className="col-sm-8">
                                {citaData.nota}
                            </dd>
                            <dt className="col-sm-4">Estado</dt>
                            <dd className="col-sm-8">
                                {citaData.estado}
                            </dd>
                            <dt className="col-sm-4">Form. Recomendacion</dt>
                            <dd className="col-sm-8">
                                {citaData.form ?? 'No se uso recomendacion en esta cita'}
                            </dd>
                        </dl>
                    </div>
                    {/* /.card-body */}
                </div>
                <button type="button" className="btn btn-primary"
                        onClick={()=> navigate(-1)}>Atras</button>
            </div>
        </section>
        </>
    );
}

export default InfoCita