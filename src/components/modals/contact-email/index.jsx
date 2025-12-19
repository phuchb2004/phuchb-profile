import React, { useState } from "react";
import baseApi from "../../../base-api/baseApi";
import { FaTimes } from "react-icons/fa";
import './style.css';
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

                <h2> </h2>
                <p>Hãy để lại lời nhắn, tôi sẽ phản hồi sớm nhất có thể</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Tên của bạn</label>
                        <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Nguyễn Văn Mười"    
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="example@gmail.com"    
                        />
                    </div>
                    <div className="form-group">
                        <label>Lời nhắn</label>
                        <textarea 
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Nội dung lời nhắn..."
                        />
                    </div>

                    <button 
                        type="submit"
                        className="submit-btn"
                        disabled={ status === 'sending' }    
                    >
                        { status === 'sending' ? 'Đang gửi...' : 'Gửi tin nhắn' }
                    </button>

                    { status === 'success' && <p className="msg-success">Gửi thành công, cảm ơn bạn!</p> }
                    { status === 'error' && <p className="msg-error">Đã xảy ra lỗi, vui lòng thử lại!</p> }
                </form>
            </div>
        </div>
    );
}

export default ContactEmail;
