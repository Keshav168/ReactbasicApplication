import { useRouteError } from "react-router-dom";

function RoutingError() {
  const routeErr = useRouteError();

  return (
    <div
      className="d-flex justify-content-center align-items-center text-center flex-column"
      style={{ minHeight: "100vh" }}
    >
      <p className="display-4 text-danger">{routeErr.data}</p>
      <p className="lead text-warning fs-1">
        {routeErr.status}- {routeErr.statusText}
      </p>
      <p className="display-4 lead">Something went wrong</p>
    </div>
  );
}

export default RoutingError;
