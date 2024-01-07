import tank from '../../assets/images/tank.png';
import airplane from '../../assets/images/airplane.png';
import ship from '../../assets/images/ship.png';

import styles from './ShootingRange.module.scss';
import Container from '../Container/Container';
import FireAnimation from './FireAnimation/FireAnimation';
import Vehicle from './Vehicle/Vehicle';
import Popup from '../Popup/Popup';
import { useState } from 'react';

const ShootingRange = () => {
    const [isActive, setIsActive] = useState(false);

    const vehicles = [
        { id: 1, img: tank },
        { id: 2, img: airplane },
        { id: 3, img: ship }
    ];

    const handleActive = () => setIsActive(ia => !ia);

    return (
        <div className={styles.ShootingRange}>
            <Container>
                <div className={styles.ShootingRangeBody}>
                    <h2 className={styles.ShootingRangeTitle}>Send them to hell!</h2>
                    <ul className={styles.ShootingRangeVehicles}>
                        {
                            vehicles.map(vehicle => (
                                <Vehicle key={vehicle.id} data={vehicle} isActive={isActive} onSetActive={handleActive}/>
                            ))
                        }
                    </ul>
                    <Popup isActive={isActive} onSetActive={handleActive}/>
                </div>
            </Container>
        </div>
    );
}

export default ShootingRange;