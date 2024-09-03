import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <NavLink className="navbar-brand">Company Logo</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/players" className="nav-link">
                  Players
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/report" className="nav-link">
                  Report
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
