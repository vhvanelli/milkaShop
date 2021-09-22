import styled from "styled-components";

export const ContainerContent = styled.div`
    display:flex;
    padding: 0 60px;
    align-items: center;
    height: 80%;
    /* border: 2px solid black; */
    
    @media screen and (max-width: 900px){
        flex-direction: column;
        gap: 10px;
    }
    
`
export const ChocolateImg = styled.img`
    transform: rotate(20deg);
    transform-origin: left top right bottom 0;
    width: 70%;
    @media screen and (min-width:300px ) and (max-width: 900px){
        width: max(70vw);
    }
`

export const SpecsContainer = styled.article`
    width: 40%;
    height:100% ;
    /* border:2px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    
    h2{    
    font-size: 5em;
    font-weight: 400;
    position: relative;
    }

    h3{
        font-size: 1.7em;
        font-weight: 300;
        color: #5a5a5a;
    }
    p{
        font-weight: bold;
        font-size: 1.1em;
        margin-top: 20px;
    }
    h2::before{
    content: " ";
    width: 10px;
    height: 100%;
    background: linear-gradient(135deg, #9675eb 0%, #7e357e 100%);
    left: -25px;
    top: 8px;
    position: absolute;
    }
    @media screen and (max-width: 900px){
        width:100%;
        h2{
            font-size: max(2.7em, 10vw);
        }
    }
`

export const ImgContainer = styled.section`
    display: flex;
    height:100% ;
    align-items: center;
    justify-content: center;
    gap: 20px;
    /* border: 2px solid black; */  
    @media screen and (max-width: 900px){
        gap: 10px;
    }
`
export const BuyButton = styled.button`
    width: 130px;
    height: 39px;
    background: linear-gradient(135deg, #9675eb 20%, #b141b1 100%); 
    color: #ffffff;
    border: none;
    border-radius: 7px;
    margin-top: 25px;
    cursor: pointer;
    font-weight: 500;
    font-size:1em;
    animation: colorButton 15s ease infinite;
        :hover{
                opacity: 0.9;
            }
        :active{
            opacity: 0.7;
        }
`
export const ArrowButton = styled.button`
    border:none;
    width:50px;
    cursor: pointer;
    background: none;
    img{
        filter: drop-shadow(0px 2px 2px #00000089);
    }
    :hover{
        opacity: 0.9;
    }
    :active{
        opacity: 0.7;
    }
   
`