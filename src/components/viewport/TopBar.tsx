import { Link } from "react-router";
import ModeSelector from "./ModeSelector";
import { useTranslation } from "react-i18next";

interface TopBarProps {
  toggleInfoScreen?: () => void;
}

export default function TopBar({toggleInfoScreen} : TopBarProps) {

  function handleFullscreen() {
    const viewport = document.getElementById('viewport');
    if (viewport) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        viewport.requestFullscreen();
      }
    }
  }


  const { t } = useTranslation();
  
  return (
    <div className="viewportTop flex">
      <div className="viewportTitle">
            <h5 id="objectName">{t("collection.name")}</h5>
            <p id="objectDesc">{t("collection.desc")}</p>
      </div>
      <div className="viewportInteraction flex">
        <Link to={"/"}>
        <p className="viewportBtn">
          <i className="fa-solid fa-house"></i>
        </p>
        </Link>
        <ModeSelector />
        <p id="help-mode-btn" className="viewportBtn" onClick={toggleInfoScreen}>
            <i className="fa-regular fa-circle-question"></i>
        </p>
        <p className="viewportBtn">
            <i id="fullscreenBtn" className="fa-solid fa-up-right-and-down-left-from-center" onClick={handleFullscreen}></i>
        </p>
      </div>
    </div>
  );
}
