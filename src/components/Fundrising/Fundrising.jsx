import styles from './Fundrising.module.scss';
import map from '../../assets/images/map.png';
import Container from '../Container/Container';
import Title from '../Title/Title';
import { ButtonLink } from '../Button/Button';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loader from './Loader/Loader';
import fetchAccountBalance from '../../helpers/fetchData';
import fetchCurrency from '../../helpers/fetchNBU';

const Fundrising = () => {
    const [amount, setAmount] = useState(0);

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
    const width = balance ? `${Math.floor((mainCalc / 2500) * 100)}%` : '0%';
    const percent = balance ? ((mainCalc / 2500) * 100) : 0;

    return (
        <section id='fundrising' className={styles.Fundrising}>
            <Container>
                <Title text={<span>Your contribution to the {<img src={map} alt='map' className={styles.FundrisingImg} />} victory</span>} />
                <div className={styles.FundrisingInfo}>
                    {
                        balance ? (
                            <>
                                <div className={styles.FundrisingHolder}>
                                    <div className={styles.FundrisingLabel}>
                                        Already collected:
                                        <div className={styles.FundrisingCurrency}>
                                            <span className={styles.FundrisingAmount}>{balance ?? 0} UAH</span>
                                            <span className={styles.FundrisingEuro}>({mainCalc} EUR)</span>
                                        </div>
                                    </div>
                                    <span className={styles.FundrisingPercent}>100%</span>
                                </div>
                                <div className={styles.FundrisingBar}>
                                    <div className={styles.FundrisingProgress} style={{ width: width }}></div>
                                </div>
                                <div className={styles.FundrisingHolder}>
                                    <span className={styles.FundrisingPercent}><span>{(percent).toFixed(2)}%</span></span>
                                    <div className={styles.FundrisingLabel}>
                                        Target amount:
                                        <div className={styles.FundrisingCurrency}>
                                            <span className={styles.FundrisingAmount}>105 000 UAH</span>
                                            <span className={styles.FundrisingEuro}>({Math.floor(105000 / amount)} EUR)</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <Loader />
                        )
                    }

                    <div className={styles.FundrisingSupport}>
                        <p>Support the 407th battalion, help Ukraine defend itself</p>
                        <ButtonLink text='Support' />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Fundrising;