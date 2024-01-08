import { useState } from "react";
import FireAnimation from "../FireAnimation/FireAnimation";
import styles from './Vehicle.module.scss';

const Vehicle = ({ data, isActive, onSetActive }) => {
    const [target, setTarget] = useState(null);

    const handleClick = () => {
        if (isActive) return;
        setTarget(data.id);
        onSetActive(data.id);
    }

    return (
        <li className={styles.Vehicle}>
            {target === data.id && (
                <FireAnimation />
            )}
            <img src={data.img} alt="vehicle" />
            <div className={styles.VehicleTarget} onClick={handleClick}></div>
        </li>
    );
}

export default Vehicle;