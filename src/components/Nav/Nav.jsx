import React from "react";

import * as s from "./Nav.style";


const Nav = (props) => {
    return (
        <div className="Nav-Container">
            <s.NavList>
                <s.NavListItem>
                    <s.Link to={""} end>Home</s.Link>
                </s.NavListItem>
                <s.NavListItem>
                    <s.Link to={"/about-us"}>About Us</s.Link>
                </s.NavListItem>
                <s.NavListItem>
                    <s.Link to={"/products"}>Products</s.Link>
                </s.NavListItem>
                <s.NavListItem>
                    <s.Link to={"/contact-us"}>Contact Us</s.Link>
                </s.NavListItem>
            </s.NavList>
        </div>
    );
};

export default Nav;
