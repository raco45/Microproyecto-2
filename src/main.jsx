import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'

import { BUSCADOR_URL, DETALLE_URL, INICIO_URL, LOGIN_URL, REGISTER_URL } from './Constants/urls'
import './index.css'
import Buscador from './Pages/Buscador/Buscador'
import Detalle from './Pages/Detalle/Detalle'
import Inicio from './Pages/Inicio/Inicio'
import Login from './Pages/Login/Login'
import Registro from './Pages/Registro/Registro'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
          <Route path={LOGIN_URL} element={<Login/>} ></Route>
          <Route path={REGISTER_URL} element={<Registro/>} ></Route>
          <Route path={INICIO_URL} element={<Inicio/>} ></Route>
          <Route path={DETALLE_URL} element={<Detalle/>} ></Route>
          <Route path={BUSCADOR_URL} element={<Buscador/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)