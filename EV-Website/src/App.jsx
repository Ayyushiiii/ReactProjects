import { useState } from "react";
import Background from "./components/Background/Background";

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
      </div>
    </>
  );
}

export default App;
