import styles from './Product.module.scss';
import mavic from '../../assets/images/mavic.png';
import Container from '../Container/Container';
import Title from '../Title/Title';
import { useEffect, useState } from 'react';
import cn from 'classnames';

const Product = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const checkpoint = 1500;
        
          if (window.scrollY > checkpoint && window.innerWidth > 1450) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <section id='product' className={styles.Product}>
            <Container>
                <div className={styles.ProductBody}>
                    <Title text='Mavic 3T advantages on the battlefield' light />
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
            <div className={cn(styles.ProductSoldier, {[styles.ProductSoldierVisible]: visible})}></div>
        </section>
    );
}

export default Product;