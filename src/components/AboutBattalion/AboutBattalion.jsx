import styles from './AboutBattalion.module.scss';
import soldier from '../../assets/images/soldier.webp';
import camo from '../../assets/images/camo.webp';
import drone from '../../assets/images/drone.webp';
import warriors from '../../assets/images/407rifle.webp';
import TextSection from './TextSection/TextSection';
import Container from '../Container/Container';
import Title from '../Title/Title';
import { useTranslation } from 'react-i18next';

const AboutBattalion = () => {
    const { t } = useTranslation();

    return (
        <section id='about' className={styles.AboutBattalion}>
            <Container>
                <Title text={t('about.title')} />
                <div className={styles.AboutBattalionIntro}>
                    <img src={warriors} alt="warriors" />
                    <span>{t('about.label')}</span>
                </div>
                <TextSection img={soldier}>
                    {t('about.text-1')}
                    <a href='https://g.co/kgs/61vN8qJ' className={styles.AboutBattalionlink}>{t('about.city-1')}</a>
                    {t('about.text-2')}
                </TextSection>
                <TextSection img={drone} isReversed>
                    {t('about.text-3')}
                    <a href='https://g.co/kgs/61vN8qJ' className={styles.AboutBattalionlink}>{t('about.city-2')}</a>
                    {t('about.text-4')}
                    <a href='https://g.co/kgs/61vN8qJ' className={styles.AboutBattalionlink}>{t('about.city-3')}</a>
                    {t('about.text-5')}
                </TextSection>
                <TextSection img={camo}>
                    {t('about.text-6')}
                </TextSection>
            </Container>
        </section>
    );
}

export default AboutBattalion;