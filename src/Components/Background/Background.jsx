
import image1 from "../../assets/mega1.jpg";
import image2 from "../../assets/mega2.jpg";
import image3 from "../../assets/mega3.jpg";
import PropTypes from "prop-types";
import "./Background.css";

const Background = ({ playStatus, heroCount }) => {
   if(playStatus) {
    return (
      <video className="background fade-in item" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background item" alt=""></img>;
  } else if (heroCount === 1) {
    return <img src={image2} className="background item" alt=""></img>;
  } else if (heroCount === 2) {
    return <img src={image3} className="background item" alt=""></img>;
  }
};

export default Background;
Background.propTypes = {
  heroCount: PropTypes.number.isRequired,
  playStatus: PropTypes.string,
};
