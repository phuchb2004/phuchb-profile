import './style.css';
import phucImg from '../../assets/sen.png';
import { useTranslation, Trans } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="home-container">
            <div className="home-left">
                <h1>{t('home.left.greeting')}</h1>
                <p>
                    <Trans
                        i18nKey="home.left.description"
                        components={{
                            0: <strong className="highlight-text" />,
                        }}
                    />
                </p>
                <div className="buttons">
                    <button className="button-contact">{t('home.left.contactButton')}</button>
                    <button className="button-cv">{t('home.left.downloadCVButton')}</button>
                </div>
            </div>

            <div className="home-right">
                <img src={phucImg} alt="Phuc" />
            </div>
        </div>
    )
}
