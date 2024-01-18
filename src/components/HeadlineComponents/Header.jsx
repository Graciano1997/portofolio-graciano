import styles from '../../style/Header.module.css';

const Header = () => <header className={styles.headersContiner}>
  <h1 className="headline-primary">Hey there <div className={styles.shakeHand}>👋</div>.I’m Graciano.</h1>
  <h1 className="headline-secondary">A full-Stack Web Developer</h1>
</header>

export default Header;