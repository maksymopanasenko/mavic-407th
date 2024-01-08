import { ButtonLink } from '../Button/Button';
import Container from '../Container/Container';
import heart from '../../assets/images/heart.png';
import styles from './Hero.module.scss';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.Hero}>
            <Container>
                <div className={styles.HeroBody}>
                    <h1 className={styles.HeroTitle}>{t('hero.title-1')} -<br /> {t('hero.title-2')}</h1>
                    <div className={styles.HeroGoal}>
                        <h3 className={styles.HeroSubtitle}>
                            {t('hero.subtitle-1')}
                            <Link
                                className={styles.HeroHighlight}
                                to="product"
                                duration={500}
                                aria-label="Move to section"
                            >
                                DJI Mavic 3T
                            </Link>
                            {t('hero.subtitle-2')}
                        </h3>
                        <img src={heart} alt="heart" width={50} />
                    </div>
                    <ButtonLink text={t('hero.btn')} />
                </div>
            </Container>
        </section>
    );
}

export default Hero;