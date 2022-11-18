import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@Layout/Header/Header";
import Footer from "@Layout/Footer/Footer";
import ScrollButton from "@Components/ScrollButton/ScrollButton";

const Layout = (props) => {
    return (
        <div className="Layout-Container">
            <Header />
            <Outlet />
            <Footer />
            <ScrollButton />
        </div>
    );
};

export default Layout;
