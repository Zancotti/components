import { useEffect, useState } from "react";
import Header from "./assets/Header";
import Sidebar from "./assets/Sidebar";
import styled from "styled-components";

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Header isScrolled={scrolled} />
      <Sidebar />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
`;
