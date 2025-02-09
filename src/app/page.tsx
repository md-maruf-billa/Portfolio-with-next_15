import About from "@/components/customs/About";
import Banner from "@/components/customs/Banner";
import Skills from "@/components/customs/Skills";


export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <About />
      <Skills />

    </div>
  );
}
