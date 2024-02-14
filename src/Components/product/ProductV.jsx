
import "./ProductV.css";
import mera1 from "../../assets/mera1.mp4";
const ProductV = () => {
  return (
    <div className="product1">
      <div className="product1-container">
        
        <div className="product1-right">
          <video className="image" autoPlay loop muted>
            <source src={mera1} type="video/mp4" />
          </video>
        </div>
        <div className="product1-left">
          <h2>BİRLİKTE YÖNETİYORUZ</h2>
          
          <p>
          Meram Belediyesinin hayata geçirdiği yeni nesil eğitim projesi Meram Gelişim Akademisi (MEGA), her yıl 75 bin öğrencinin hayatına dokunuyor. Ahlaki karakter eğitimini merkeze alarak yeni nesli, yeni nesil eğitim yöntemleriyle tanıştıran ve bilim, sanat, yaşam, doğa, sağlık ve spor eğitimleriyle yeni bir çığır açan MEGA ortaya koyduğu projelerle her yıl olduğu gibi 2023’ün de yıldızı oldu.
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductV;
