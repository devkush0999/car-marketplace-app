import React from "react";
import  Header  from "./components/Header";
import Hero from "./components/Hero";
import "./home.css";
import Category from "./components/Category";
import MostSearchCar from './components/MostSearchCar'
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";


function Home() {
  return (
    <>
    {/* Header */}
    <Header />

    {/* Hero */}
    <Hero />

    {/* Category */}
    <Category/>

    {/* Most search Car*/}
    <MostSearchCar/>

    {/* infomation of the car */}
    <InfoSection />

    {/* footer section */}
    <Footer/>

    </>
  );
}

export default Home;
