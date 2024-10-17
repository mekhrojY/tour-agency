import React from "react";
import Navbar from "./components/navbar/navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeComponent from "./components/home/home";
import DestinationsComponent from "./components/destinations";
import { BgWrapper } from "./components/styles/navbarStyle";

const home = require("./assets/images/bg-home.png");
const aboutUs = require("./assets/images/about-us.png");
const destinations = require("./assets/images/destinations.png");
const tours = require("./assets/images/tours.png");

const RouterComponent = () => {
  const location = useLocation();
  type Path =
    | "/"
    | "/about-us"
    | "/destinations"
    | "/tours"
    | "/blog"
    | "/contacts";
  const bgImages: Record<Path, string> = {
    "/": home,
    "/about-us": aboutUs,
    "/destinations": destinations,
    "/tours": tours,
    "/blog": tours,
    "/contacts": tours,
  };

  const currentBgImage: string =
    bgImages[location.pathname as Path] || bgImages["/"];
  console.log(location.pathname === "/");

  return (
    <>
      <Navbar />
      <BgWrapper $bgImage={currentBgImage} fullHeight={location.pathname === "/"}>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about-us" element={<HomeComponent />} />
          <Route path="/destinations" element={<DestinationsComponent />} />
          <Route path="/tours" element={<HomeComponent />} />
          <Route path="/blog" element={<HomeComponent />} />
          <Route path="/contacts" element={<HomeComponent />} />
        </Routes>
      </BgWrapper>
    </>
  );
};

export default RouterComponent;
