import { useTranslation } from 'react-i18next';
import Container from '../Container/Container';
import styles from './Footer.module.scss';

const Footer = () => {    
    const { t } = useTranslation();

    return (
        <footer className={styles.Footer}>
            <Container>
                <p className={styles.FooterText}>
                    <span>{t('footer.text-1')} <a href="https://github.com/maksymopanasenko" className={styles.FooterLink}>Maksym Opanasenko</a> </span>
                    <span>© {t('footer.text-2')}</span>
                </p>
            </Container>
        </footer>
    );
}

export default Footer;