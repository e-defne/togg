import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="row">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>

          <div className="row">
            <ul>
              <li>
                <a href="#">İletişim</a>
              </li>
              <li>
                <a href="#">MEGA</a>
              </li>
              <li>
                <a href="#">Güvenlik Politikası</a>
              </li>
              <li>
                <a href="#">Şart Ve Koşullar</a>
              </li>
            </ul>
          </div>

          <div className="row">
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
