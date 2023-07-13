import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Se ha producido un error inesperado</p>
        <p>
          <i>Error de Pagina: {error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}