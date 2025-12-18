import './style.css';
import phucImg from '../../assets/sen.png';

export default function Home() {

    return (
        <div className="home-container">
            <div className="home-left">
                <h1>Xin chào, tôi là Bảo Phúc</h1>
                <p>Một Full-stack Developer đam mê tạo ra những giao diện hiện đại bằng <strong>React, Next.js, Vue.js</strong> và xây dựng hệ thống ổn định với <strong>Node.js, Express, Nest.js</strong></p>
                <div className="buttons">
                    <button className="button-contact">Liên hệ tôi</button>
                    <button className="button-cv">Tải xuống CV</button>
                </div>
            </div>

            <div className="home-right">
                <img src={phucImg} alt="Phuc" />
            </div>
        </div>
    )
}
