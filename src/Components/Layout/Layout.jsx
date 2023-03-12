import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserContextProvider } from '../../Contexts/userContext';
import NavBar from '../NavBar/NavBar'

export default function Layout() {
  return (
    <main>

      <UserContextProvider>

        <NavBar/>
        <section>
            <Outlet />
        </section>
        
      </UserContextProvider>
    </main>
  );
}
