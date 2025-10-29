import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  
  return (
    <header className="header flex">
        <Link to="/"><img className="multiVizLogo" src="./MultiVizLogo.png" alt="MultiViz Logo" /></Link>
        <nav className="nav">
            <ul className="navList flex">
                <li><Link to="/about">{t('home.header.learnMore')}</Link></li>
                <li><a href="https://github.com/lafdaUff/3d-multiviz/wiki">{t('home.header.wiki')}</a></li>
                <ul className="socialMedia flex">
                  <li><a href="https://github.com/lafdaUff/3d-multiviz" className="viewportBtn"><i className="fa-brands fa-github"></i></a></li>
                  <li><a href="https://instagram.com/lafda.uff" className="viewportBtn"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
            </ul>
        </nav>
    </header>
  );
}