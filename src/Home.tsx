import Demo from "./components/Home/Demo";
import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";
import './home.css'

export default function Home() {
  return (
    <>
        <Header />
        <Hero />
        <Demo demoLink="/acervo-lafda" demoDescription="Souvenirs e peças de artesanato colecionados pela coordenadora do laboratório, que serão exibidos em uma terceira demonstração. Esse acervo pessoal-acadêmico evidencia o potencial da ferramenta para representar conjuntos híbridos, reunindo objetos cotidianos e referências culturais de diferentes origens."/>
        <Demo demoNumber={2} demoLink="/toritos" demoTitle="Toritos de Pucará" demoDescription="Peças de cerâmica tradicionais dos Andes, integradas à segunda demonstração, com foco em como o multivisualizador pode ser utilizado para comparar modelos 3D digitalizados com diferentes técnicas e dispositivos." demoImage="./toritos.png"/>
        <Footer />
    </>
  )
}
