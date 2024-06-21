import React from "react";
import Header from "./header";
import Footer from "./footer";

// ! explanation: why did u use class component ? 

class Layout extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <>
                <Header />
                {children}
                <Footer />
            </>
        )
    }
}

export default Layout;