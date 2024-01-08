import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import styles from './LangSwitcher.module.scss';
import Switch from "react-switch";

const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(false);

  const handleChange = () => {
    setLang(l => !l);
  };

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('ua');
    }
  }, [lang])

  return (
    <div>
      <Switch onChange={handleChange} checked={lang} onColor='#0057B8' offColor='#FFD700' uncheckedIcon={<span className={styles.Language}>UA</span>} checkedIcon={<span className={styles.Language}>EN</span>}/>
    </div>
  );
};

export default LangSwitcher;
