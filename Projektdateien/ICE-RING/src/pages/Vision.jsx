import { Outlet, Link } from "react-router-dom";

const Vision = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Status">Status</Link>
          </li>
          <li>
            <Link to="/Fahrzeuge">Fahrzeuge</Link>
          </li>
          <li>
            <Link to="/Infra">Infra</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Vision;
