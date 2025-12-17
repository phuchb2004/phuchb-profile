import './style.css';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, TwitchOutlined } from '@ant-design/icons';

export default function Footer() {

    return (
        <div className="footer-container">
            <div className="address-section">
                <div className="address-title">
                    <h3>Địa chỉ</h3>
                </div>
                <p>9 Phạm Văn Đồng, Phú Diễn, Hà Nội</p>
            </div>

            <div className="connect-section">
                <div className="connect-title">
                    <h3>Kết nối</h3>
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
                    <h3>Liên hệ</h3>
                </div>
                <ul>
                    <li>Tel: +84 355318104</li>
                    <li>Email: phuchb04@gmail.com</li>
                </ul>
            </div>
        </div>
    )
}