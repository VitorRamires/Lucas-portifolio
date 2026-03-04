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
          spaceBetween={10}
          breakpoints={{
            460: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          centeredSlides={true}
          parallax={true}
          autoplay={{ delay: 3000 }}
          speed={3000}
          className="mySwiper"
        >
          {allProjects.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="client-item">
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
