import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';   
import Footer from '../Footer/Footer';  

export default function Layout() {
    return (
        <div>
            <Navbar />
            <main style={{ minHeight: '100vh', paddingTop: '0px' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}