import React from 'react';
import Logo from '../assets/imgs/logo.png'
import styled from 'styled-components';

const HeaderContainer = styled.header`
    /* background-color:#7f61a9; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right:  40px;
    text-transform: uppercase;
    /* width: 100vw;*/
    img{
        width: 400px;
        
    }
`
const Nav = styled.nav`

    ul{
        list-style: none;
        color: #000000;
        font-size: 16px;
        font-weight: 500;
        li{
            display:inline-block;
            margin-left: 20px;
            cursor: pointer;
            :hover{
                color: #cc4572
            }
        }
    } 
`

const Header = () => {
    return ( 
        <HeaderContainer>
            <img src={Logo} alt="logo"/>
            <Nav>
                <ul>
                    <li>Catálogo</li>
                    <li>Comprar</li>
                    <li>Contato</li>
                    <li>Outros</li>
                </ul>
            </Nav>
        </HeaderContainer>
     );
}
 
export default Header;