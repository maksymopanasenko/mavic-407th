import tank from '../../assets/images/tank.webp';
import airplane from '../../assets/images/airplane.webp';
import ship from '../../assets/images/ship.webp';

import styles from './ShootingRange.module.scss';
import Container from '../Container/Container';
import Vehicle from './Vehicle/Vehicle';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import Title from '../Title/Title';
import { useTranslation } from 'react-i18next';

const ShootingRange = () => {
    const [isActive, setIsActive] = useState(false);
    const [isFirstShot, setIsFirstShot] = useState(true);
    const [destroyed, setDestroyed] = useState([]);
    const { t } = useTranslation();

    const vehicles = [
        { id: 1, img: tank },
        { id: 2, img: airplane },
        { id: 3, img: ship }
    ];

    const handleActive = (id) => {
        if (destroyed.find(item => id === item)) return;
        setDestroyed(d => [...d, id]);
        setIsActive(ia => !ia);
        setIsFirstShot(false);
    }

    return (
        <section id='shooting-range' className={styles.ShootingRange}>
            <Container>
                <div className={styles.ShootingRangeBody}>
                    <Title text={t('game.title')} light />
                    <ul className={styles.ShootingRangeVehicles}>
                        {
                            vehicles.map(vehicle => (
                                <Vehicle key={vehicle.id} data={vehicle} isActive={isActive} onSetActive={handleActive} />
                            ))
                        }
                    </ul>
                    {isFirstShot && (
                        <p className={styles.ShootingRangeText}>{t('game.text')}</p>
                    )}
                    <Popup isActive={isActive} onSetActive={handleActive} />
                </div>
            </Container>
        </section>
    );
}

export default ShootingRange;