import { useTranslation } from "react-i18next";
import { getHighlightData } from "../../utils/highlight";
import { LiCounter } from "./highlight";

export function Highlight() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const highlightData = getHighlightData(i18n.language);

  return (
    <>
      <div className="center center-results">
        <h2>{t("pageTitles.highlightsTitle")}</h2>
      </div>
      <div className="highlights">
        <ul>
          {highlightData.map(({ number, text, speed, symbol }) => (
            <LiCounter
              key={text}
              end={number}
              speed={speed}
              text={text}
              symbol={symbol}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
