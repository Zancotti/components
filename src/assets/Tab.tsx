import { useState, useEffect } from "react";
import styled from "styled-components";

interface TabProps {
  animationDelay: number;
  text: string;
  tabWidth: number;
  backgroundColor: string;
  borderColor: string;
}

const Tab: React.FC<TabProps> = ({ animationDelay, text, tabWidth, backgroundColor, borderColor }) => {
  const [rounded, setRounded] = useState(false);
  const [slide, setSlide] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    <TabContainer $width={tabWidth}>
      <SingleTab
        $rounded={rounded}
        $isVisible={isVisible}
        $width={tabWidth}
        $backgroundColor={backgroundColor}
        $borderColor={borderColor}
      >
        <Text $slide={slide} $delay={animationDelay}>
          {text}
        </Text>
      </SingleTab>
    </TabContainer>
  );
};

export default Tab;

const TabContainer = styled.div<{ $width: number }>`
  display: flex;
  overflow: visible;
  position: relative;
  width: ${({ $width }) => `${$width}px`};
  height: 60px;
  margin-left: 20px;
`;

const SingleTab = styled.div<{
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
  border: ${({ $borderColor }) => `1px solid ${$borderColor}`};
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
