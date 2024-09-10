import Grid from "./../components/grid";
import HERO from "./../components/hero";
import Hero from "./../components/hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";

export default function Home() {
  return <main className="relative flex justify-center items-center
  flex-col overflow-hidden bg-black-200  mx-auto sm:px-10 px-5">
    <div className="w-full">
      <FloatingNav navItems={[{name:'home',link:'/'},{name:'about',link:'/about'}]}></FloatingNav>
      <HERO></HERO>
      <Grid></Grid>
    </div>
    </main>;
}
