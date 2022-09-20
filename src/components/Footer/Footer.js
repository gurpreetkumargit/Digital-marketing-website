import React from "react";
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIcon,
    SocialIconLink,
} from "./Footer.elements";

// import {
//   FaFacebook,}
//   FaInstagram,
//   FaTelegram,
//   FaYoutube,
//   FaLinkedin,
//   FaTwitter,
// }

import { Button } from "../../globalStyles";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTelegram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return ( <
        FooterContainer >
        <
        FooterSubscription >
        <
        FooterSubHeading >
        Join us and get opportunities of business Development <
        /FooterSubHeading> <
        FooterSubText > You can Join at any time < /FooterSubText> <
        Form >
        <
        FormInput name = "email"
        type = "email"
        placeholder = "Your email" / >
        <
        Button > Submit < /Button> <
        /Form> <
        /FooterSubscription> <
        FooterLinksContainer >
        <
        FooterLinksWrapper >
        <
        FooterLinksItems >
        <
        FooterLinksTitle > About Us < /FooterLinksTitle> <
        FooterLink to = "/sign-up" > How we Work < /FooterLink> <
        FooterLink to = "" > Testimonials < /FooterLink> <
        FooterLink to = "" > Company Network < /FooterLink> <
        FooterLink to = "" > Careers < /FooterLink> <
        FooterLink to = "" > Terms of Services < /FooterLink> <
        /FooterLinksItems> <
        FooterLinksItems >
        <
        FooterLinksTitle > Products < /FooterLinksTitle> <
        FooterLink to = "" > Product1 < /FooterLink> <
        FooterLink to = "" > Product2 < /FooterLink> <
        FooterLink to = "" > Product3 < /FooterLink> <
        FooterLink to = "" > Product4 < /FooterLink> { /* <FooterLink to="">Terms of Services</FooterLink> */ } <
        /FooterLinksItems> <
        /FooterLinksWrapper>

        <
        FooterLinksWrapper >
        <
        FooterLinksItems >
        <
        FooterLinksTitle > Partners < /FooterLinksTitle> <
        FooterLink to = "" > Partner1 < /FooterLink> <
        FooterLink to = "" > Partner2 < /FooterLink> <
        FooterLink to = "" > Partner3 < /FooterLink> <
        FooterLink to = "" > Partner4 < /FooterLink> <
        FooterLink to = "" > < /FooterLink> <
        FooterLink to = "" > < /FooterLink> { /* <FooterLink to="">Terms of Services</FooterLink> */ } <
        /FooterLinksItems> <
        FooterLinksItems >
        <
        FooterLinksTitle > Social Media < /FooterLinksTitle> <
        FooterLink to = "/" > Facebook < /FooterLink> <
        FooterLink to = "" > Instagram < /FooterLink> <
        FooterLink to = "" > Telegram < /FooterLink> <
        FooterLink to = "" > Youtube < /FooterLink> <
        FooterLink to = "" > Twitter < /FooterLink> <
        FooterLink to = "" > LinkedIn < /FooterLink> <
        /FooterLinksItems> <
        /FooterLinksWrapper> <
        /FooterLinksContainer> <
        SocialMedia >
        <
        SocialMediaWrap >
        <
        SocialLogo to = "/" >
        <
        SocialIcon / >
        Company <
        /SocialLogo> <
        WebsiteRights > Enterprises @ 2022 < /WebsiteRights> <
        SocialIcons >
        <
        SocialIconLink href = "/"
        target = "_blank" >
        <
        FaFacebook / >
        <
        /SocialIconLink>

        <
        SocialIconLink href = "/"
        target = "_blank" >
        <
        FaInstagram / >
        <
        /SocialIconLink>

        <
        SocialIconLink href = "/"
        target = "_blank" >
        <
        FaTelegram / >
        <
        /SocialIconLink>

        <
        SocialIconLink href = "/"
        target = "_blank" >
        <
        FaYoutube / >
        <
        /SocialIconLink>

        <
        SocialIconLink href = "/"
        target = "_blank" >
        <
        FaTwitter / >
        <
        /SocialIconLink>

        <
        SocialIconLink href = "/"
        target = "_blank" >
        <
        FaLinkedin / >
        <
        /SocialIconLink> <
        /SocialIcons> <
        /SocialMediaWrap> <
        /SocialMedia> <
        /FooterContainer>
    );
};

export default Footer;