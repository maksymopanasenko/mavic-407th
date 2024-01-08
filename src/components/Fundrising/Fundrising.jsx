import styles from './Fundrising.module.scss';
import map from '../../assets/images/map.png';
import Container from '../Container/Container';
import Title from '../Title/Title';
import Button from '../Button/Button';

const Fundrising = () => {
    return (
        <section id='fundrising' className={styles.Fundrising}>
            <Container>
                <Title text={<span>Your contribution to the {<img src={map} alt='map' className={styles.FundrisingImg} />} victory</span>} />
                <div className={styles.FundrisingInfo}>
                    <div className={styles.FundrisingHolder}>
                        <p className={styles.FundrisingLabel}>Already collected: <span className={styles.FundrisingAmount}>{0} EUR</span></p>
                        <span className={styles.FundrisingPercent}>100%</span>
                    </div>
                    <div className={styles.FundrisingBar}>
                        <div className={styles.FundrisingProgress}></div>
                    </div>
                    <div className={styles.FundrisingHolder}>
                        <span className={styles.FundrisingPercent}><span>{0}%</span></span>
                        <p className={styles.FundrisingLabel}>Target amount: <span className={styles.FundrisingAmount}>2500 EUR</span></p>
                    </div>

                    <div className={styles.FundrisingSupport}>
                        <p>Support the 407th battalion, help Ukraine defend itself</p>
                        <Button text='Support' />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Fundrising;