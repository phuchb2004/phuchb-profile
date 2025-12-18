import './style.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="header-container">
            <div className="header-title">
                <NavLink to="/home">
                    <h1>{t('header.title')}</h1>
                </NavLink>
            </div>

            <nav className="header-menu">
                <NavLink to="/home" className={({isActive}) => isActive ? 'active-menu' : 'inactive-menu'}>{t('header.menu.home')}</NavLink>
                <NavLink to="/about">{t('header.menu.about')}</NavLink>
                <NavLink to="/experience">{t('header.menu.experience')}</NavLink>
                <NavLink to="/education">{t('header.menu.education')}</NavLink>

                <div className="lang-switch">
                    <span
                        onClick={() => changeLanguage('vi')}
                        className={i18n.language === 'vi' ? 'active-lang' : 'inactive-lang'}
                    >
                        {t('header.menu.languages.vi')}
                    </span>
                    <span className="separator">|</span>
                    <span
                        onClick={() => changeLanguage('en')}
                        className={i18n.language === 'en' ? 'active-lang' : 'inactive-lang'}
                    >
                        {t('header.menu.languages.en')}
                    </span>
                </div>
            </nav>


        </div>
    )
}
