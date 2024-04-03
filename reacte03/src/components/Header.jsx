
import styles from './Header.modules.css';
import imgLogo from '../assets/reactlogo.png';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={imgLogo} alt='React Logo Header' />
      <strong>RPV react posts</strong>
    </header>
  );
}
