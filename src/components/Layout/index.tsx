import React, {ReactNode, useEffect} from "react";
import "./styles.css";

type Props = {
    pageTitle: string,
    headerText: string,
    children?: ReactNode;
}

// TODO: implement footer and appBar, also we can create metatags in this file for SEO optimization

function Layout({children, headerText, pageTitle} : Props) {

    useEffect(() => {
        document.title = pageTitle
    }, [pageTitle]);

    return (
        <div className="app-wrapper">
            <p className="header-text">{headerText}</p>
            {children}
        </div>
    );
}

export default Layout;
