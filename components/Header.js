import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.brand}>YourBrand</div>

      <nav className={styles.desktopNav}>
        <a>Home</a>
        <a>Shop</a>
        <a>Contact</a>
        <button className={styles.cta}>Sign in</button>
      </nav>

      <button className={styles.mobileToggle} onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && (
        <div className={styles.mobileMenu}>
          <a onClick={() => setOpen(false)}>Home</a>
          <a onClick={() => setOpen(false)}>Shop</a>
          <a onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}