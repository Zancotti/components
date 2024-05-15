import styled from "styled-components";
import { IoExtensionPuzzle, IoHome } from "react-icons/io5";
import HoverEffect from "./HoverEffect";
import ClickedEffect from "./ClickedEffect";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const findCurrentIndex = () => {
    const paths = [
      "/",
      "/triple-color-animation",
      "/reveal-animation",
      "/circle-tab-animation",
      "/component4",
      "/component5",
    ];
    const currentPath = location.pathname;
    const currentIndex = paths.findIndex((path) => path === currentPath);
    return currentIndex;
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const initialIndex = findCurrentIndex();
  const [nrClicked, setNrClicked] = useState(initialIndex);
  const [nrHovered, setNrHovered] = useState(initialIndex);

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
    navigate(path);
  };

  return (
    <Container>
      {isHovered && <HoverEffect nrHovered={nrHovered} />}
      {isClicked && <ClickedEffect nrClicked={nrClicked} />}
      <ComponentButton
        aria-label="Home"
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick(0, "/")}
      >
        <IoHome size="2rem" />
        <ButtonText>Home</ButtonText>
      </ComponentButton>
      <ComponentButton
        aria-label="Triple Color Animation"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick(1, "/triple-color-animation")}
      >
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Triple Color Animation</ButtonText>
      </ComponentButton>
      <ComponentButton
        aria-label="Reveal Animation"
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick(2, "/reveal-animation")}
      >
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Reveal Animation</ButtonText>
      </ComponentButton>
      <ComponentButton
        aria-label="Circle Tab Animation"
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick(3, "/circle-tab-animation")}
      >
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Circle Tab Animation</ButtonText>
      </ComponentButton>
      <ComponentButton
        aria-label="Char by char animation"
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick(4, "/char-by-char-animation")}
      >
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Char by char animation</ButtonText>
      </ComponentButton>
      <ComponentButton
        aria-label="Component 5"
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
