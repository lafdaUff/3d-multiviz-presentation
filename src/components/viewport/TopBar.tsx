export default function TopBar({toggleInfoScreen} : {toggleInfoScreen?: () => void}) {
  
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
  
  return (
    <div className="viewportTop flex">
        <p id="help-mode-btn" className="viewportBtn" onClick={toggleInfoScreen}>
            <i className="fa-regular fa-circle-question"></i>
        </p>
        <p className="viewportBtn">
            <i id="fullscreenBtn" className="fa-solid fa-up-right-and-down-left-from-center" onClick={handleFullscreen}></i>
        </p>
    </div>
  );
}
