import mainImage from "../../../../src/assets/images/lucas.png";
import decorationMainImage from "../../../../src/assets/icons/main-image.svg";
import { BannerCards } from "./cards";

export function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner-content">
          <div className="name-role">
            <div className="wrap-name-role">
              <p className="name">
                Lucas Martins <span>Ramires</span>
              </p>
              <p className="role">
                Gerente de projetos <span>internacional</span>
              </p>
            </div>
          </div>
          <div className="main-image">
            <img className="image" src={mainImage} alt="" />
            <img
              className="decoration-image"
              src={decorationMainImage}
              alt=""
            />
          </div>
        </div>
        <div className="overlay"></div>
        <div className="banner-bg"></div>
      </div>
      <BannerCards />
    </>
  );
}
