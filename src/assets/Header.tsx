import styled from "styled-components";

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <Container $isScrolled={isScrolled}>
      <Initials $isScrolled={isScrolled}>SZ</Initials>
      <SecondaryTitle $isScrolled={isScrolled}>Components by Sabrina Zancotti</SecondaryTitle>
    </Container>
  );
};

export default Header;

const Container = styled.div<{ $isScrolled: boolean }>`
  display: flex;
  text-align: center;
  padding: 0.5rem;
  background-color: ${({ $isScrolled }) => ($isScrolled ? "#000" : "rgb(193, 225, 193)")};
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.2s ease, color 0.2s ease;
`;

const Initials = styled.div<{ $isScrolled: boolean }>`
  font-size: 2rem;
  padding: 0.5rem;
  border: ${({ $isScrolled }) => ($isScrolled ? "1px solid rgb(193, 225, 193)" : "1px solid black")};
  background-color: ${({ $isScrolled }) => ($isScrolled ? "rgb(193, 225, 193)" : "#000")};
  color: ${({ $isScrolled }) => ($isScrolled ? "#000" : "rgb(193, 225, 193)")};
  transition: background-color 0.2s ease, color 0.2s ease;
`;
const SecondaryTitle = styled.div<{ $isScrolled: boolean }>`
  font-size: 1rem;
  align-self: center;
  margin: 0 auto;
  color: ${({ $isScrolled }) => ($isScrolled ? "rgb(193, 225, 193)" : "#000")};
  transition: color 0.2s ease;
`;
