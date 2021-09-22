import React from 'react';
import ArrowImgLeft from '../../assets/imgs/arrow-left.png'
import ArrowImgRight from '../../assets/imgs/arrow-right.png'

import { 
    ContainerContent, 
    ChocolateImg, 
    SpecsContainer, 
    ImgContainer,
    BuyButton,
    ArrowButton
 } from './styles';

const Content = (props) => {
    return (
        <ContainerContent>
            <SpecsContainer>
                <h2>Milka <br />{props.flavor}</h2>
                <h3>{props.description}</h3>
                <p>{props.price}</p>
                <BuyButton>Comprar agora</BuyButton>
            </SpecsContainer>
            <ImgContainer>
                <ArrowButton onClick={props.btLeft}><img src={ArrowImgLeft} alt="seta-para-esquerda" /></ArrowButton>
                <ChocolateImg src={props.chocolateImg} alt={props.altImgChocolate} />
                <ArrowButton onClick={props.btRight}><img src={ArrowImgRight} alt="seta-para-direita" /></ArrowButton>

            </ImgContainer>
        </ContainerContent>
    );
}

export default Content;