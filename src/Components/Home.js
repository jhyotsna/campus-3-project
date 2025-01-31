import React from "react";
import HomeHeader from "./HomeHeader";
import Carousel from "./Carousel";
import Utilities from "./Utilities";
import Events from "./Event";
import About from "./About";
import HomeFooter from "./HomeFooter";
import Student from "./Student";
const Home=()=>{
    return(
        <>
        <div>
        <HomeHeader />
        <Carousel/>
        <section id ="utilities"><Utilities /></section>
        <Student />
        <section id="events"><Events /></section>
        <section id="about"><About /></section>
        <HomeFooter />
         </div>
            
        </>
    );
}
export default Home;

