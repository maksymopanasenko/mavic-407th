import { Link } from 'react-scroll';
import styles from './Header.module.scss';
import Container from '../Container/Container';
import logo from '.././../assets/images/logo.webp';

import { useTranslation } from 'react-i18next';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu';
import LangSwitcher from './LangSwitcher/LangSwitcher';

const Header = () => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    const { t } = useTranslation();

    const onOpenMobileMenu = (e) => {
        console.log(e.target);
        setIsOpenMobileMenu(!isOpenMobileMenu);
    }

    return (
        <header className={styles.Header}>
            <Container>
                <div className={styles.HeaderBody}>
                    <Link
                        className={styles.HeaderLink}
                        to="/"
                        duration={500}
                    >
                        <span className={styles.HeaderLogo}>
                            4
                            <img src={logo} alt='logo' />
                            7
                        </span>
                    </Link>
                    <nav className={styles.HeaderNav}>
                        <ul className={styles.HeaderList}>
                            <li className={styles.HeaderListItem}>
                                <Link
                                    className={styles.HeaderLink}
                                    to="fundraising"
                                    duration={500}
                                    aria-label="Move to section"
                                >
                                    {t('header.fundraising')}
                                </Link>
                            </li>
                            <li className={styles.HeaderListItem}>
                                <Link
                                    className={styles.HeaderLink}
                                    to="product"
                                    duration={500}
                                    aria-label="Move to section"
                                >
                                    Mavic 3T
                                </Link>
                            </li>
                            <li className={styles.HeaderListItem}>
                                <Link
                                    className={styles.HeaderLink}
                                    to="about"
                                    duration={500}
                                    aria-label="Move to section"
                                >
                                    {t('header.about')}
                                </Link>
                            </li>
                            <li className={styles.HeaderListItem}>
                                <Link
                                    className={styles.HeaderLink}
                                    to="shooting-range"
                                    duration={500}
                                    aria-label="Move to section"
                                >
                                    {t('header.shooting')}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.HeaderOptions}>
                        <LangSwitcher />
                        <button
                            type="button"
                            className={styles.BurgerMenuOpen}
                            onClick={onOpenMobileMenu}
                        >
                            <FiMenu />
                        </button>
                    </div>
                </div>
                <MobileMenu
                    setIsOpenMobileMenu={setIsOpenMobileMenu}
                    isOpenMobileMenu={isOpenMobileMenu}
                />
            </Container>
        </header>
    );
};

export default Header;
