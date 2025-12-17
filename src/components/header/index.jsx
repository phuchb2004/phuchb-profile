import './style.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header-container">
            <div className="header-title">
                <h1>Hoàng Bảo Phúc</h1>
            </div>
            <nav className="header-menu">
                <NavLink to="/home" className={({isActive}) => isActive ? 'active-menu' : 'inactive-menu'}>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/experience">Experience</NavLink>
                <NavLink to="/education">Education</NavLink>
            </nav>
        </div>
    )
}