import React from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "../components/Navigation";
import GlobalStyles from "../styles/GlobalStyle";
import { light } from "../styles/Themes";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import Roadmap from "../components/sections/Roadmap";
import Showcase from "../components/sections/Showcase";
import Team from "../components/sections/Team";
import Faq from "../components/sections/Faq";
import Footer from "../components/Footer";

const NFTsWebsite = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default NFTsWebsite;
