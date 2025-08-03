export default function InfoScreen({toggleInfoScreen} : {toggleInfoScreen?: () => void}) {
  return (
    <div className="helpMode overlay flex" id="help-mode">
        <h3>Como navegar</h3>
        <div className="flex navHelpItems">
            <div className="navHelpItem">
                <i className="fa-solid fa-arrows-spin"></i>
                <p><span>Orbita</span></p>
                <p>Clique esquerdo + arraste / arraste com um dedo (touch)</p>
            </div>
            <div className="navHelpItem">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
                <p><span>Zoom</span></p>
                <p>Segure ou role o scroll / Faça pinça (touch)</p>
            </div>
            <div className="navHelpItem">
                <i className="fa-solid fa-up-down-left-right"></i>
                <p><span>Mover</span></p>
                <p>Clique direito + arraste / Arraste com dois dedos (touch)</p>
            </div>
            <div className="navHelpItem">
                <i className="fa-solid fa-hand-pointer"></i>
                <p><span>Selecionar</span></p>
                <p>Clique esquerdo / toque único (touch)</p>
            </div>
        </div>
        <button className="inverted" id="navigate-btn" onClick={toggleInfoScreen}>Navegar</button>
        <div>
            <p className="infoText">Para mais informações, acesse o <a href="https://lafda.uff.br">site do Lafda</a>.</p>
        </div>
    </div>
  );
}
