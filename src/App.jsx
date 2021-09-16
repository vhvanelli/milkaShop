import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import styled from "styled-components";
import MilkaOreo from "./assets/imgs/milka-oreo.png";
import MilkaConfetti from "./assets/imgs/milka-confetti.png";
import MilkaMousse from "./assets/imgs/milka-mousse.png";
import MilkaStrawberry from "./assets/imgs/milka-strawberry.png";

const BodyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7b69a8;
  background: linear-gradient(135deg, #7b69a8 20%, rgba(102, 51, 102, 1) 100%);
  background-size: cover;
`;
const BoxContainer = styled.main`
  /* border: 2px solid #000000; */
  height: 90vh;
  width: 90vw;
  border-radius: 30px;
  background-color: #f8f3ff;
  box-shadow: 0 10px 1em rgba(0, 0, 0, 0.25),
    inset 0 -4px 1.5em rgba(0, 0, 0, 0.25);
`;
const App = () => {
  const [index, setIndex] = useState(0);
  const allChocolates = [
    {
      flavor: "Oreo",
      img: MilkaOreo,
      alt: "chocolate-sabor-oreo",
      description: "Chocolate ao leite recheado com pedaços de Oreo",
      price:"R$ 12,99"
    },
    {
      flavor: "Confetti",
      img: MilkaConfetti,
      alt: "chocolate-sabor-confete",
      description: "Chocolate ao leite com confetes",
      price:"R$ 11,99"
    },
    {
      flavor: "Mousse",
      img: MilkaMousse,
      alt: "chocolate-sabor-mousse",
      description: "Chocolate ao leite recheado com um mousse de chocolate",
      price:"R$ 13,99"
    },
    {
      flavor: "Strawberry",
      img: MilkaStrawberry,
      alt: "chocolate-sabor-morango",
      description: "Chocolate ao leite recheado com pedaços de morango",
      price:"R$ 14,99"
    },
  ];

  const handleIdexControl = (n) => {
    if (index + n < 0) {
      setIndex(3);
    } else if (index + n > 3) {
      setIndex(0);
    } else {
      console.log(index);
      setIndex(index + n);
    }
  };

  return (
    <BodyContainer>
      <BoxContainer>
        <Header />
        <Content
          chocolateImg={allChocolates[index].img}
          altImgChocolate={allChocolates[index].alt}
          btLeft={() => handleIdexControl(-1)}
          btRight={() => handleIdexControl(1)}
          flavor={allChocolates[index].flavor}
          description={allChocolates[index].description}
          price={allChocolates[index].price}
        />
      </BoxContainer>
    </BodyContainer>
  );
};

export default App;
