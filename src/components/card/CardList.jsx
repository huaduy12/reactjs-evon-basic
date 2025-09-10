import React from "react";
import styled from "styled-components";
import Card2 from "./Card2";
import CardTailwind from "./CardTailwind";

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 90px 30px;
  padding: 30px;
`;
const CardList = () => {
  return (
    <StyledCardList>
      {/* <Card2></Card2> */}
      <CardTailwind primary></CardTailwind>
    </StyledCardList>
  );
};

export default CardList;
