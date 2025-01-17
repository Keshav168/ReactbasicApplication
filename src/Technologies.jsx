import { Link, Outlet } from "react-router-dom";

function Technologies() {
  return (
    <div className=" py-4 w-100">
      <ul className="nav justify-content-center fs-3">
        <li className="nav-item">
          <Link className="nav-link text-primary" to="java">
            Java
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary" to="node">
            Node
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary" to="vue">
            Vue
          </Link>
        </li>
      </ul>
      {/*placeholder for selected components */}
      <Outlet />
    </div>
  );
}

export default Technologies;
