export default function Header() {
  return (
    <header className="header flex">
        <img className="multiVizLogo" src="./MultiVizLogo.png" alt="MultiViz Logo" />
        <nav className="nav">
            <ul className="navList flex">
                <li><a href="https://github.com/lafdaUff/3d-multiviz/wiki">Wiki</a></li>
                <li><a href="https://github.com/lafdaUff/3d-multiviz" className="viewportBtn"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="https://instagram.com/lafda.uff" className="viewportBtn"><i className="fa-brands fa-instagram"></i></a></li>
            </ul>
        </nav>
    </header>
  );
}