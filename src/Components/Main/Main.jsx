import videos from "../../assets/mega1.mp4";
import "./Main.css";
const Main = () => {
  return (
    <div className="Main">
      <div className="main-container">
        <div className="text-container-right">
          <h2>Mega Nedir?</h2>
          <p>
          Toplum hayatı açısından ilerlemek ve mesafe kat edebilmek için bir neslin kendinden sonraki nesle aktaracağı tecrübe ve birikimlerle mümkün olacağı bilinen temel bir gerçektir. Günümüzde giderek karmaşıklaşan bilgi ve becerileri kazanabilen ve bu bilgilerin hızlı değişimine ayak uydurabilen bireylerin yetiştirilmesine ihtiyaç duyulmaktadır.

Bu kapsamda YENİ NESİL EĞİTİM PROJESİ ile hem dijital bir çağda doğmuş ve büyümüş olan “yeni neslin” yani z kuşağı ve Alfa kuşağının farklılaşan eğitim beklentilerine cevap vermek hem de önceki nesillerin kültürel aktarımını gerçekleştirecek ve nesiller arası iletişimi kuvvetlendirecek “yeni” bir çalışmadır.

Temel eğitim, ortaöğretim, yüksek öğretim kurumları, sivil toplum kuruluşları ve meslek birliklerinin paydaşlığında bireylerin karakter eğitimi gerçekleştirilecektir.
          </p>
      

        </div>
        <div className="image-container-left">
          <video className="image" autoPlay loop muted>
            <source src={videos} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Main;
