import styles from './TextSection.module.scss';
import cn from 'classnames';

const TextSection = ({ children, img, isReversed }) => {
    return (
        <div className={cn(styles.TextSection, { [styles.Reversed]: isReversed })}>
            <img src={img} alt="soldier" />
            <p className={styles.TextSectionDescr}>
                {children}
            </p>
        </div>
    );
}

export default TextSection;