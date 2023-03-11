import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

export default function Layout() {
  return (
    <main>
        <NavBar/>
        <section>
            <Outlet />
        </section>
    </main>
  );
}
