import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../../../images/bg2.jpg";
import logo from "../../../images/logo-white-footer.htm";
const FooterStyle = styled.footer`
  background: url(${image});
  height: 600px;
  margin-top: 50px;
  color: white;
  .black-layer {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    background-color: #000000d1;
  }
  .col.logo {
    img {
      width: fit-content;
    }
    div {
      display: flex;
      flex-direction: row-reverse;
      span {
        color: #f2184f;
        margin-top: 3px;
      }
      p {
        color: #8d8d8d;
        margin: 0px;
      }
    }
  }
  .col.link {
    h4 {
      text-align: center;
    }
    ul {
      direction: rtl;
      li {
        border-bottom: 1px dashed #8d8d8d4e;
        padding: 10px;
        padding-right: 15px;
        a {
          /* display: block; */
          text-decoration: none;
          color: #8d8d8d;
          font-size: 16px;
          :hover {
            color: white;
          }
          transition: all .5s;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className="black-layer pt-5">
        <div className="container">
          <div className="top">
            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
              <div className="col link">
                <h4>لینک‌های مفید</h4>
                <ul className="list-unstyled p-1">
                  <li>
                    <Link to="/">درباره‌ی ما</Link>
                  </li>
                  <li>
                    <Link to="/">دره‌های ما</Link>
                  </li>
                  <li>
                    <Link to="/">اشتراک ویژه</Link>
                  </li>
                  <li>
                    <Link to="/">گالری</Link>
                  </li>
                  <li>
                    <Link to="/">خرید</Link>
                  </li>
                </ul>
              </div>
              <div className="col logo d-flex flex-column">
                <img src={logo} alt="image for logo" className="align-self-end" />
                <p style={{ color: "#666666" }} className="my-3">
                  ایران، تهران، میدان آزادی، کنار برج میلاد، خیابان امام حسین
                </p>
                <div className="my-1">
                  <span class="icon-call"></span>
                  <p className="ms-2">+98 911 488 0469</p>
                </div>
                <div className="my-1">
                  <span class="icon-email"></span>
                  <p className="ms-2">myemail@gmail.com</p>
                </div>
                <div className="my-1">
                  <span class="icon-globe"></span>
                  <p className="ms-2">www.mywebsite.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};
export default Footer;
