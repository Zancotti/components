import { useEffect, useState } from "react";
import Header from "./assets/Header";
import Sidebar from "./assets/Sidebar";
import styled from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HoverEffect from "./assets/HoverEffect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Startsida</div>,
  },
  {
    path: "/component1",
    element: <div>Component 1</div>,
  },
]);

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
      <SidebarHoverContainer>
        <Sidebar />
      </SidebarHoverContainer>
      <RouterProvider router={router} />
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
const SidebarHoverContainer = styled.div`
  position: relative;
`;
