import Hero from "@/UI/Hero";
import NavBar from "@/UI/Navbar";
import AreaButton from "@/components/AreaButton";
import CtaButton from "@/components/CtaButton";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <NavBar />
      <Hero/>
    </main>
  );
}
