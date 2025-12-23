import React, { useState, useEffect } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiAwsamplify, SiRender } from 'react-icons/si';
import RevealOnScroll from '../../components/reveal-on-scroll';
import baseApi from '../../base-api/baseApi';

export default function Technology() {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tech, setTech] = useState([]);

    useEffect(() => {
        const fetchTech = async () => {
            try {
                const res = await baseApi.get('/tech');
                setTech(res);
                setLoading(false);
            }
            catch (error) {
                console.error("Lỗi, không lấy được data Technology", error);
                setError(error.message);
            }
        }
        fetchTech();
    }, [])

    const getTechIcon = (name) => {
        const lowerName = name?.toLowerCase() || "";
        
        if (lowerName.includes('react')) return <FaReact color="#61DAFB" />;
        if (lowerName.includes('node')) return <FaNodeJs color="#339933" />;
        if (lowerName.includes('mongo')) return <SiMongodb color="#47A248" />;
        if (lowerName.includes('aws')) return <SiAwsamplify color="#FF9900" />;
        if (lowerName.includes('render')) return <SiRender className="icon-render" />;
        if (lowerName.includes('js') || lowerName.includes('script')) return <SiJavascript color="#F7DF1E" />;
        return <FaCode color="#888" />;
    };

    if (loading) return <div className="loading-state"><div className="loader"></div><p>{t('experience.loading')}</p></div>;
    if (error) return <div className="error-state">{error}</div>;

    return (
        <div className="tech-container">
            <RevealOnScroll direction="left">
                <div className="tech-header">
                    <h2>{t('technology.title')}</h2>
                    <p className="tech-desc">{t('technology.description')}</p>
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll direction="right">
                <div className="tech-block">
                    {tech.map((techno) => (
                        <a 
                            className="tech-item" 
                            key={ techno.techId }
                            href={ techno.techUrl }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="tech-icon-wrapper">
                                {getTechIcon(techno.techName)}
                            </div>
                            <div className="tech-info">
                                <h4> {techno.techName} </h4>
                                <span className="tech-category"> {techno.category} </span>
                            </div>
                        </a>
                    ))}
                </div>
            </RevealOnScroll>
        </div>
    )
}
