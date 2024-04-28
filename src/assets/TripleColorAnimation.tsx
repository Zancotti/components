import { useEffect, useState } from "react";
import styled from "styled-components";

const TripleColorAnimation: React.FC = () => {
  const colors = ["#96e6b3", "#da3e52", "#f2e94e"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + colors.length) % colors.length);
    }, 1000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <BackgroundDiv>
      {colors.map((color, idx) => (
        <HeadingText key={color} $color={colors[(index + idx) % colors.length]}>
          Zancotti
        </HeadingText>
      ))}
    </BackgroundDiv>
  );
};

export default TripleColorAnimation;

const BackgroundDiv = styled.div`
  background-color: black;
  border-radius: 1.5rem;
  width: 640px;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 5.1rem;
`;

const HeadingText = styled.h2<{ $color: string }>`
  text-transform: uppercase;
  font-size: 6rem;
  color: ${({ $color }) => $color};
`;
