import styles from './Fundrising.module.scss';
import map from '../../assets/images/map.png';
import Container from '../Container/Container';

const Fundrising = () => {
    return (
        <section id='fundrising' className={styles.Fundrising}>
            <Container>
                <h2 className={styles.FundrisingTitle}>Your contribution to the <img src={map} alt='map' /> victory</h2>
                <div className={styles.FundrisingBody}>
                    <div></div>
                    <div className={styles.FundrisingInfo}>
                        <div className={styles.FundrisingHolder}>
                            <p>Already collected: <span className={styles.FundrisingAmount}>0</span> EUR</p>
                            <span><span>100</span>%</span>
                        </div>
                        <div className={styles.FundrisingBar}>
                            <div className={styles.FundrisingProgress}></div>
                        </div>
                        <div className={styles.FundrisingHolder}>
                            <span><span>0</span>%</span>
                            <p>Target amount: <span className={styles.FundrisingAmount}>2500</span> EUR</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Fundrising;