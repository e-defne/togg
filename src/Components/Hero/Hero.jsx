import "./Hero.css";


import PropTypes from "prop-types";
const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <img
            style={{ width: "4px" }}
            onClick={() => setPlayStatus(!playStatus)}
            
          />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
Hero.propTypes = {
  heroCount: PropTypes.number.isRequired,
  setHeroCount: PropTypes.number,
  heroData: PropTypes.string,
  playStatus: PropTypes.string,
  setPlayStatus: PropTypes.string,
};
