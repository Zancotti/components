import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useInViewPort from "./UseInViewPort";
import { above } from "./MediaQueries";

interface RevealAnimationCanProps {
  id: string;
  src: string;
  alt: string;
  linearGradient: string;
  fruitSrc: string;
  fruitAlt: string;
}

const RevealAnimationCan: React.FC<RevealAnimationCanProps> = ({
  id,
  src,
  alt,
  linearGradient,
  fruitSrc,
  fruitAlt,
}) => {
  const targetRef = useRef<HTMLImageElement>(null);
  const inViewport = useInViewPort(targetRef, { threshold: 0.5 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inViewport);
  }, [inViewport]);

  return (
    <Container>
      <CanImage $isVisible={isVisible} ref={targetRef} id={id} src={src} alt={alt} />
      <AnimatedText $linearGradient={linearGradient} $isVisible={isVisible}>
        3$
      </AnimatedText>
      <FruitContainer $isVisible={isVisible} $linearGradient={linearGradient}>
        <FruitPicture $isVisible={isVisible} src={fruitSrc} alt={fruitAlt} />
      </FruitContainer>
    </Container>
  );
};

export default RevealAnimationCan;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: auto;
`;

const CanImage = styled.img<{ $isVisible: boolean }>`
  width: 50%;
  height: auto;
  transition: opacity 1s ease-in;
  transition-delay: ${({ $isVisible }) => ($isVisible ? "0ms" : "1000ms")};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  position: relative;
  z-index: 2;

  @media ${above("tablet")} {
    width: 60%;
  }

  @media ${above("laptop")} {
    width: 50%;
  }
`;

const FruitContainer = styled.div<{ $isVisible: boolean; $linearGradient: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 10vw;
  min-width: 50px;
  min-height: 50px;
  max-width: 300px;
  max-height: 300px;
  border-radius: 50%;
  background: ${({ $linearGradient }) => $linearGradient};
  position: absolute;
  z-index: 1;
  top: 70%;
  left: 50%;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? "translate(-150%, -50%)" : "translate(-50%, -50%)")};
  transition: ${({ $isVisible }) =>
    $isVisible
      ? "opacity 1.5s ease-in 1s, transform 1s ease-in-out 1s"
      : "opacity 1.5s ease-in 0ms, transform 1s ease-in-out 0ms"};
`;

const FruitPicture = styled.img<{ $isVisible: boolean }>`
  position: absolute;
  width: 80%;
  height: 80%;
  object-fit: cover;
  border-radius: 50%;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 1s ease-in;
`;

const AnimatedText = styled.div<{ $isVisible: boolean; $linearGradient: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 27%;
  right: 41.5%;
  z-index: 1;
  font-weight: 900;
  font-size: ${({ $isVisible }) => ($isVisible ? "24px" : "1px")};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? "translate(125%, -50%)" : "translate(-50%, -50%)")};
  transition: opacity 0.5s ease-in, transform 1s ease-in-out, font-size 1s ease-in-out;
  transition-delay: ${({ $isVisible }) => ($isVisible ? "1s" : "0ms")};
  min-width: 50px;
  min-height: 50px;
  max-width: 300px;
  max-height: 300px;
  border-radius: 50%;
  background: ${({ $linearGradient }) => $linearGradient};
  padding: 1.5rem;
  color: white;
`;
