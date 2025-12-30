import { useTranslation } from "react-i18next";
import { projectsInfos } from "../../utils/projects-infos";
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
          slidesPerView={2}
          spaceBetween={50}
          loop={true}
          centeredSlides={false}
          parallax={true}
          autoplay={{ delay: 3000 }}
          speed={3000}
          className="mySwiper"
        >
          {projectsInfos.map((client, index) => {
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
