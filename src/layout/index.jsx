import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import './style.css';

export default function Layout() {

    return (
        <div className="layout-container">
            <div className="header">
                <Header />
            </div>

            <div className="content">
                <Outlet />
            </div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}