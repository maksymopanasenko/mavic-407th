import styles from './TextSection.module.scss';
import cn from 'classnames';

const TextSection = ({ children, img, isReversed }) => {
    return (
        <div className={cn(styles.TextSection, { [styles.Reversed]: isReversed })}>
            <img src={img} alt="soldier" />
            <p className={styles.TextSectionDescr}>
                {children}

                {/* In the crucible of conflict, these brave men and women put their lives on the line every day, facing the harsh realities of war with resilience and determination. Their steadfast commitment to the defense of Avdiivka reflects the deep-rooted sense of patriotism that drives them to protect their homeland from external threats.

                The 45th Battalion, 3rd Company's unwavering resolve to defend Avdiivka serves as an inspiration to the entire nation. Their sacrifices echo through the annals of Ukrainian history, reminding us all of the indomitable spirit that fuels the armed forces in their quest to secure a peaceful and prosperous future for Ukraine.

                As they stand guard against the Russian invaders, the members of the 45th Battalion, 3rd Company are not just soldiers; they are the guardians of freedom, the shield that protects the innocent, and the embodiment of Ukraine's determination to resist aggression. Their dedication is a testament to the resilience and strength of the Ukrainian people, who stand united in the face of external threats.

                In the hearts and minds of the citizens of Avdiivka and beyond, the 45th Battalion, 3rd Company will forever be remembered as heroes who defended their homeland with valor and selflessness. Their story is a testament to the enduring spirit of the Ukrainian Armed Forces and a source of inspiration for generations to come. */}
            </p>
        </div>
    );
}

export default TextSection;