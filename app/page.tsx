import Hero from "@/UI/Hero";
import NavBar from "@/UI/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-slate-300">
      <div className="w-full h-full bg-[url('/limsdesign.png')] absolute bg-center bg-cover  bg-no-repeat border z-10"></div>
      <div className="z-20 absolute w-full min-h-screen ">
        <NavBar />
        <Hero />
      </div>
    </main>
  );
}
