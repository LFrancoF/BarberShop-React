import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "./context/authContext";

function App() {

  const { user } = useAuth()

  return  user == null ? <Navigate to="/login" /> : (
    <div className="wrapper">

      {/* Preloader }
      <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__shake"
          src="adminlte-react/dist/img/SLogo.png"
          alt="SLogo"
          height="60"
          width="60"
        />
      </div>{ Preloader */}

      <Header />

      <Sidebar />

      <div className="content-wrapper">
        <Outlet />
      </div>

      <Footer />

      <aside className="control-sidebar control-sidebar-dark"></aside>
    </div>
  );
}

export default App
