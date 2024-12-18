'use client';

import Link from 'next/link';
import styles from './Navigation.module.scss';
import React, { useState, useEffect } from 'react';


const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const closeSidebar = () => { setShowSidebar(false) };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/#top">
          <h2 className={styles.logo_container}>m<span>.</span></h2>
        </Link>
      </div>
      <div className={styles.navigation}>
        <input className={styles.toggle_menu} type="checkbox" checked={showSidebar} onChange={() => { setShowSidebar(!showSidebar) }} />
        <div className={styles.hamburger}></div>
        <ul className={styles.menu}>
          <li><Link href="/#top" onClick={closeSidebar}>Home</Link></li>
          <li><Link href="/#about_section" onClick={closeSidebar}>About</Link></li>
          <li><Link href="/#work_section" onClick={closeSidebar}>Work</Link></li>
          <li><Link href="/#contact_section" onClick={closeSidebar}>Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Navigation;
