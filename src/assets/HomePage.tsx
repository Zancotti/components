import styled from "styled-components";

const HomePage: React.FC = () => {
  return (
    <BackgroundDiv>
      <HomeContentContainer aria-label="Home Page">
        <DivWithDots>
          <TextContainer>
            <AccentHeading>Explore My Playground</AccentHeading>
            <Heading>Welcome to the home of my experiments</Heading>
            As a dedicated coder passionate about continuous learning and growth, I've created this website to be able
            to experiment with frontend development. Enjoy!
          </TextContainer>
        </DivWithDots>
      </HomeContentContainer>
    </BackgroundDiv>
  );
};

export default HomePage;

const BackgroundDiv = styled.div`
  padding: 0.1rem;
  background-color: black;
  border-radius: 1.5rem;
`;

const HomeContentContainer = styled.main`
  display: grid;
  border-radius: 1.5rem;
  width: 640px;
  padding: 1rem;
  border: 1px solid rgb(255 255 255 / 5%);
  background-color: rgb(16 16 16);
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: rgb(255 255 255 / 75%);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: -1px;
    top: 65%;
    height: 70px;
    width: 1px;
    background: linear-gradient(transparent, rgb(97, 208, 158), transparent);
    opacity: 0;
    transition: top 600ms ease, opacity 600ms ease;
  }

  &:hover::after {
    top: 25%;
    opacity: 1;
  }
`;

const Heading = styled.h2`
  font-size: 2.6rem;
  margin: 0;
  color: white;
  font-weight: bold;
`;

const AccentHeading = styled.h3`
  font-size: 0.7rem;
  margin: 0;
  font-weight: bold;
  color: rgb(97, 208, 158);
  text-transform: uppercase;
  text-align: center;
`;

const DivWithDots = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-image: radial-gradient(rgba(97, 208, 158, 0.473) 1px, transparent 1px);
  background-position: 50% 50%;
  background-size: 1.1rem 1.1rem;
  padding: 4rem;
  border-radius: 1.25rem;
  overflow: hidden;
`;
const TextContainer = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
