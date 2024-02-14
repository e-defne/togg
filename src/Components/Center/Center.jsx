
import mera2 from "../../assets/mera2.mp4";
import "./Center.css";

const Center = () => {
  return (
    <div className="image-center">
      
      <div className="image-center">
          <video className="image" autoPlay loop muted>
            <source src={mera2} type="video/mp4" />
          </video>
        </div>
        <div className="center1-container">
        <div className="center1-left">
          <br></br>
          <h2>HEDEFLERİMİZ</h2>
          <p>
          Toplumsal kabule mazhar olmuş, insan onurundan ve kutsal değerlerden referans alan; erdeme dönüşmüş değerlerle ahlaki karakter çerçevesi oluşturmak ve yeni neslin bu ahlaki karakteri içselleştirmesini sağlamaktır.

Ahlaki karakterin hayat tecrübeleri ile bireyin kişiliğine ve kapasitesine işlenmesini gerçekleştirmektir.

Bireylerin, teknolojiyi kullanarak nasıl üretebileceklerini keşfetmelerinin yanında; güvenli, etik ve ahlaki değerleri özümseyerek, bilimsel araştırma yöntemleri ve teknoloji ile belirlediği süreci, eğitmenleri ile değerlendirip güncelleyen bir yapı oluşturmaktır.

Eğitim-öğretim paydaşlarının iş birliklerini arttırmak üzere, değerler eğitimi çalışmalarına yardımcı olacak malzeme ve materyal desteği sunmak.
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default Center;