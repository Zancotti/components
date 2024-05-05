import { useState, useEffect } from "react";
import styled from "styled-components";

interface CircleTabProps {
  animationDelay: number;
  text: string;
  tabWidth: number;
  backgroundColor: string;
  backgroundColorCircle: string;
  borderColor: string;
}

const CircleTab: React.FC<CircleTabProps> = ({
  animationDelay,
  text,
  tabWidth,
  backgroundColor,
  borderColor,
  backgroundColorCircle,
}) => {
  const [rounded, setRounded] = useState(false);
  const [slide, setSlide] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // State to handle visibility

  useEffect(() => {
    const roundTimeoutId = setTimeout(() => {
      setRounded(true);
    }, 1000 + animationDelay * 1000);

    const slideTimeoutId = setTimeout(() => {
      setSlide(true);
    }, 1200 + animationDelay * 1000);

    const visibleTimeoutId = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);

    return () => {
      clearTimeout(roundTimeoutId);
      clearTimeout(slideTimeoutId);
      clearTimeout(visibleTimeoutId);
    };
  }, [animationDelay]);

  return (
    <CircleTabContainer $width={tabWidth}>
      <Tab
        $rounded={rounded}
        $isVisible={isVisible}
        $width={tabWidth}
        $backgroundColor={backgroundColor}
        $borderColor={borderColor}
      >
        <Text $slide={slide} $delay={animationDelay}>
          {text}
        </Text>
      </Tab>
      <Circle $slide={slide} $delay={animationDelay} $backgroundColor={backgroundColorCircle} />
    </CircleTabContainer>
  );
};

export default CircleTab;

const CircleTabContainer = styled.div<{ $width: number }>`
  display: flex;
  overflow: visible;
  position: relative;
  width: ${({ $width }) => `${$width + 60}px`};
  height: 60px;
  margin-left: 20px;
`;

const Tab = styled.div<{
  $rounded: boolean;
  $isVisible: boolean;
  $width: number;
  $backgroundColor: string;
  $borderColor: string;
}>`
  height: 40px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: ${({ $rounded }) => ($rounded ? "20px" : "50%")};
  width: ${({ $rounded, $width }) => ($rounded ? `${$width}px` : "20px")};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: all 1s ease;
  position: absolute;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ $borderColor }) => `1px solid ${$borderColor}`};
`;

const Circle = styled.div<{ $slide: boolean; $delay: number; $backgroundColor: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 50%;
  position: absolute;
  right: 5px;
  top: 20px;
  transform: translateY(-50%);
  opacity: ${({ $slide }) => ($slide ? 1 : 0)};
  width: ${({ $slide }) => ($slide ? "40px" : "10px")};
  height: ${({ $slide }) => ($slide ? "40px" : "10px")};
  transition: all 1s ease;
`;

const Text = styled.span<{ $slide: boolean; $delay: number }>`
  font-size: 16px;
  position: absolute;
  text-align: center;
  width: 100%;
  left: ${({ $slide }) => ($slide ? "0px" : "-100%")};
  opacity: ${({ $slide }) => ($slide ? 1 : 0)};
  transition: all 1s ease;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
