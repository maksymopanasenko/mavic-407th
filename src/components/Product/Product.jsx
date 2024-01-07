import styles from './Product.module.scss';
import mavic from '../../assets/images/mavic.png';
import Container from '../Container/Container';

const Product = () => {
    return (
        <section id='product' className={styles.Product}>
            <Container>
                <div className={styles.ProductBody}>
                    <h2 className={styles.ProductTitle}>Mavic 3T advantages on the battlefield</h2>
                    <div className={styles.ProductAdvantages}>
                        <p className={styles.ProductAdvantage}>Reconnaissance and surveillance</p>
                        <p className={styles.ProductAdvantage}>Targeting and bombing</p>
                    </div>
                    <div className={styles.ProductArch}>
                        <div className={styles.ProductItem}>
                            <img src={mavic} alt="mavic3" />
                            <span>Mavic 3T</span>
                        </div>
                    </div>
                    <div className={styles.ProductAdvantages}>
                        <p className={styles.ProductAdvantage}>Search and rescue</p>
                        <p className={styles.ProductAdvantage}>Control of the front line</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Product;