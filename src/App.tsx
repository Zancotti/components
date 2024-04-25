import { useEffect, useState } from "react";
import Header from "./assets/Header";
import Sidebar from "./assets/Sidebar";
import styled from "styled-components";
import { Routes, Route, useNavigate } from "react-router-dom";

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

        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/component1" element={<div>Component 1</div>} />
          <Route path="/component2" element={<div>Component 2</div>} />
          <Route path="/component3" element={<div>Component 3</div>} />
          <Route path="/component4" element={<div>Component 4</div>} />
          <Route path="/component5" element={<div>Component 5</div>} />
        </Routes>
      </SidebarMainContainer>
      <EmptyContainer />
      <EmptyContainer />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr, 1fr, 1frs;
  flex-direction: column;
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
