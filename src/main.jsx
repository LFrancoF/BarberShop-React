import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { Usuarios, CrearUsuario, InfoUsuario, EditarUsuario,
        Barberos, CrearBarbero, InfoBarbero, EditarBarbero,
        Clientes, CrearCliente, InfoCliente, EditarCliente,
        Servicios, CrearServicio, InfoServicio, EditarServicio,
        Categorias, CrearCategoria, EditarCategoria, InfoCategoria,
        Citas, CrearCita, EditarCita, InfoCita,
        Recomendaciones, ListaRecomendaciones, InfoRecomendacion,
        ErrorPage, Home, Login, Profile, Register } from './pages/index'

import { AuthProvider } from './context/authContext'

const router = createBrowserRouter([
  {
      path: "/login",
      element: <Login />,
  },
  {
      path: "/register",
      element: <Register />,
  },
  {
      path: "/",
      element: <App />,
      children: [
      {index: true, element: <Home/>},
      {
          path: "home",
          element: <Home/>,
      },
          {
              path: "usuarios",
              element: <Usuarios/>,
          },
          {
              path: "usuarios/crear",
              element: <CrearUsuario/>,
          },
          {
              path: "usuarios/ver",
              element: <InfoUsuario/>,
          },
          {
              path: "usuarios/editar",
              element: <EditarUsuario/>,
          },
      {
          path: "clientes",
          element: <Clientes/>,
      },
      {
          path: "clientes/crear",
          element: <CrearCliente/>,
      },
      {
          path: "clientes/ver",
          element: <InfoCliente/>,
      },
      {
          path: "clientes/editar",
          element: <EditarCliente/>,
      },
          {
              path: "barberos",
              element: <Barberos/>,
          },
          {
              path: "barberos/crear",
              element: <CrearBarbero/>,
          },
          {
              path: "barberos/ver",
              element: <InfoBarbero/>,
          },
          {
              path: "barberos/editar",
              element: <EditarBarbero/>,
          },
      {
          path: "servicios",
          element: <Servicios/>,
      },
      {
          path: "servicios/crear",
          element: <CrearServicio/>,
      },
      {
          path: "servicios/ver",
          element: <InfoServicio/>,
      },
      {
          path: "servicios/editar",
          element: <EditarServicio/>,
      },
          {
              path: "categorias",
              element: <Categorias/>,
          },
          {
              path: "categorias/crear",
              element: <CrearCategoria/>,
          },
          {
              path: "categorias/ver",
              element: <InfoCategoria/>,
          },
          {
              path: "categorias/editar",
              element: <EditarCategoria/>,
          },
      {
          path: "recomendaciones",
          element: <Recomendaciones/>,
      },
      {
          path: "recomendaciones/lista",
          element: <ListaRecomendaciones/>,
      },
      {
          path: "recomendaciones/ver",
          element: <InfoRecomendacion/>,
      },
          {
              path: "citas",
              element: <Citas/>,
          },
          {
              path: "citas/crear",
              element: <CrearCita/>,
          },
          {
              path: "citas/editar",
              element: <EditarCita/>,
          },
          {
              path: "citas/ver",
              element: <InfoCita/>,
          },
      {
          path: "profile",
          element: <Profile/>,
      },
      ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
