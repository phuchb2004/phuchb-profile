import React, { useState } from "react";
import baseApi from "../../../base-api/baseApi";
import { FaTimes } from "react-icons/fa";
import './style.scss';
import { useTranslation } from "react-i18next";

const ContactEmail = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const { t } = useTranslation();

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await baseApi.post('/contact', formData);
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                message: ''
            });

            setTimeout(() => {
                setStatus('');
                onClose();
            }, 2000);
        }
        catch (error) {
            console.log('Email sent failed', error);
            setStatus('error');
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content animate-fade-up" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <FaTimes/>
                </button>

                <h2>{t('modal.contactEmail.title')}</h2>
                <p>{t('modal.contactEmail.description')}</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>{t('modal.contactEmail.label.name')}</label>
                        <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder={t('modal.contactEmail.placeholder.name')}   
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('modal.contactEmail.label.email')}</label>
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder={t('modal.contactEmail.placeholder.email')}      
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('modal.contactEmail.label.message')}</label>
                        <textarea 
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder={t('modal.contactEmail.placeholder.message')}   
                        />
                    </div>

                    <button 
                        type="submit"
                        className="submit-btn"
                        disabled={ status === 'sending' }    
                    >
                        { status === 'sending' ? t('modal.contactEmail.button.sending') : t('modal.contactEmail.button.send') }
                    </button>

                    { status === 'success' && <p className="msg-success">{t('modal.contactEmail.message.success')}</p> }
                    { status === 'error' && <p className="msg-error">{t('modal.contactEmail.message.error')}</p> }
                </form>
            </div>
        </div>
    );
}

export default ContactEmail;
