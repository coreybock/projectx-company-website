import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@Layout/Header/Header";
import Footer from "@Layout/Footer/Footer";

const Layout = (props) => {
    return (
        <div className="Layout-Container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
