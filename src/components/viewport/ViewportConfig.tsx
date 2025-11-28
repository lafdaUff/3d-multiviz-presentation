export default function ViewportConfig() {

    return (
        <div className="viewport-config">
            <p id="help-mode-btn" className="viewportBtn">
                <i className="fa-solid fa-gear"></i>
            </p>
            <div className="viewport-config-selector">
                <button className={`mode-button`}><i className="fa-solid fa-border-all mode-icon"></i></button>
                <button className={`mode-button`}><i className="fa-solid fa-draw-polygon mode-icon"></i></button>
                <button className={`mode-button`}>A</button>
            </div>
        </div>
    );
}