import React from 'react'
import ReactDOM from 'react-dom/client'
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
      element: <Login />
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
              path: "usuarios/ver/:id",
              element: <InfoUsuario/>,
          },
          {
              path: "usuarios/editar/:id",
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
          path: "clientes/ver/:id",
          element: <InfoCliente/>,
      },
      {
          path: "clientes/editar/:id",
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
              path: "barberos/ver/:id",
              element: <InfoBarbero/>,
          },
          {
              path: "barberos/editar/:id",
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
          path: "servicios/ver/:id",
          element: <InfoServicio/>,
      },
      {
          path: "servicios/editar/:id",
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
              path: "categorias/ver/:id",
              element: <InfoCategoria/>,
          },
          {
              path: "categorias/editar/:id",
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
              path: "citas/editar/:id",
              element: <EditarCita/>,
          },
          {
              path: "citas/ver/:id",
              element: <InfoCita/>,
          },
      {
          path: "profile",
          element: <Profile/>,
      },
      ],
      errorElement: <ErrorPage/>
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
