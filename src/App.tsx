import { useEffect, useState } from "react";
import Header from "./assets/Header";
import Sidebar from "./assets/Sidebar";
import styled from "styled-components";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import HomePage from "./assets/HomePage";
import TripleColorAnimation from "./assets/TripleColorAnimation";
import RevealAnimation from "./assets/RevealAnimation";

const App = () => {
  const navigate = useNavigate();
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
      <SidebarMainContainer>
        <SidebarContainer>
          <Sidebar navigate={navigate} />
        </SidebarContainer>
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/triple-color-animation" element={<TripleColorAnimation />} />
            <Route path="/reveal-animation" element={<RevealAnimation />} />
            <Route path="/component3" element={<div>Component 3</div>} />
            <Route path="/component4" element={<div>Component 4</div>} />
            <Route path="/component5" element={<div>Component 5</div>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Main>
      </SidebarMainContainer>
      <EmptyContainer />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr, 1fr, 1fr;
  width: 100%;
  height: 100dvh;
`;
const EmptyContainer = styled.div`
  height: 100dvh;
`;
const SidebarMainContainer = styled.div`
  display: flex;
`;
const SidebarContainer = styled.div`
  position: relative;
`;

const Main = styled.main`
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;
