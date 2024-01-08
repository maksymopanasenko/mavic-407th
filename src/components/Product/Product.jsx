import styles from './Product.module.scss';
import mavic from '../../assets/images/mavic.png';
import Container from '../Container/Container';
import Title from '../Title/Title';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

const Product = () => {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();

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
                    <Title text={t('mavic.title')} light />
                    <div className={styles.ProductAdvantages}>
                        <p className={styles.ProductAdvantage}>{t('mavic.advantage-1')}</p>
                        <p className={styles.ProductAdvantage}>{t('mavic.advantage-2')}</p>
                    </div>
                    <div className={styles.ProductArch}>
                        <div className={styles.ProductItem}>
                            <img src={mavic} alt="mavic3" />
                            <span>Mavic 3T</span>
                        </div>
                    </div>
                    <div className={styles.ProductAdvantages}>
                        <p className={styles.ProductAdvantage}>{t('mavic.advantage-3')}</p>
                        <p className={styles.ProductAdvantage}>{t('mavic.advantage-4')}</p>
                    </div>
                </div>
            </Container>
            <div className={cn(styles.ProductSoldier, {[styles.ProductSoldierVisible]: visible})}></div>
        </section>
    );
}

export default Product;