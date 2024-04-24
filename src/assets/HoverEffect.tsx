import styled from "styled-components";

interface HoverEffectProps {
  nrHovered: number;
}

const HoverEffect: React.FC<HoverEffectProps> = ({ nrHovered }) => <Hovered $nrHovered={nrHovered} />;

export default HoverEffect;

const Hovered = styled.div<{ $nrHovered: number }>`
  background-color: white;
  text-align: start;
  height: 3rem;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
  border-radius: 5px;
  background-color: rgb(97, 208, 158);
  position: absolute;
  top: ${({ $nrHovered }) => `calc(${0.5 + $nrHovered * 3}rem)`};
  left: 0;
  z-index: -1;
  width: 250px;
  margin-left: 0.5rem;
  transition: background-color 0.2s, top 0.2s;
`;
