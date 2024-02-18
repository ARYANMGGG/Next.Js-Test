// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';


const Navbar = () => {
  return (
    
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link legacyBehavior href="/login"><a className={styles.navLink}>Login</a></Link></li>
        <li className={styles.navItem}><Link legacyBehavior href="/about"><a className={styles.navLink}>About</a></Link></li>
        <li className={styles.navItem}><Link legacyBehavior href="/contact-us"><a className={styles.navLink}>Contact Us</a></Link></li>
        <li className={styles.navItem}><Link legacyBehavior href="/product"><a className={styles.navLink}>Product</a></Link></li>
        <li className={styles.navItem}><Link legacyBehavior href="/blog2"><a className={styles.navLink}>Blog2</a></Link></li>
        <li className={styles.navItem}><Link legacyBehavior href="/blog3"><a className={styles.navLink}>Blog3</a></Link></li>
      </ul>
    </nav>
    
  );
}
export default Navbar;
