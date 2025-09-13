import { FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <div className="h-[414px] pt-5 pb-10 gradient-footer text-white flex flex-col justify-between">
      <div className="flex items-end justify-between mx-10 pb-15 border-b-2 border-white">
        <div className="flex flex-col justify-center items-center gap-5">
          <div>
            <img
              sizes="100vh"
              className="w-[85px] h-[106px] "
              src="/images/logo/Asset 5@4x 1.svg"
              alt="fotter-logo"
            />
          </div>
          <p className="font-poppins">info@prognil.com</p>
        </div>
        <div className="flex gap-10">
          <Link to="https://wa.me/message/27RIUK4VMNQRK1">
            <FaWhatsapp size={32} />
          </Link>
          <Link to="https://www.linkedin.com/company/prognil/">
            <FaLinkedin size={32} />
          </Link>

          <Link to="https://www.facebook.com/Prognil">
            <FaFacebook size={32} />
          </Link>
        </div>
      </div>

      <div className="font-roboto flex justify-between mx-10">
        <h1>PROGNIL © 2024. All rights reserved.</h1>
        <ul className="flex gap-10">

          <Link to="/FAQ">
          FAQ
          </Link>
    
          <Link to="/privacy">Privacy Policy</Link>

          <Link to="/terms">Terms Of Us</Link>

          <Link to="/sales">Sales and Refunds</Link>

          <Link to="/legal">Legal</Link>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
