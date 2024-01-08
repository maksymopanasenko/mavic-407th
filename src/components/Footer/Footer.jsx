import Container from '../Container/Container';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <Container>
                <p className={styles.FooterText}>
                    <span>Developed by <a href="https://github.com/maksymopanasenko" className={styles.FooterLink}>Maksym Opanasenko</a> </span>
                    <span>© All rights reserved</span>
                </p>
            </Container>
        </footer>
    );
}

export default Footer;