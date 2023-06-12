import { useEffect } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { faUsers, faScissors, faList, faCamera, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {

  const {user} = useAuth()

  /*Hook para activar los treeviews*/
  useEffect(() => {
    const trees = window.$('[data-widget="treeview"]');
    trees.Treeview('init');
    }, []);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="home" className="brand-link">
        <img
          src="adminlte-react/dist/img/SLogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Classic BarberShop</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="adminlte-react/dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <Link to="profile" className="d-block">
              {user.name} {user.lastname}
            </Link>
          </div>
        </div>
        {/* SidebarSearch Form */}
        
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            
            <NavItem title="Clientes" route="clientes" icon={faUsers}/>
            <NavItem title="Barberos" route="especialistas" icon={faUsers}/>
            <NavItem title="Servicios" route="servicios" icon={faScissors} />
            <NavItem title="Categorias" route="categorias" icon={faList}/>
            <NavItem title="Recomendaciones" route="recomendaciones" icon={faCamera}/>
            <NavItem title="Citas" route="citas" icon={faCalendarCheck}/>
            
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}

export default Sidebar