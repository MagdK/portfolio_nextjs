import styles from './Navigation.module.scss';
import React, { useState, useEffect } from 'react';


const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const closeSidebar = () => {setShowSidebar(false)};

  return (
      <header className={styles.header}>
          <div className={styles.logo}>
            <a href="#top">
              <h2 className={styles.logo_container}>m<span>.</span></h2>
            </a>
          </div>
          <div className={styles.navigation}>
            <input className={styles.toggle_menu} type="checkbox" checked={showSidebar} onChange={() => {setShowSidebar(!showSidebar)}}/>
            <div className={styles.hamburger}></div>
            <ul className={styles.menu}>
              <li><a href="#top" onClick={closeSidebar}>Home</a></li>
              <li><a href="#about_section" onClick={closeSidebar}>About</a></li>
              <li><a href="#work_section" onClick={closeSidebar}>Work</a></li>
              <li><a href="#contact_section" onClick={closeSidebar}>Contact</a></li>
            </ul>
          </div>
      </header>
  )
}

export default Navigation;
