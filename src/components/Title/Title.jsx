import styles from './Title.module.scss';
import cn from 'classnames';

const Title = ({ text, light }) => {
    return (
        <h2 className={cn(styles.Title, {[styles.TitleLight]: light})}>{text}</h2>
    );
}

export default Title;