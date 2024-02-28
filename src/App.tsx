import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="mx-auto mt-[28px] flex min-w-[375px] max-w-[1110px] flex-col items-center justify-center md:mt-[89px]">
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
      </div>
    </>
  );
}

export default App;
