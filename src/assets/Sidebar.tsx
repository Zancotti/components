import styled from "styled-components";
import { IoExtensionPuzzle, IoHome } from "react-icons/io5";
import HoverEffect from "./HoverEffect";
import ClickedEffect from "./ClickedEffect";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const paths = [
    { path: "/", label: "Home", icon: <IoHome size="2rem" /> },
    { path: "/triple-color-animation", label: "Triple Color Animation", icon: <IoExtensionPuzzle size="2rem" /> },
    { path: "/reveal-animation", label: "Reveal Animation", icon: <IoExtensionPuzzle size="2rem" /> },
    { path: "/circle-tab-animation", label: "Circle Tab Animation", icon: <IoExtensionPuzzle size="2rem" /> },
    { path: "/char-by-char-animation", label: "Char by char animation", icon: <IoExtensionPuzzle size="2rem" /> },
    { path: "/logotype-slider", label: "Logotype Slider", icon: <IoExtensionPuzzle size="2rem" /> },
  ];

  const findCurrentIndex = () => {
    const currentPath = location.pathname;
    const currentIndex = paths.findIndex((pathObj) => pathObj.path === currentPath);
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
      {paths.map((pathObj, index) => (
        <ComponentButton
          key={index}
          aria-label={pathObj.label}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleButtonClick(index, pathObj.path)}
        >
          {pathObj.icon}
          <ButtonText>{pathObj.label}</ButtonText>
        </ComponentButton>
      ))}
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
