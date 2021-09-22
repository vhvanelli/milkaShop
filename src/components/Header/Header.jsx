import React, { useState } from 'react';
import LogoImg from '../../assets/imgs/logo.png'

import { HeaderContainer, Nav, Logo, Menu } from './styles'

const Header = () => {
    const [displayMenu, setDisplayMenu] = useState(false)

    return ( 
        <HeaderContainer>
            <Logo src={LogoImg} alt="logo"/>
            <Nav display={displayMenu}> 
                <ul>
                    <li>Catálogo</li>
                    <li>Comprar</li>
                    <li>Contato</li>
                    <li>Outros</li>
                </ul>
            </Nav>
            <Menu  onClick={()=> setDisplayMenu(!displayMenu)} src="https://img.icons8.com/windows/32/000000/menu--v3.png" alt="botão-menu"/>
        </HeaderContainer>
     );
}
 
export default Header;