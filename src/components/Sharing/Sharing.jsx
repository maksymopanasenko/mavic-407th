import styles from './Sharing.module.scss';
import shevron from '../../assets/images/shevron.webp';
import Container from '../Container/Container';
import { useState } from 'react';
import { Button } from '../Button/Button';

import { FaCheck } from 'react-icons/fa6';
import Title from '../Title/Title';
import { useTranslation } from 'react-i18next';

const Sharing = () => {
    const [isCopied, setIsCopied] = useState(false);
    const { t } = useTranslation();
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

    const btnText = isCopied ? <span>{t('share.copied')} {<FaCheck />}</span> : `${t('share.link')}`;
    return (
        <section className={styles.Sharing}>
            <Container>
                <Title text={t('share.title')} />
                <div className={styles.SharingBody}>
                    <img src={shevron} alt="warriors" />
                    <div className={styles.SharingInfo}>
                        <p className={styles.SharingText}>
                            {t('share.text-1')}
                            <br />
                            {t('share.text-2')}
                        </p>
                        <Button text={btnText} onClick={copyToClipboard} />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Sharing;