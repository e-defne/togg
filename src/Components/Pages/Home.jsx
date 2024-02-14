import { useEffect, useState } from "react";
import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Main from "../Main/Main";
import Center from "../Center/Center";
import ProductV from "../product/ProductV";
import ProductT from "../product/ProductT";
import Productc from "../product/Productc";
import Footer from "../Footer/Footer";

const Home = () => {
  
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);

  return (
    <div>
      {" "}
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <Main />
      <Center />
      <ProductV />
      <ProductT />
      <Productc />
      <Footer />
    </div>
  );
};

export default Home;
