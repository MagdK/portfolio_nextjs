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
            <div className={styles.nav_container}>
                <a href="#top">
                    <h2 className={styles.logo_container}>m<span>.</span></h2>
                </a>
                <ul className={styles.menu_container}>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about_section">About</a></li>
                    <li><a href="#work_section">Work</a></li>
                    <li><a href="#contact_section">Contact</a></li>
                </ul>
                {/* <div className={styles.social_icons_container}>
                    <a href="https://www.linkedin.com/in/magda-kovacs/"  className={styles.social_icon} target="_blank" rel="noreferrer">
                        <Image src="/linkedin.svg" alt="LinkedIn logo" width="24" height="24" className={styles.social_icon_linkedin}/>
                    </a>
                    <a href="https://github.com/MagdK" className={styles.social_icon} target="_blank" rel="noreferrer" >
                        <Image src="/github.svg" alt="Github logo" href="https://github.com/MagdK" targer="_blank" width="24" height="24"/>
                    </a>
                </div> */}
            </div>
        </div>
    )
}

export default Navigation;