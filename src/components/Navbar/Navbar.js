import React, { useState, useEffect } from "react";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItems,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => setClick(false);

    const showBtn = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showBtn();
    }, []);

    window.addEventListener("resize", showBtn);

    return ( <
        >
        <
        IconContext.Provider value = {
            { color: "#fff" } } >
        <
        Nav >
        <
        NavbarContainer >
        <
        NavLogo to = "/"
        onClick = { closeMobileMenu } >
        <
        NavIcon / >
        Company <
        /NavLogo> <
        MobileIcon onClick = { handleClick } >

        { click ? < FaTimes / > : < FaBars / > } <
        /MobileIcon> <
        NavMenu onClick = { handleClick }
        click = { click } >
        <
        NavItems >
        <
        NavLinks to = "/" > Home < /NavLinks> <
        /NavItems> <
        NavItems >
        <
        NavLinks to = "/Services" > Services < /NavLinks> <
        /NavItems> <
        NavItems >
        <
        NavLinks to = "/Growth" > Company Growth < /NavLinks> <
        /NavItems> <
        NavItems >
        <
        NavLinks to = "/Partners" > Partners < /NavLinks> <
        /NavItems> <
        NavItemBtn >

        {
            button ? ( <
                NavBtnLink to = "/Contact-us" >
                <
                Button primary > Contact us < /Button> <
                /NavBtnLink>
            ) : ( <
                NavBtnLink to = "/Contact-us" >
                <
                Button fontBig primary >
                Contact us <
                /Button> <
                /NavBtnLink>
            )
        } <
        /NavItemBtn> <
        /NavMenu> <
        /NavbarContainer> <
        /Nav> <
        /IconContext.Provider> <
        />
    );
}

export default Navbar;