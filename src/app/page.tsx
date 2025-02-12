import Banner from "@/components/customs/Banner";
import FeaturedProject from "@/components/customs/FeaturedProject";
import Skills from "@/components/customs/Skills";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <Skills />
      <FeaturedProject />

    </div>
  );
}

export default Home
