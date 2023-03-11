import React from 'react'
import { Link } from "react-router-dom";
import { BUSCADOR_URL, DETALLE_URL, INICIO_URL, LOGIN_URL, REGISTER_URL } from '../../Constants/urls';
import styles from "./Navbar.module.css";
export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        <li className={`${styles.menuItem} ${styles.menuItemLeft}`}>
          <Link to={INICIO_URL} className={styles.link}>
            <span>Inicio</span>
          </Link>
        </li>
        <li className={`${styles.menuItem} ${styles.menuItemLeft}`}>
          <Link to={DETALLE_URL} className={styles.link}>
            <span>Detalles</span>
          </Link>
        </li>
        <li className={`${styles.menuItem} ${styles.menuItemLeft}`}>
          <Link to={BUSCADOR_URL} className={styles.link}>
            <span>Buscador</span>
          </Link>
        </li>
      </ul>

      
        <ul className={styles.menuList}>
        {/* {!!user && (
          <>
          <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
            <Link to="/profile" className={styles.link}>
              <span>Perfil, {user.name}</span>
            </Link>
          </li>
          <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
            <button type="button" onClick={handleLogout}>
              Salir
              </button>
          </li>
          </>
        )}   */}
            
          

          {/* {!user &&(
              )}  */}
            <>
              <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                <Link to={LOGIN_URL} className={styles.link}>
                  <span>Iniciar sesión</span>
                </Link>
              </li>
              <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                <Link to={REGISTER_URL} className={styles.link}>
                  <span>Registro</span>
                </Link>
              </li>
            </>
          
        </ul>
      
    </nav>
  )
}
