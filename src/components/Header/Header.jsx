import { Link } from 'react-scroll';
import styles from './Header.module.scss';
import Container from '../Container/Container';
import logo from './icons/sign.webp';

const Header = () => {
    return (
        <header className={styles.Header}>
            <Container>
                <div className={styles.HeaderBody}>
                    <Link
                        className={styles.HeaderLink}
                        to="/"
                        duration={500}
                    >
                        <span className={styles.HeaderLogo}>
                            4
                            <img src={logo} alt='logo' width={55} />
                            7
                        </span>
                    </Link>
                    <nav className={styles.HeaderNav}>
                        <ul className={styles.HeaderList}>
                            <li className={styles.HeaderListItem}>
                                <Link
                                    className={styles.HeaderLink}
                                    to="#"
                                    duration={500}
                                    aria-label="#"
                                >
                                    Text1
                                </Link>
                            </li>
                            <li className={styles.HeaderListItem}>
                                <Link
                                    className={styles.HeaderLink}
                                    to="#"
                                    duration={500}
                                    aria-label="#"
                                >
                                    Text2
                                </Link>
                            </li>
                            <li className={styles.HeaderListItem}>
                                <Link
                                    className={styles.HeaderLink}
                                    to="#"
                                    duration={500}
                                    aria-label="#"
                                >
                                    Text3
                                </Link>
                            </li>
                            <li className={styles.HeaderListItem}>
                                <Link
                                    className={styles.HeaderLink}
                                    to="shooting-range"
                                    duration={500}
                                    aria-label="Move to section"
                                >
                                    Shooting range
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;
