import React from "react";
import * as s from "./Header.style";
import logoSrc from "@Assets/images/logo.jpg";
import Nav from "@Components/Nav/Nav";

const Header = (props) => {
    return (
        <s.HeaderContainer>
            <s.InnerHeader>
                <s.Logo src={logoSrc} alt={"Company Logo"} />
                <Nav />
            </s.InnerHeader>
        </s.HeaderContainer>
    );
};

export default Header;
