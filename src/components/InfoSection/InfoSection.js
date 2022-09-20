import React from "react";
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,

} from "./InfoSection.elements";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";
// import homeImg from '../../images/home.svg'


const InfoSection = (props) => {
    return ( <
        >
        <
        InfoSec lightBg = { props.lightBg } >
        <
        Container >
        <
        InfoRow imgStart = { props.imgStart } >
        <
        InfoColumn >
        <
        TextWrapper >
        <
        TopLine lightTopLine = { props.lightTopLine } >

        { props.topLine } <
        /TopLine> <
        Heading lightText = { props.lightText } >

        { props.headLine } <
        /Heading> <
        Subtitle lightTextDesc = { props.lightTextDesc } >

        { props.description } <
        /Subtitle> <
        Link to = "Contact-us" >
        <
        Button big = { props.big }
        fontBig = { props.fontBig }
        primary = { props.primary } >

        { props.buttonLabel } <
        /Button> <
        /Link> <
        /TextWrapper> <
        /InfoColumn> <
        InfoColumn >
        <
        ImgWrapper start = { props.start } >
        <
        Img src = { props.img }
        alt = { props.alt }
        /> <
        /ImgWrapper> <
        /InfoColumn> <
        /InfoRow> <
        /Container> <
        /InfoSec> <
        />
    );
};

export default InfoSection;