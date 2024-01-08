import { useState } from "react";
import { Button, ButtonLink } from "../Button/Button";
import styles from './Popup.module.scss';
import cn from 'classnames';
import { useTranslation } from "react-i18next";

const Popup = ({ isActive, onSetActive }) => {
    const { t } = useTranslation();
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setTimeout(() => {
            setCount(c => c + 1);
        }, 1000);
        onSetActive();
    }

    return (
        <div className={cn(styles.Popup, { [styles.PopupActive]: isActive })}>
            <h5 className={styles.PopupHeading}>{t('game.heading')}</h5>
            <div className={styles.PopupControls}>
                <ButtonLink text={t('game.btn-1')} />
                {count < 2 && (
                    <Button text={t('game.btn-2')} onClick={handleClick} />
                )}
            </div>
        </div>
    );
}

export default Popup;