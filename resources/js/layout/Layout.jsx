// Layout.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Layout.jsxでtitleを受け取る
function Layout({ children, title }) {
    return (
        <>
            <Header title={title} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
