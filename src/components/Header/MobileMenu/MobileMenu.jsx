import { Link } from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './MobileMenu.module.scss';
import cn from 'classnames';

const MobileMenu = ({ setIsOpenMobileMenu, isOpenMobileMenu }) => {

  return (
    <div
      className={cn(styles.MobileMenu, {[styles.isOpen]: isOpenMobileMenu})}
    >
        <div className={styles.MobileMenuContainer}>
          <button
            className={styles.MobileMenuCLoseBtn}
            type="button"
            onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
          >
            <AiOutlineClose className={styles.closeSvg} size={24} />
          </button>
        </div>
        <nav className={styles.navMobile}>
          <ul className={styles.MobileMenuList}>
            <li className={styles.MobileMenuListItem}>
              <Link
                className={styles.MobileMenuLink}
                to="fundrising"
                duration={500}
                aria-label="Move to Fundrising section"
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
              >
                Fundrising
              </Link>
            </li>
            <li className={styles.MobileMenuListItem}>
              <Link
                className={styles.MobileMenuLink}
                to="product"
                duration={500}
                aria-label="Move to Product section"
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
              >
                Mavic 3T
              </Link>
            </li>
            <li className={styles.MobileMenuListItem}>
              <Link
                className={styles.MobileMenuLink}
                to="about"
                duration={500}
                aria-label="Move to About battalion section"
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
              >
                About battalion
              </Link>
            </li>
            <li className={styles.MobileMenuListItem}>
              <Link
                to="shooting-range"
                duration={500}
                className={styles.MobileMenuLink}
                aria-label="Move to Shooting range section"
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
              >
                Shooting range
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  );
};

export default MobileMenu;
