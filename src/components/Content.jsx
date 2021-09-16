import React from 'react';
import styled from 'styled-components';
import ArrowImgLeft from '../assets/imgs/arrow-left.png'
import ArrowImgRight from '../assets/imgs/arrow-right.png'

const ContainerContent = styled.div`
    display:flex;
    padding: 0 60px;
    align-items: center;
    height: 80%;
    /* border: 2px solid black; */

    article{
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
        button{
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
            :hover{
                    opacity: 0.9;
                }
            :active{
                opacity: 0.7;
            }
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
    }

    section{
        /* border:2px dotted red; */
        display: flex;
        height:100% ;
        align-items: center;
        justify-content: center;
        gap: 50px;
        button{
            border:none;
            width:50px;
            cursor: pointer;
            img{
                filter: drop-shadow(0px 2px 2px #00000089);
            }
            :hover{
                opacity: 0.9;
            }
            :active{
                opacity: 0.7;
            }
        }
    }
`
const ChocolateImg = styled.img`
    transform: rotate(20deg);
    transform-origin: left top right bottom 0;
    width: 70%;
    /* margin-left: 40px; */
`
const Content = (props) => {
    return ( 
        <ContainerContent>
            <article>
                <h2>Milka <br />{props.flavor}</h2>
                <h3>{props.description}</h3>
                <p>{props.price}</p>
                <button>Comprar agora</button>
            </article> 
            <section>
                <button onClick={props.btLeft}><img src={ArrowImgLeft} alt="seta-para-esquerda" /></button>
                <ChocolateImg src={props.chocolateImg} alt={props.altImgChocolate} />
                <button onClick={props.btRight}><img src={ArrowImgRight} alt="seta-para-direita" /></button>
                    
            </section>           
        </ContainerContent>
     );
}
 
export default Content;