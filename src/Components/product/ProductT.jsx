
import videos from "../../assets/mera3.mp4";
import "./ProductT.css";

const ProductT = () => {
  return (
    <div className="product2">
      <div className="product2-container">
        <div className="product2-left">
          
          <p>
            Bizleri sosyal medya üzerinden takip edebilir,Web sitemiz üzerinden detaylı bilgilere ulaşarak gelecek olan etkinliklerimiz hakkında bilgi alabilirsiniz.
          </p>
        </div>

        <div className="product2-right">
          <video className="image" autoPlay loop muted>
            <source src={videos} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default ProductT;
