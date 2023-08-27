import Footer from "@/UI/Footer";
import Hero from "@/UI/Hero";
import NavBar from "@/UI/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="w-full h-full bg-[url('/limsdesign.png')] bg-center bg-cover  bg-no-repeat border z-10 fixed opacity-50"></div>
      <div className="z-20 absolute w-full h-screen">
        <NavBar />
        <Hero />
        <Footer/>
      </div>
    </main>
  );
}
