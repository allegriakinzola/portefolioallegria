import Hero from "@/sections/Hero";
import Download from "../sections/Download";
import Features from "@/sections/Features";


export default function Home() {
  return (
    <div className="flex pt-20 w-full flex-col">
       {/* <Hero/> */}
      <Download/>
      <Features/>
      <Hero/>
    </div>
  );
}
