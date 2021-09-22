import styled from 'styled-components';

export const HeaderContainer = styled.header`
    /* background-color:#7f61a9; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right:  40px;
    text-transform: uppercase;
    /* width: 100vw;*/
`
export const Logo = styled.img`
        width: 400px;

        @media screen and (max-width: 900px){
            width: max(100vw);
        }
`
export const Nav = styled.nav`
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
    @media screen and (max-width:900px){
            ul{
                display:${props => props.display? "block" : "none"};
                position: absolute;
                top: 70px;
                right:15px;
                text-align: right;
            }
            ul > li{
                display: block;
                margin-top: 5px;
            }
        }
`
export const Menu = styled.img`
    display: none;
    position: absolute;
    right: 20px;
    top: 30px;
    @media screen and (max-width:900px){
        display: block;
    }
`