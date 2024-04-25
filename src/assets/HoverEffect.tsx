import styled from "styled-components";

interface HoverEffectProps {
  nrHovered: number;
}

const HoverEffect: React.FC<HoverEffectProps> = ({ nrHovered }) => <Hovered $nrHovered={nrHovered} />;

export default HoverEffect;

const Hovered = styled.div<{ $nrHovered: number }>`
  background-color: rgb(227, 227, 227);
  text-align: start;
  height: 3rem;
  display: flex;
  align-items: center;
  transition: background-color 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8), top 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
  border-radius: 5px;
  position: absolute;
  top: ${({ $nrHovered }) => `calc(${0.5 + $nrHovered * 3}rem)`};
  left: 0;
  z-index: -1;
  width: 250px;
  margin-left: 0.5rem;
  pointer-events: none;
`;
