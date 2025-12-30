import { projectsInfos } from "../../utils/projects-infos";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ActualSlide {
  actualSlide: number;
  showFixedButtons: boolean;
}

export function Content({ actualSlide, showFixedButtons }: ActualSlide) {
  const actualProject = projectsInfos[actualSlide];
  const { t } = useTranslation();

  return (
    <>
      <div className="content-project">
        <div
          className={`project-content-header ${
            showFixedButtons ? "hidden-btn" : "show-btn"
          }`}
        >
          <div className="center">
            <p>
              {t("techTitle")}: <span> {actualProject.extras[0]}</span>
            </p>

            <p className="client-project">
              {t("clientTitle")}: <span> {actualProject.projeto}</span>
              <img
                src={actualProject.pais}
                className="country"
                alt="icon country"
              />
            </p>

            <p>
              {t("segmentTitle")}: <span>{t(actualProject.extras[2])}</span>
            </p>
          </div>
        </div>

        <div
          className={`projects-counter ${
            showFixedButtons ? "hidden-btn" : "show-btn"
          }`}
        >
          <p>
            {actualSlide + 1} / {projectsInfos.length}
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={actualSlide}
            initial={{ opacity: 0, x: "-100px" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100px" }}
            className={`project-content-wrapper ${
              showFixedButtons ? "up" : "down"
            }`}
          >
            <div className={`center project-info ${actualSlide}`}>
              <div className="about-client">
                <h2 className="project-h2">
                  {t("projectsInfo.description.titleDescriptionClient")}
                </h2>
                <p>{t(actualProject.descricaoCliente)}</p>
              </div>

              <div className="separated-line"></div>

              <div className="project-wrapper">
                <div className="custom-pagination"></div>
                <>
                  <div className="project-objectives">
                    <h2 className="project-h2">
                      {t("projectsInfo.objectives.objectiveTitle")}
                    </h2>

                    <p>{t(actualProject.objetivo)}</p>
                  </div>

                   <div className="separated-line"></div>

                  <div className="challenge-project m-1">
                    <h2 className="project-h2">
                      {t("projectsInfo.description.titleChallengeProject")}
                    </h2>
                    <p>{t(actualProject.desafio)}</p>
                  </div>

                   <div className="separated-line"></div>

                  <div className="execution-project m-1">
                    <h2 className="project-h2">
                      {t("projectsInfo.description.titleExecutionProject")}
                    </h2>
                    <p>{t(actualProject.execucao)}</p>
                  </div>

                   <div className="separated-line"></div>

                  <div className="results-project m-1">
                    <h2 className="project-h2">
                      {t("projectsInfo.description.titleResultProject")}
                    </h2>
                    <p>{t(actualProject.resultados)}</p>
                  </div>

                  <div className="tecnologies-related">
                    <div className="center">
                      <p>{t("projectsInfo.techTitle")}</p>
                      <div className="tech-related-wrapper">
                        {projectsInfos[actualSlide].techs?.map(
                          (tech, index) => {
                            return (
                              <div className="related-tech" key={index}>
                                <img src={tech} alt="" className={`${tech.split('/').pop()?.split('.')[0] ?? ''}`} />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className={`project-content-header-fixed ${
          showFixedButtons ? "show-btn" : "hidden-btn"
        }`}
      >
        <div className="center-header-fixed">
          <p>
            {t("techTitle")}: <span> {actualProject.extras[0]}</span>
          </p>

          <p className="client-project">
            {t("clientTitle")}: <span> {actualProject.projeto}</span>
            <img
              src={actualProject.pais}
              className="country"
              alt="icon country"
            />
          </p>

          <p>
            {t("segmentTitle")}: <span>{t(actualProject.extras[2])}</span>
          </p>
        </div>

        <div
          className={`projects-counter-fixed ${
            showFixedButtons ? "show-btn" : "hidden-btn"
          }`}
        >
          <p>
            {actualSlide + 1} / {projectsInfos.length}
          </p>
        </div>
      </div>
    </>
  );
}
