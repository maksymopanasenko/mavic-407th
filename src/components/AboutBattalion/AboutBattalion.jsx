import styles from './AboutBattalion.module.scss';
import soldier from '../../assets/images/soldier.webp';
import camo from '../../assets/images/camo.jpg';
import drone from '../../assets/images/drone.webp';
import warriors from '../../assets/images/407rifle.webp';
import TextSection from './TextSection/TextSection';
import Container from '../Container/Container';
import Title from '../Title/Title';

const AboutBattalion = () => {
    return (
        <section id='about' className={styles.AboutBattalion}>
            <Container>
                <Title text='About heroes from 407th' />
                <div className={styles.AboutBattalionIntro}>
                    <img src={warriors} alt="warriors" />
                    <span>407th Separate Rifle Battalion</span>
                </div>
                <TextSection img={soldier}>
                    The 407th Separate Rifle Battalion, 3rd Company of the Armed Forces of Ukraine stands as a symbol of unwavering bravery and dedication in the face of adversity. In the ongoing conflict, this valiant unit has emerged as a formidable force, playing a pivotal role in the defense of the city of <a href='https://g.co/kgs/61vN8qJ' className={styles.AboutBattalionlink}>Avdiivka</a> against Russian invaders.
                    Comprising a group of highly trained and committed individuals, the 45th Battalion, 3rd Company exemplifies the spirit of sacrifice and duty to protect the sovereignty of Ukraine. The soldiers of this battalion display exceptional courage as they confront the challenges of war, standing tall to safeguard the territorial integrity of their nation.
                </TextSection>
                <TextSection img={drone} isReversed>
                    In the epicenter of conflict, these brave men and women put their lives on the line every day, facing the harsh realities of war with resilience and determination. Their steadfast commitment to the defense of <a href='https://g.co/kgs/61vN8qJ' className={styles.AboutBattalionlink}>Avdiivka</a> reflects the deep-rooted sense of patriotism that drives them to protect their homeland from external threats.
                    The 45th Battalion, 3rd Company's unwavering resolve to defend <a href='https://g.co/kgs/61vN8qJ' className={styles.AboutBattalionlink}>Avdiivka</a> serves as an inspiration to the entire nation. Their sacrifices echo through the annals of Ukrainian history, reminding us all of the indomitable spirit that fuels the armed forces in their quest to secure a peaceful and prosperous future for Ukraine.
                </TextSection>
                <TextSection img={camo}>
                    As they stand guard against the Russian invaders, the members of the 45th Battalion, 3rd Company are not just soldiers; they are the guardians of freedom, the shield that protects the innocent, and the embodiment of Ukraine's determination to resist aggression. Their dedication is a testament to the resilience and strength of the Ukrainian people, who stand united in the face of external threats.
                </TextSection>
            </Container>
        </section>
    );
}

export default AboutBattalion;