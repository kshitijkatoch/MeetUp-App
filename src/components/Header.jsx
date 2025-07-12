import { NavLink } from "react-router-dom";

export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid container border-bottom pb-2">
            <NavLink
              to="/"
              className="navbar-brand"
              style={{
                fontFamily: "Pacifico, cursive",
                color: "#f64060",
                fontSize: "1.5rem",
              }}
            >
              MeetUp
            </NavLink>
            <div className="" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="input-group-text">
                      <i className="bi bi-search"></i>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
