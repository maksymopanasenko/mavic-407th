import { useState } from "react";
import { Button, ButtonLink } from "../Button/Button";
import styles from './Popup.module.scss';
import cn from 'classnames';

const Popup = ({ isActive, onSetActive }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setTimeout(() => {
            setCount(c => c + 1);
        }, 1000);
        onSetActive();
    }

    return (
        <div className={cn(styles.Popup, { [styles.PopupActive]: isActive })}>
            <h5 className={styles.PopupHeading}>Good job!</h5>
            <div className={styles.PopupControls}>
                <ButtonLink text="Donate now" />
                {count < 2 && (
                    <Button text="Destroy more" onClick={handleClick} />
                )}
            </div>
        </div>
    );
}

export default Popup;