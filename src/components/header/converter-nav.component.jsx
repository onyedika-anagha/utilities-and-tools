import { NavLink, useLocation } from "react-router-dom";

const ConverterNav = () => {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-tabs capsuled" role="tablist" style={{ zIndex: 2 }}>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive && pathname === "/converter"
              ? "nav-link active"
              : "nav-link"
          }
          to="/converter"
        >
          Length
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/converter/temperature"
        >
          Temperature
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/converter/area"
        >
          Area
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/converter/volume"
        >
          Volume
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/converter/weight"
        >
          Weight
        </NavLink>
      </li>
    </ul>
  );
};

export default ConverterNav;
