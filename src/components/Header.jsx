import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {

  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () =>{
    logout()
    navigate('/login')
  }

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link"
            data-widget="pushmenu"
            to="#"
            role="button"
          >
            <i className="fas fa-bars" />
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="home" className="nav-link">
            Inicio
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="profile" className="nav-link">
            Perfil
          </Link>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Navbar Search */}
        <li className="nav-item">
          <Link
            className="nav-link"
            data-widget="navbar-search"
            to="#"
            role="button"
          >
            <i className="fas fa-search" />
          </Link>
          <div className="navbar-search-block">
            <form className="form-inline">
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search" />
                  </button>
                  <button
                    className="btn btn-navbar"
                    type="button"
                    data-widget="navbar-search"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            data-widget="fullscreen"
            to="#"
            role="button"
          >
            <i className="fas fa-expand-arrows-alt" />
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" data-toggle="dropdown" to="#">
            <FontAwesomeIcon icon={faBars} />
          </Link>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">Opciones</span>
            <div className="dropdown-divider" />
            <Link to="/profile" className="dropdown-item">
              <i className="fas fa-file mr-2" /> Mi Perfil
            </Link>
            <div className="dropdown-divider" />
            <div to="" className="dropdown-item dropdown-footer">
              <button style={{border: "none", backgroundColor: "transparent"}} onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
