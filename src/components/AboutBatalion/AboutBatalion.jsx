import styles from './AboutBatalion.module.scss';
import soldier from '../../assets/images/soldier.webp';
import camo from '../../assets/images/camo.jpg';
import drone from '../../assets/images/drone.webp';
import TextSection from './TextSection/TextSection';
import Container from '../Container/Container';

const AboutBatalion = () => {
    return (
        <section id='about' className={styles.AboutBatalion}>
            <Container>
                <h2 className={styles.AboutBatalionTitle}>About heroes from 407th</h2>
                <TextSection img={soldier}>
                    The 45th Battalion, 3rd Company of the Armed Forces of Ukraine stands as a symbol of unwavering bravery and dedication in the face of adversity. In the ongoing conflict, this valiant unit has emerged as a formidable force, playing a pivotal role in the defense of the city of Avdiivka against Russian invaders.
                </TextSection>
                <TextSection img={drone} isReversed>
                    Comprising a group of highly trained and committed individuals, the 45th Battalion, 3rd Company exemplifies the spirit of sacrifice and duty to protect the sovereignty of Ukraine. The soldiers of this battalion display exceptional courage as they confront the challenges of war, standing tall to safeguard not only the territorial integrity of their nation but also the lives of the civilian population in Avdiivka.
                </TextSection>
                <TextSection img={camo}>
                    The 45th Battalion, 3rd Company of the Armed Forces of Ukraine stands as a symbol of unwavering bravery and dedication in the face of adversity. In the ongoing conflict, this valiant unit has emerged as a formidable force, playing a pivotal role in the defense of the city of Avdiivka against Russian invaders.
                </TextSection>
            </Container>
        </section>
    );
}

export default AboutBatalion;