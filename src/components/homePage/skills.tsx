import { aboutInformation } from "../../utils/about";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation();

  return (
    <div className="skills-wrapper center">
      <h2>Skills</h2>
      <div className="skills">
        <ul>
          {aboutInformation.skills.map((skill) => {
            return <li key={skill}>{t(skill)}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
