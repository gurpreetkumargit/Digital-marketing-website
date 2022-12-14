import React from 'react';
import { Button } from '../../globalStyles';
// import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
// import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
    ServicesSection,
    ServicesWrapper,
    ServicesHeading,
    ServicesContainer,
    ServicesCard,
    ServicesCardInfo,
    ServicesCardIcon,
    ServicesCardPlan,
    ServicesCardCost,
    ServicesCardLength,
    ServicesCardFeatures,
    ServicesCardFeature
} from './Services.elements';

function Services() {
    return ( <
        IconContext.Provider value = {
            { color: '#a9b3c1', size: 64 } } >
        <
        ServicesSection >
        <
        ServicesWrapper >
        <
        ServicesHeading > Our Services < /ServicesHeading> <
        ServicesContainer >
        <
        ServicesCard to = '/sign-up' >
        <
        ServicesCardInfo >
        <
        ServicesCardIcon >
        <
        GiRock / >
        <
        /ServicesCardIcon> <
        ServicesCardPlan > Starter Pack < /ServicesCardPlan> <
        ServicesCardCost > $99 .99 < /ServicesCardCost> <
        ServicesCardLength > per month < /ServicesCardLength> <
        ServicesCardFeatures >
        <
        ServicesCardFeature > 100 New Users < /ServicesCardFeature> <
        ServicesCardFeature > $10, 000 Budget < /ServicesCardFeature> <
        ServicesCardFeature > Re - targeting analytics < /ServicesCardFeature> <
        /ServicesCardFeatures> <
        Button primary > Choose Plan < /Button> <
        /ServicesCardInfo> <
        /ServicesCard> <
        ServicesCard to = '/sign-up' >
        <
        ServicesCardInfo >
        <
        ServicesCardIcon >
        <
        GiCrystalBars / >
        <
        /ServicesCardIcon> <
        ServicesCardPlan > Gold Rush < /ServicesCardPlan> <
        ServicesCardCost > $299 .99 < /ServicesCardCost> <
        ServicesCardLength > per month < /ServicesCardLength> <
        ServicesCardFeatures >
        <
        ServicesCardFeature > 1000 New Users < /ServicesCardFeature> <
        ServicesCardFeature > $50, 000 Budget < /ServicesCardFeature> <
        ServicesCardFeature > Lead Gen Analytics < /ServicesCardFeature> <
        /ServicesCardFeatures> <
        Button primary > Choose Plan < /Button> <
        /ServicesCardInfo> <
        /ServicesCard> <
        ServicesCard to = '/sign-up' >
        <
        ServicesCardInfo >
        <
        ServicesCardIcon >
        <
        GiCutDiamond / >
        <
        /ServicesCardIcon> <
        ServicesCardPlan > Diamond Kings < /ServicesCardPlan> <
        ServicesCardCost > $999 .99 < /ServicesCardCost> <
        ServicesCardLength > per month < /ServicesCardLength> <
        ServicesCardFeatures >
        <
        ServicesCardFeature > Unlimited Users < /ServicesCardFeature> <
        ServicesCardFeature > Unlimited Budget < /ServicesCardFeature> <
        ServicesCardFeature > 24 / 7 Support < /ServicesCardFeature> <
        /ServicesCardFeatures> <
        Button primary > Choose Plan < /Button> <
        /ServicesCardInfo> <
        /ServicesCard> <
        /ServicesContainer> <
        /ServicesWrapper> <
        /ServicesSection> <
        /IconContext.Provider>
    );
}
export default Services;