import React, { useState } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

import MilkaOreo from "./assets/imgs/milka-oreo.png";
import MilkaConfetti from "./assets/imgs/milka-confetti.png";
import MilkaMousse from "./assets/imgs/milka-mousse.png";
import MilkaStrawberry from "./assets/imgs/milka-strawberry.png";

import { BodyContainer, BoxContainer } from './styles'

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
