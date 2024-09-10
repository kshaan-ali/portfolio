"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import NewButton from "./ui/newButton";

const HERO = () => {
  return (
    <div className="pb-20 pt-10">
      <div>
        <Spotlight className="-top-40 -left-10 h-screen md:-top-20 md:-left-20"></Spotlight>
        <Spotlight className="top-40 left-full h-3/4 " fill="red"></Spotlight>
        <Spotlight
          className="-top-40 left-1/3 h-screen "
          fill="brown"
        ></Spotlight>
      </div>
      <div
        className="h-[50rem] w-full dark:bg-black-200 bg-white  
      dark:bg-grid-white/[0.06] bg-grid-black/[0.2] relative flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center 
      justify-center dark:bg-black-200 bg-white 
      [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        ></div>
        <div className="flex justify-center relative z-10 my-20">
          <div className="flex flex-col items-center justify-center max-w-screen-lg">
            <h1
              className=" max-w-80 uppercase tracking-widest
            text-red-200"
            >
              Dynamic website using nextjs
            </h1>
            <div className="flex flex-col justify-center items-center max-w-full lg:w-3/4 ">
              <TextGenerateEffect
                className=" text-center text-4xl md:text-red-600"
                words="Where Web2 Meets Web3: Bridging the Gap Through Technology."
              ></TextGenerateEffect>
              <p className="text-center ">
                Hi Im Shaan Ali, Full Stack Web Developer based in India.
              </p>
              <a href="#about">
              <NewButton></NewButton>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HERO;
