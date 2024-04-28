import styled from "styled-components";

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <Container $isScrolled={isScrolled}>
      <Initials>SZ</Initials>
      <SecondaryTitleContainer>
        <SecondaryTitle $isScrolled={isScrolled}>Components</SecondaryTitle>

        <SecondaryTitle2 $isScrolled={isScrolled}>
          by{" "}
          <GitHubLink $isScrolled={isScrolled} href="https://github.com/Zancotti" target="_blank">
            Sabrina Zancotti
          </GitHubLink>
        </SecondaryTitle2>
      </SecondaryTitleContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div<{ $isScrolled: boolean }>`
  display: flex;
  padding: 0.5rem;
  background-color: ${({ $isScrolled }) => ($isScrolled ? "#242424" : "white")};
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.2s ease, color 0.2s ease;
`;

const Initials = styled.div`
  font-size: 2rem;
  padding: 0.5rem;
  border: 1px solid rgb(97, 208, 158);
  border-radius: 5px;
  background-color: rgb(97, 208, 158);
  font-weight: 700;
`;

const SecondaryTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 1rem;
`;

const SecondaryTitle = styled.div<{ $isScrolled: boolean }>`
  font-size: 1.75em;
  color: ${({ $isScrolled }) => ($isScrolled ? "rgb(97, 208, 158)" : "#000")};
  transition: color 0.2s ease;
  text-align: center;
`;

const SecondaryTitle2 = styled(SecondaryTitle)`
  font-size: 1rem;
`;

const GitHubLink = styled.a<{ $isScrolled: boolean }>`
  color: ${({ $isScrolled }) => ($isScrolled ? "rgb(97, 208, 158)" : "#000")};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ $isScrolled }) => ($isScrolled ? "white" : "rgb(97, 208, 158)")};
  }
`;
