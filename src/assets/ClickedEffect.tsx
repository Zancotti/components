import styled from "styled-components";

interface ClickedEffectProps {
  nrClicked: number;
}

const ClickedEffect: React.FC<ClickedEffectProps> = ({ nrClicked }) => <Clicked $nrClicked={nrClicked} />;

export default ClickedEffect;

const Clicked = styled.div<{ $nrClicked: number }>`
  background-color: white;
  text-align: start;
  height: 3rem;
  display: flex;
  align-items: center;
  transition: background-color 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8), top 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
  border-radius: 5px;
  background-color: rgb(97, 208, 158);
  position: absolute;
  top: ${({ $nrClicked }) => `calc(${0.5 + $nrClicked * 3}rem)`};
  left: 0;
  z-index: -1;
  width: 250px;
  margin-left: 0.5rem;
`;
