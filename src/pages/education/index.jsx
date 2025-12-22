import './style.css';
import { HomeOutlined } from '@ant-design/icons';
import React from 'react';
import hsg12 from '../../assets/hsg-12.jpg';
import RevealOnScroll from '../../components/reveal-on-scroll';

export default function Education() {

    return (
        <div className="education-container">
            <RevealOnScroll direction="left">
                <h2 className="edu-title">Học vấn & Chứng chỉ</h2>

                <div className="formal-education">
                    <div className="edu-card highschool">
                        <div className="card-content">
                            <span className="edu-year">2019 - 2022</span>
                            <h3 className="school-header">
                                <HomeOutlined /> Trường PT Vùng Cao Việt Bắc
                            </h3>
                            <div className="achievement-block">
                                <div className="achievement-info">
                                    <h4>Thành tích nổi bật: </h4>
                                    <p>Đạt danh hiệu Học sinh Giỏi năm lớp 12.</p>
                                </div>

                                <div className="achievement-img">
                                    <img src={hsg12} alt="Giấy khen HSG lớp 12" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="edu-card colleague">
                        <div className="card-content">
                            <span className="edu-year">2023 - 2026</span>   
                            <h3 className="school-header"> 
                                <HomeOutlined /> Trường Đại học Phương Đông
                            </h3>
                            <p className="edu-major">Công nghệ thông tin & Truyền thông</p>
                            <ul className="edu-desc">
                                <li>Tốt nghiệp loại Khá</li>
                                <li>Đồ án: Shop quần áo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll direction="right">
                <h3 className="certificate-title">Chứng chỉ chuyên môn</h3>

                <div className="certificate">
                    <div className="certificate-item">
                        <h4> SQL - Certificate of Completion </h4>
                        <p> Codecademy - 6/2024 </p>
                    </div>
                    
                    <div className="certificate-item">
                        <h4> C++ Certificate of Completion </h4>
                        <p> Codecademy - 7/2024 </p>
                    </div>

                    <div className="certificate-item">
                        <h4> Java Course Certificate of Completion </h4>
                        <p> Codecademy - 8/2024 </p>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    )
}