import './style.css';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, TwitchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className="footer-container">
            <div className="address-section">
                <div className="address-title">
                    <h3>{t('footer.address.title')}</h3>
                </div>
                <p>{t('footer.address.line1')}</p>
            </div>

            <div className="connect-section">
                <div className="connect-title">
                    <h3>{t('footer.socials.title')}</h3>
                </div>
                <div className="socials">
                    <a href="https://www.facebook.com/phuc.hoangbao.908">
                        <FacebookOutlined />
                    </a>
                    <a href="https://www.instagram.com/hoaqbp_/">
                        <InstagramOutlined />
                    </a>
                    <a href="https://x.com/Baophuc204">
                        <TwitterOutlined />
                    </a>
                    <a href="https://www.twitch.tv/joeybp04">
                        <TwitchOutlined />
                    </a>
                </div>
            </div>

            <div className="contact-section">
                <div className="contact-title">
                    <h3>{t('footer.contact.title')}</h3>
                </div>
                <ul>
                    <li>{t('footer.contact.phone')}</li>
                    <li>{t('footer.contact.email')}</li>
                </ul>
            </div>
        </div>
    )
}