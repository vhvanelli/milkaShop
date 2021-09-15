import React from 'react';
import Header from './components/Header'
import Content from './components/Content';
import styled from 'styled-components';

const BodyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7B69A8;
  background: linear-gradient(135deg, #7B69A8 20%, rgba(102,51,102,1) 100%);
  background-size:cover;
`
const BoxContainer = styled.main`
  /* border: 2px solid #000000; */
  height: 90vh;
  width: 90vw;
  border-radius: 30px;
  background-color: #f8f3ff;
  box-shadow: 0 10px 1em rgba(0,0,0,0.25), inset 0 -4px 1.5em rgba(0,0,0,0.25);

`
const App = () => {
  return ( 
  <BodyContainer>
    <BoxContainer>
      <Header/>
      <Content/>
    </BoxContainer>
  </BodyContainer> );
}
 
export default App;