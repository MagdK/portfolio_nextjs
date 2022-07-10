import styles from './Navigation.module.scss';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const Navigation = () => {
  /*   const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]); */
  

    return (
        <div className={styles.header_container}>
            <nav className={styles.nav_container}>
              <input id="nav-toggle" type="checkbox"/>
              <a href="#top">
                <h2 className={styles.logo_container}>m<span>.</span></h2>
              </a>
              <ul className={styles.menu_container}>
                <li><a href="#top">Home</a></li>
                <li><a href="#about_section">About</a></li>
                <li><a href="#work_section">Work</a></li>
                <li><a href="#contact_section">Contact</a></li>
              </ul>
              <label className={styles.burger}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </label>
            </nav>
        </div>
    )
}

export default Navigation;