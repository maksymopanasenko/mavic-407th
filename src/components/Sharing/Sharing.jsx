import styles from './Sharing.module.scss';
import shevron from '../../assets/images/shevron.png';
import Container from '../Container/Container';
import { useState } from 'react';
import Button from '../Button/Button';

import { FaCheck } from 'react-icons/fa6';

const Sharing = () => {
    const [isCopied, setIsCopied] = useState(false);
    const currentUrl = window.location.href;

    const copyToClipboard = () => {
        if (isCopied) return;

        navigator.clipboard
            .writeText(currentUrl)
            .then(() => {
                setIsCopied(true);

                setTimeout(() => {
                    setIsCopied(false);
                }, 3000);
            })
            .catch(err => {
                console.error(`Failed to copy: ${err}`);
            });
    };

    const btnText = isCopied ? <span>Copied {<FaCheck />}</span> : "Copy the link";
    return (
        <section className={styles.Sharing}>
            <Container>
                <h2 className={styles.SharingTitle}>Help others learn about our fundrising!</h2>
                <div className={styles.SharingBody}>
                    <img src={shevron} alt="warriors" /> 
                    <div className={styles.SharingInfo}>
                        <p className={styles.SharingText}>
                            Please share the link to our charity fundrising on social media.<br/> Your help can bring the end of the war closer or save the lives of our heroes!
                        </p>
                        <Button text={btnText} onClick={copyToClipboard}/>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Sharing;