"use client";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weights: [400, 500, 600, 700],
});
import Hero from "@/components/Hero";
import { SideBar } from "@/components/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className={`flex flex-1 max-h-screen overflow-hidden ${urbanist.className}`}
    >
      <SideBar />
      <Hero />
    </div>
  );
}
