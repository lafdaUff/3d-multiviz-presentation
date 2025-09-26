import { Canvas } from '@react-three/fiber';
import { Experience, type ModelData } from '../viewport/Experience';
import { Link } from 'react-router';



export default function Hero() {

    function onObjectSelect(data: ModelData | null) {
        // Placeholder function for object selection
        console.log('Object selected:', data);
    }

    const currentObjects: ModelData[] = [
        {
            "nome": "Souvenir de Lhama",
            "link": "souvenir_lhama",
            "thumb": "lhama"
        },
        {
            "nome": "Boneca de Pano",
            "link": "boneca_de_pano",
            "thumb": "boneca"
        },
        {
            "nome": "Hipopótamo",
            "link": "hipopotamo",
            "thumb": "hipopotamo"
        },
        {
            "nome": "Triciclo Anos 80",
            "link": "triciclo_anos_80",
            "thumb": "triciclo"
        },
        {
            "nome": "Vaso Marajoara",
            "link": "vaso_marajoara",
            "thumb": "vaso"
        }
    ];

  return (
    <section className="homeHero flex">
        <div className="heroContent flex">
            <h1 className="heroTitle">3D MultiViz</h1>
            <p className="heroDescription">O 3D-MultiViz é um protótipo de multivisualizador gratuito baseado em software de código aberto.</p>
            <div className="flex heroButtons">
                <a href="/#demos"><button>Ver Demos</button></a>
                <Link to="/about"><button className="heroButton">Saiba Mais</button></Link>
            </div>
        </div>
        <div className="heroGrid">
            <div className="gridParent">
                <Canvas className='div1 grid-item' >
                    <Experience onObjectSelect={onObjectSelect} currentObjects={[currentObjects[0]]} cameraLock={false} />
                </Canvas>
                <Canvas className='div2 grid-item' >
                    <Experience onObjectSelect={onObjectSelect} currentObjects={[currentObjects[1]]} cameraLock={false} />
                </Canvas>
                <Canvas className='div3 grid-item' >
                    <Experience onObjectSelect={onObjectSelect} currentObjects={[currentObjects[2]]} cameraLock={false} />
                </Canvas>
                <Canvas className='div4 grid-item' >
                    <Experience onObjectSelect={onObjectSelect} currentObjects={[currentObjects[3]]} cameraLock={false} />
                </Canvas>
                <Canvas className='div5 grid-item' >
                    <Experience onObjectSelect={onObjectSelect} currentObjects={[currentObjects[4]]} cameraLock={false} />
                </Canvas>
            </div>
        </div>
    </section>
  );
}
