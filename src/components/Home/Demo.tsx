import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Demo({demoNumber = 1, demoLink = "#", demoTitle = "Acervo do Lafda", demoDescription = "Descrição da demonstração", demoImage = "./thumbs/pinoquio.png"} : {demoNumber?: number, demoLink?: string, demoTitle?: string, demoDescription?: string, demoImage?: string}) {
    const { t } = useTranslation();
    
    return (
        <div className="demo flex row">
            <div className="demoText flex column">
                <small>{t('home.demos.demo')} {demoNumber}</small>
                <h2>{demoTitle}</h2>
                <p>{demoDescription}</p>
                <Link to={demoLink}><button className="demoButton">{t('home.demos.accessDemo')}</button></Link>
            </div>
            <div className="demoImage">
                <img src={demoImage} alt={`Demo ${demoNumber} - ${demoTitle}`} />
            </div>
        </div>
    )
    }