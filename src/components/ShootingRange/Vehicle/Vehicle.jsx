import { useState } from "react";
import FireAnimation from "../FireAnimation/FireAnimation";
import styles from './Vehicle.module.scss';

const Vehicle = ({data}) => {
    const [target, setTarget] = useState(null);

    const handleClick = () => {
        setTarget(data.id)
    }

    return (
        <li className={styles.Vehicle}>
            {target === data.id && (
                <FireAnimation />
            )}
            <img src={data.img} alt="vehicle" />
            <div className={styles.VehicleTarget}  onClick={handleClick}></div>
        </li>
    );
}

export default Vehicle;