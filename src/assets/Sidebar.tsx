import styled from "styled-components";
import { IoExtensionPuzzle, IoHome } from "react-icons/io5";
import { useState } from "react";
import HoverEffect from "./HoverEffect";
import ClickedEffect from "./ClickedEffect";
import { NavigateFunction } from "react-router-dom";

interface SidebarProps {
  navigate: NavigateFunction;
}

const Sidebar: React.FC<SidebarProps> = ({ navigate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [nrClicked, setNrClicked] = useState(0);
  const [nrHovered, setNrHovered] = useState(0);

  const handleMouseEnter = (number: number) => {
    setNrHovered(number);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = (number: number, path: string) => {
    setNrClicked(number);
    setIsClicked(true);
    console.log(path);
    navigate(path);
  };

  return (
    <Container>
      {isHovered && <HoverEffect nrHovered={nrHovered} />}
      {isClicked && <ClickedEffect nrClicked={nrClicked} />}
      <ComponentButton
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick(0, "/")}
      >
        <IoHome size="2rem" />
        <ButtonText>Home</ButtonText>
      </ComponentButton>
      <ComponentButton
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick(1, "/component1")}
      >
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Component 1</ButtonText>
      </ComponentButton>
      <ComponentButton
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick(2, "/component2")}
      >
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Component 2</ButtonText>
      </ComponentButton>
      <ComponentButton
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick(3, "/component3")}
      >
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Component 3</ButtonText>
      </ComponentButton>
      <ComponentButton
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick(4, "/component4")}
      >
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Component 4</ButtonText>
      </ComponentButton>
      <ComponentButton
        onMouseEnter={() => handleMouseEnter(5)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick(5, "/component5")}
      >
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
