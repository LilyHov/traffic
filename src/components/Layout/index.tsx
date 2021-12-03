import React from 'react';
import './styles.css';

// @ts-ignore
// TODO: for the future we can implement footer and appBar
function Layout({children}) {
    return (
        <div className="app-wrapper">
            {children}
        </div>
    );
}

export default Layout;
