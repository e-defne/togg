import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        
      </div>
      <div className="contact-bottom">
        <div className="container ">
          <div className="contact-titles">
            <h4>Bizimle iletişime geç</h4>
            <p>
              
            </p>
          </div>
          <div className="contact-elements">
            <form className="contact-form">
              <div className="">
                <label>
                  İsim ve Soyisminiz
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Email adresiniz
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Konu
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Mesajınız <span>*</span>
                </label>
                <textarea
                  id="author"
                  name="author"
                  type="text"
                  defaultValue=""
                  size="30"
                  required=""
                ></textarea>
              </div>
              <button className="btn btn-sm form-button">Mesaj Gönder</button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Meram/KONYA</strong>
                  <p className="contact-street">
                  Yenişehir Mh, Şehit Göksel Doğan Cd No:31, 42010 Meram/Konya
                  </p>
                  <b>
                    {" "}
                    <a href="Telefon: +90 534 567 88">
                      Telefon: 0332 503 09 69
                    </a>
                  </b>
                  <b>
                    <a href="mailto:Email: contact@example.com">
                      Email: iletisim@meramgelisim.com
                    </a>
                  </b>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
