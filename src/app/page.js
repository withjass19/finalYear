'use client'
import React from 'react';
import About1 from "@/components/About1";
import Back from "@/components/Back";
import BrowseGenres from "@/components/BrowseGenres";
import Buttom from "@/components/Buttom";
import FooterData from "@/components/Footer";
import Hero from "@/components/Hero";
import HowWork from "@/components/HowWork";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <div className="scroll-smoth snap-y">
          <Navbar/>
        <div className="animation-slide relative min-h-screen w-full m-0">
          <Hero/>
        </div>
        <div classNamroutre="animation-slide relative">
          <About1/>
        </div>
        <div className="animation-slide relative">
          <HowWork/>
        </div>
        <div className="animation-slide relative min-h-screen w-full m-0">
          <BrowseGenres/>
        </div>
        <div className="animation-slide relative min-h-screen w-full m-0">
          <Buttom/>
          <Back/>
          {/* <About/> */}
          {/* <Community/> */}
          <FooterData/>
        </div>
      </div>
    </div>
  );
}
