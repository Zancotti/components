import styled from "styled-components";
import { IoExtensionPuzzle } from "react-icons/io5";
import { useState } from "react";
import HoverEffect from "./HoverEffect";

const Sidebar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [nrHovered, setNrHovered] = useState(0);

  const handleMouseEnter = (number: number) => {
    setNrHovered(number);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container>
      {isHovered && <HoverEffect nrHovered={nrHovered} />}
      <ComponentButton onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Component 1</ButtonText>
      </ComponentButton>
      <ComponentButton onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Component 2</ButtonText>
      </ComponentButton>
      <ComponentButton onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Component 3</ButtonText>
      </ComponentButton>
      <ComponentButton onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Component 4</ButtonText>
      </ComponentButton>
      <ComponentButton onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Component 5</ButtonText>
      </ComponentButton>
    </Container>
  );
};

export default Sidebar;

const Container = styled.nav`
  width: 250px;
  flex-grow: 1;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const ComponentButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  text-align: start;
  height: 3rem;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
  border-radius: 5px;
  cursor: pointer;
`;
const ButtonText = styled.span`
  padding-left: 10px;
`;
