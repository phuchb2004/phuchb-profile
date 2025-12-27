import React, { useState } from 'react';
import './style.scss';
import phucImg from '../../assets/phuc.jpg';
import { useTranslation, Trans } from 'react-i18next';
import ContactEmail from '../../components/modals/contact-email';

export default function Home() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv/baophuc-2025.pdf';
        link.download = 'HoangBaoPhuc_CV_2025.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="home-container">
            <div className="home-left">
                <h1 className="animate-fade-up">
                    {t('home.left.greeting')}
                </h1>
                
                <div className="animate-fade-up delay-1">
                    <p>
                        <Trans
                            i18nKey="home.left.description"
                            components={{
                                0: <strong className="highlight-text" />,
                            }}
                        />
                    </p>
                </div>

                <div className="buttons animate-fade-up delay-2">
                    <button className="button-contact" onClick={() => setIsModalOpen(true)}>
                        {t('home.left.contactButton')}
                    </button>
                    <button 
                        className="button-cv"
                        onClick={handleDownloadCV}
                    >
                        {t('home.left.downloadCVButton')}
                    </button>
                </div>
            </div>

            <div className="home-right">
                <img 
                    src={phucImg}
                    alt="Phuc"
                    className="animate-fade-in delay-3"
                />
            </div>

            <ContactEmail
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}
