import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface CharByCharProps {
  wordsArray: string[];
}

const CharByChar: React.FC<CharByCharProps> = ({ wordsArray }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [charsIsVisible, setCharsIsVisible] = useState<boolean[]>([]);
  const [animationDirection, setAnimationDirection] = useState<string>("right");

  const currentWord = wordsArray[currentWordIndex];
  const arrayOfLetters = currentWord.split("");

  useEffect(() => {
    const boolArray = arrayOfLetters.map(() => false);
    setCharsIsVisible(boolArray);
  }, [currentWord]);

  const updateRightValue = () => {
    let index: null | number = null;
    charsIsVisible.forEach((bool, ind) => {
      if (index === null && bool === false) {
        index = ind;
        const newBoolArray = charsIsVisible.slice();
        newBoolArray[index] = true;
        setCharsIsVisible(newBoolArray);
      }
    });
  };

  const updateLeftValue = () => {
    let index: null | number = null;
    for (let ind = charsIsVisible.length - 1; ind >= 0; ind--) {
      if (index === null && charsIsVisible[ind] === true) {
        index = ind;
        const newBoolArray = charsIsVisible.slice();
        newBoolArray[index] = false;
        setCharsIsVisible(newBoolArray);
      }
    }
  };

  useEffect(() => {
    if (charsIsVisible.every((value) => value === false) && animationDirection === "left") {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsArray.length);
      setAnimationDirection("right");
      return;
    }

    if (charsIsVisible.every((value) => value === true)) {
      setAnimationDirection("left");
    }

    const timeoutId = setTimeout(() => {
      if (animationDirection === "right") {
        updateRightValue();
      } else if (animationDirection === "left") {
        updateLeftValue();
      }
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [charsIsVisible, animationDirection, wordsArray.length]);

  const letterElements = arrayOfLetters.map((letter, index) => {
    const isVisible = charsIsVisible[index];
    return (
      <LetterContainer key={`${index}-${letter}-${currentWord}`} $isVisible={isVisible} $index={index}>
        {letter}
      </LetterContainer>
    );
  });

  return <div>{letterElements}</div>;
};

export default CharByChar;

const LetterContainer = styled.span<{ $isVisible: boolean; $index: number }>`
  color: rgb(97, 208, 158);
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  font-weight: bold;
  margin: 1px;
  display: inline-block;
`;
