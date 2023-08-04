import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Testimonial />
      <Footer />
    </>
  );
};

export default HomePage;
