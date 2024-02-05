import styles from './NavBtn.module.css';

function NavBtn({ children }) {
  return <button className={styles.btn}>{children}</button>;
}

export default NavBtn;
