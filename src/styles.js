import styled from "styled-components";

export const BodyContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #7b69a8;
    background: linear-gradient(135deg, #7b69a8 20%, rgba(102, 51, 102, 1) 100%);
    background-size: cover;

`;
export const BoxContainer = styled.main`
  /* border: 2px solid #000000; */
    height: 90vh;
     width: 90vw;
     border-radius: 30px;
    background-color: #f8f3ff;
    box-shadow: 0 10px 1em rgba(0, 0, 0, 0.25),
    inset 0 -4px 1.5em rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 900px){
        width: 100vw;
        height: 100vh;
        border-radius: 0;
    }
`;