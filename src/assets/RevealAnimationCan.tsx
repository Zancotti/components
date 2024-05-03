import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useInViewPort from "./UseInViewPort";
import { above } from "./MediaQueries";

interface RevealAnimationCanProps {
  id: string;
  src: string;
  alt: string;
  linearGradient: string;
}

const RevealAnimationCan: React.FC<RevealAnimationCanProps> = ({ id, src, alt, linearGradient }) => {
  const targetRef = useRef<HTMLImageElement>(null);
  const inViewport = useInViewPort(targetRef, { threshold: 0.5 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inViewport);
  }, [inViewport]);

  return (
    <Container>
      <CanImage $isVisible={isVisible} ref={targetRef} id={id} src={src} alt={alt} />
      <FruitContainer $isVisible={isVisible} $linearGradient={linearGradient}>
        <FruitPicture $isVisible={isVisible} src="/StrawberriesImage.webp" />
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
  /* background: linear-gradient(135deg, #ff5858, #f06d6b, #c04848, #8f0f0f, #a4c639); */
  position: absolute;
  z-index: 1;
  top: 70%;
  left: 50%;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? "translate(-150%, -50%)" : "translate(-50%, -50%)")};
  transition: opacity 1.5s ease-in, transform 1s ease-in-out;
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
