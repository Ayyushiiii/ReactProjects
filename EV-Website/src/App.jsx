import { useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  let heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "Your passions" },
    { text1: "Give in to", text2: "Your passions" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <>
      <div>
        <Background playStatus={playStatus} heroCount={heroCount}></Background>
        <Navbar></Navbar>
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          playStatus={playStatus}
          setHeroCount={setHeroCount}
        ></Hero>
      </div>
    </>
  );
}

export default App;
