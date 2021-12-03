import React from 'react';
import './styles.css';

// @ts-ignore
function Layout({children}) {
    return (
        <div className="app-wrapper">
            {children}
        </div>
    );
}

export default Layout;
