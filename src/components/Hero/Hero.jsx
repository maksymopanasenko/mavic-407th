import Button from '../Button/Button';
import Container from '../Container/Container';
import heart from '../../assets/images/heart.png';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.Hero}>
            <Container>
                <div className={styles.HeroBody}>
                    <h1 className={styles.HeroTitle}>Eyes in the Sky, Power in the Fight</h1>
                    <div className={styles.HeroGoal}>
                        <h3 className={styles.HeroSubtitle}>Military fundraising for the <span className={styles.HeroHighlight}>DJI Mavic 3T</span> drone</h3>
                        <img src={heart} alt="heart" width={50} />
                    </div>
                    <Button text='Donate' />
                </div>
            </Container>
        </section>
    );
}

export default Hero;