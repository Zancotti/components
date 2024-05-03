import styled from "styled-components";
import RevealAnimationCan from "./RevealAnimationCan";

const RevealAnimation: React.FC = () => {
  const gradientStrawberry = "linear-gradient(135deg, #ff5858, #f06d6b, #c04848, #8f0f0f, #a4c639)";
  const gradientLemon = "linear-gradient(135deg, #ffd700, #ffcd02, #ffbc00, #f0a500, #e69500)";
  const gradientPear = "linear-gradient(135deg,#60D394, #1D976C, #1A806A, #00685E, #004D47)";

  return (
    <Container>
      <RevealAnimationCan
        id="StawberryCan"
        src="/StrawberryCan.webp"
        alt="A picture of a Strawberry Soda can"
        linearGradient={gradientStrawberry}
      />
      <RevealAnimationCan
        id="LemonCan"
        src="/LemonCan.webp"
        alt="A picture of a Lemon Soda can"
        linearGradient={gradientLemon}
      />
      <RevealAnimationCan
        id="AppleCan"
        src="/AppleCan.webp"
        alt="A picture of a Apple Soda can"
        linearGradient={gradientPear}
      />
    </Container>
  );
};

export default RevealAnimation;

const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
