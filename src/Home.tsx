import Demo from "./components/Home/Demo";
import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";
import { useTranslation } from "react-i18next";
import './home.css'

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <>
        <Header />
        <Hero />
        <div id="demos" className="homeDemos">
          <Demo 
            demoNumber={1} 
            demoLink="/mascaras" 
            demoTitle={t('home.demos.demo1.title')} 
            demoDescription={t('home.demos.demo1.description')} 
            demoImage="./thumbs/mascara.png" 
          />
          <Demo 
            demoNumber={2} 
            demoLink="/acervo-lafda" 
            demoTitle={t('home.demos.demo2.title')} 
            demoDescription={t('home.demos.demo2.description')}
          />
          <Demo 
            demoNumber={3} 
            demoLink="/toritos" 
            demoTitle={t('home.demos.demo3.title')} 
            demoDescription={t('home.demos.demo3.description')} 
            demoImage="./toritos.png"
          />
        </div>
        <Footer />
    </>
  )
}
