import { useTranslation } from "react-i18next";
import { projectsInfos } from "../../utils/projects-infos";

export function Clientes() {
  const { t } = useTranslation();
  return (
    <div className="client-wrapper center">
      <h2>{t("cases")}</h2>
      <div className="clients">
        {projectsInfos.map((client, index) => {
          return (
            <div className="client-item" key={index}>
              <img src={client.logo} />
              <p>{client.projeto}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
