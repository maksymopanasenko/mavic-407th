import styles from './Fundraising.module.scss';
import map from '../../assets/images/map.png';
import Container from '../Container/Container';
import Title from '../Title/Title';
import { ButtonLink } from '../Button/Button';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loader from './Loader/Loader';
import fetchAccountBalance from '../../helpers/fetchData';
import fetchCurrency from '../../helpers/fetchNBU';
import { useTranslation } from 'react-i18next';

const Fundraising = () => {
    const [amount, setAmount] = useState(0);
    const { t } = useTranslation();

    const { data: balance } = useQuery(['accountBalance'], fetchAccountBalance, {
        refetchInterval: 60000,
    });

    useEffect(() => {
        (async () => {
            const euro = await fetchCurrency();
            const result = euro.rate;
            setAmount(Number(result));
        })()
    }, [balance]);

    const mainCalc = balance ? Number((balance / amount).toFixed(2)) : 0;
    const width = balance ? `${Math.floor((mainCalc / (120000 / amount)) * 100)}%` : '0%';
    const percent = balance ? ((mainCalc / (120000 / amount)) * 100) : 0;

    return (
        <section id='fundraising' className={styles.Fundraising}>
            <Container>
                <Title text={<span>{t('fundraising.title-1')}{<img src={map} alt='map' className={styles.FundraisingImg} />}{t('fundraising.title-2')}</span>} />
                <div className={styles.FundraisingInfo}>
                    {
                        balance ? (
                            <>
                                <div className={styles.FundraisingHolder}>
                                    <div className={styles.FundraisingLabel}>
                                        {t('fundraising.collected')}:
                                        <div className={styles.FundraisingCurrency}>
                                            <span className={styles.FundraisingAmount}>{balance ?? 0} UAH</span>
                                            <span className={styles.FundraisingEuro}>({mainCalc} EUR)</span>
                                        </div>
                                    </div>
                                    <span className={styles.FundraisingPercent}>100%</span>
                                </div>
                                <div className={styles.FundraisingBar}>
                                    <div className={styles.FundraisingProgress} style={{ width }}></div>
                                </div>
                                <div className={styles.FundraisingHolder}>
                                    <span className={styles.FundraisingPercent}><span>{(percent).toFixed(2)}%</span></span>
                                    <div className={styles.FundraisingLabel}>
                                        {t('fundraising.target')}:
                                        <div className={styles.FundraisingCurrency}>
                                            <span className={styles.FundraisingAmount}>120 000 UAH</span>
                                            <span className={styles.FundraisingEuro}>({Math.floor(120000 / amount)} EUR)</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <Loader />
                        )
                    }

                    <div className={styles.FundraisingSupport}>
                        <div>
                            <p>{t('fundraising.support')}</p>
                            <p className={styles.FundraisingSupportText}>{t('fundraising.text')}</p>
                        </div>
                        <ButtonLink text={t('fundraising.btn')} />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Fundraising;