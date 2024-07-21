import React from "react";
import Hero from "@/components/hero/Hero";
import PopularLocations from "@/components/popular-locations/PopularLocations";


export default function Home() {
  return (
    <>
    <Hero />
    <PopularLocations />
    <Hero />
    </>
  );
}
