import { Link } from "react-router";

export default function Demo({demoNumber = 1, demoLink = "#", demoTitle = "Acervo do Lafda", demoDescription = "Descrição da demonstração", demoImage = "./thumbs/pinoquio.png"} : {demoNumber?: number, demoLink?: string, demoTitle?: string, demoDescription?: string, demoImage?: string}) {
    return (
        <div className="demo flex row">
            <div className="demoText flex column">
                <small>Demo {demoNumber}</small>
                <h2>{demoTitle}</h2>
                <p>{demoDescription}</p>
                <Link to={demoLink}><button className="demoButton">Acessar Demo</button></Link>
            </div>
            <div className="demoImage">
                <img src={demoImage} alt={`Demo ${demoNumber} - ${demoTitle}`} />
            </div>
        </div>
    )
    }