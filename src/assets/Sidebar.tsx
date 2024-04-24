import styled from "styled-components";
import { IoExtensionPuzzle } from "react-icons/io5";

const Sidebar = () => {
  return (
    <Container>
      <ComponentButton>
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Component 1</ButtonText>
      </ComponentButton>
      <ComponentButton>
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Component 2</ButtonText>
      </ComponentButton>
      <ComponentButton>
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Component 3</ButtonText>
      </ComponentButton>
      <ComponentButton>
        <IoExtensionPuzzle size="2rem" />
        <ButtonText>Component 4</ButtonText>
      </ComponentButton>
      <ComponentButton>
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
  background-color: white;
  text-align: start;
  height: 3rem;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgb(97, 208, 158);
  }
`;
const ButtonText = styled.span`
  padding-left: 10px;
`;
