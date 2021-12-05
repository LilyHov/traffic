import React, {useEffect} from 'react';
import './styles.css';

// @ts-ignore
// TODO: implement footer and appBar, also we can create metatags for SEO optimization
function Layout({children, headerText, pageTitle}) {
    useEffect(() => {
        document.title = pageTitle
    }, []);
    return (
        <div className="app-wrapper">
            <p className="header-text">{headerText}</p>
            {children}
        </div>
    );
}

export default Layout;
