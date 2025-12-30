import { useTranslation } from "react-i18next";
import { allProjects } from "../../utils/projects-infos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export function Clientes() {
  const { t } = useTranslation();
  return (
    <div className="client-wrapper center">
      <h2>{t("cases")}</h2>
      <div className="clients">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          parallax={true}
          autoplay={{ delay: 3000 }}
          speed={3000}
          className="mySwiper"
        >
          {allProjects.map((client, index) => {
            return (
              <SwiperSlide>
                <div className="client-item" key={index}>
                  <img src={client.logo} />
                  <p>{client.projeto}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
