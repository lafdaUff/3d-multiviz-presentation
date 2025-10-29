import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();
    
    return (
        <>
            <Header />
            <h1>{t('about.title')}</h1>
            <div className="flex aboutPageItem">
                <h3>{t('about.whatIs.title')}</h3>
                <p>{t('about.whatIs.description')}</p>
            </div>
            <div className="flex aboutPageItem">
                <h3>{t('about.multiVisualization.title')}</h3>
                <p>{t('about.multiVisualization.description')}</p>
            </div>
            <div className="flex aboutPageItem">
                <h3>{t('about.team.title')}</h3>
                <div className="flex row userCards">
                    <div className="demo flex userCard">
                        <img src="./image-otavio.png" alt="" style={{ width: '25%', borderRadius: '12px' }}/>
                        <div className="userInfo">
                            <h5>{t('about.team.otavio.name')}</h5>
                            <p>{t('about.team.otavio.role')}</p>
                            <div className="socialLinks flex">
                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="#"><i className="fa-brands fa-github"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="demo flex userCard">
                        <img src="./image-julia.png" alt="" style={{ width: '25%', borderRadius: '12px' }}/>
                        <div className="userInfo">
                            <h5>{t('about.team.julia.name')}</h5>
                            <p>{t('about.team.julia.role')}</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}