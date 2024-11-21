"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const MusicSchoolContent = [
    
    {
      title: " Harmony Academy",
      description:
        "Unlock your musical potential with expert instructors and personalized lessons at Harmony Academy. From classical to contemporary, we nurture talent at every level, helping you create melodies that inspire.",

    },
    {
      title: " Melody Makers Music School",
      description:
    "Where passion meets professionalism! At Melody Makers, we offer a wide range of programs, including instrument mastery, vocal training, and music theory, designed to bring out the artist in you.",


    },
    {
      title: "The Sound Lab",
      description:
        "Discover the art of music in a dynamic and creative environment. The Sound Lab blends tradition and innovation, offering hands-on learning in instruments, vocals, and digital music production.",

    },
  ];



const WhyChooseUs = () => {
  return (
    <div className="">
        
        <StickyScroll content={MusicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs