import React from "react";
import styled from "styled-components";
import CharByChar from "./CharByChar";

const CharByCharAnimation: React.FC = () => {
  return (
    <TextContainer>
      <div>Together</div>
      <InnerTextContainer>
        <CharByCharContainer>
          <WeContainer>.we</WeContainer>
          <CharByChar wordsArray={["create", "explore", "imagine", "achieve"]} />
        </CharByCharContainer>
      </InnerTextContainer>
    </TextContainer>
  );
};

export default CharByCharAnimation;

const TextContainer = styled.div`
  font-weight: 900;
  display: flex;
  flex-direction: column;
  width: 300px;
  letter-spacing: 2px;
  font-size: 1.5rem;
`;
const InnerTextContainer = styled.div`
  display: flex;
`;
const WeContainer = styled.div`
  padding-right: 2px;
  color: rgb(97, 208, 158);
`;
const CharByCharContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
