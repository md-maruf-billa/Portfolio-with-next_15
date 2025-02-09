import About from "@/components/customs/About";
import Banner from "@/components/customs/Banner";
import FeaturedProject from "@/components/customs/FeaturedProject";
import Skills from "@/components/customs/Skills";


export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      {/* <About /> */}
      <Skills />
      <FeaturedProject />

    </div>
  );
}
