import styled from "styled-components";
import CircleTab from "./CircleTab";
import Tab from "./Tab";

const CircleTabAnimation: React.FC = () => {
  return (
    <Container>
      <CircleTabContainer>
        <CircleTab
          animationDelay={0}
          text="Components"
          tabWidth={170}
          backgroundColor="rgb(97, 208, 158)"
          borderColor="rgb(97, 208, 158)"
          backgroundColorCircle="rgb(97, 208, 158)"
        />
        <CircleTab
          animationDelay={2}
          text="by"
          tabWidth={50}
          backgroundColor="transparent"
          borderColor="rgb(97, 208, 158)"
          backgroundColorCircle=" rgb(217, 105, 242)"
        />
      </CircleTabContainer>
      <Tab
        animationDelay={4}
        text="Sabrina Zancotti"
        tabWidth={220}
        backgroundColor="rgb(217, 105, 242)"
        borderColor="rgb(217, 105, 242)"
      />
    </Container>
  );
};

export default CircleTabAnimation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CircleTabContainer = styled.div`
  display: flex;
`;
