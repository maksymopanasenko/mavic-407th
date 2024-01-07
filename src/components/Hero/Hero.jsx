import Button from '../Button/Button';
import Container from '../Container/Container';
import heart from '../../assets/images/heart.png';
import styles from './Hero.module.scss';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section className={styles.Hero}>
            <Container>
                <div className={styles.HeroBody}>
                    <h1 className={styles.HeroTitle}>Eyes in the Sky,<br /> Power in the Fight</h1>
                    <div className={styles.HeroGoal}>
                        <h3 className={styles.HeroSubtitle}>
                            Military fundraising for the
                            <Link
                                className={styles.HeroHighlight}
                                to="product"
                                duration={500}
                                aria-label="Move to section"
                            >
                                DJI Mavic 3T
                            </Link>
                            drone</h3>
                        <img src={heart} alt="heart" width={50} />
                    </div>
                    <Button text='Donate' />
                </div>
            </Container>
        </section>
    );
}

export default Hero;