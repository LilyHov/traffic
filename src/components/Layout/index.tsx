import React from 'react';
import './styles.css';

// @ts-ignore
// TODO: implement footer and appBar, also we can create metatags for SEO optimization
function Layout({children}) {
    return (
        <div className="app-wrapper">
            {children}
        </div>
    );
}

export default Layout;
