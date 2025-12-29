import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";

export function Sobre() {
  const [aboutOption, ] = useState("resumo");
  const ref = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  const age =
    new Date().getFullYear() -
    1993 -
    (new Date() < new Date(`${new Date().getFullYear()}-07-21`) ? 1 : 0);



  return (
    <>
      <div className="about" id="about" ref={ref}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-100px", once: true }}
        >
          {t("aboutTitle")}
        </motion.h2>

        <div className="about-decoration"></div>

        
        <div className="about-panel">
          <div
            className={`resume ${aboutOption === "resumo" ? "optionOn" : ""}`}
            data-option="resumo"
          >
            <p>{t("aboutInfo.resume")}</p>
          </div>
        </div>

        <div className="extra-details">
          <p>
            <Trans
              i18nKey="aboutInfo.extra.expDetail"
              components={{ span: <span /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey="aboutInfo.extra.langDetail"
              components={{ span: <span /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey="aboutInfo.extra.reach"
              components={{ span: <span /> }}
            />
          </p>
          <p>
            {t("aboutInfo.extra.yearsOld.age")}:{" "}
            <span>
              {age} {t("aboutInfo.extra.yearsOld.year")}
            </span>
          </p>
        </div>


      </div>
    </>
  );
}
