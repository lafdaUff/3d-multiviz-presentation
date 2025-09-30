import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";

export default function About() {
    return (
        <>
            <Header />
            <h1>Sobre o 3D MultiViz</h1>
            <div className="flex aboutPageItem">
                <h3>O que é o 3D MultiViz?</h3>
                <p>O 3D-MultiViz é um desdobramento do projeto de pesquisa “Visualização de Coleções Culturais”, desenvolvido no âmbito da linha de pesquisa “Tecnologias e linguagens para registro, visualização e difusão do patrimônio cultural”, conduzida pelo Lafda-UFF – Laboratório de Artefatos Físicos, Digitais e Algorítmicos.
                    A investigação parte de um problema central identificado: embora existam avanços importantes em visualizadores de modelos 3D para interfaces web, a maioria das aplicações limitam-se à visualização isolada de objetos tridimensionais. Isso dificulta a análise comparativa entre peças.
                    O 3D-MultiViz responde a esse desafio ao propor uma interface interativa que permite explorar múltiplos objetos 3D em uma mesma cena, ampliando as possibilidades de análise acadêmica, engajamento público e difusão cultural
                </p>
            </div>
            <div className="flex aboutPageItem">
                <h3>Multivisualização</h3>
                <p>Visualizadores gratuitos e de código aberto como o Smithsonian Voyager, o Kompakkt e o 3DHOP oferecem modos de apresentação e anotação de modelos 3D, mas ainda se concentram na exibição individual de artefatos. O 3D-MultiViz avança nesse cenário ao introduzir o conceito de multivisualização  — a possibilidade de reunir e manipular simultaneamente vários modelos tridimensionais em um mesmo espaço interativo.
                    Esse diferencial amplia o potencial de aplicação da ferramenta, permitindo comparações lado a lado, narrativas curatoriais dinâmicas e a criação de cenários digitais compartilhados para coleções. Para o campo do patrimônio cultural, isso significa novas formas de representar contextos, relações temáticas e conexões históricas entre objetos, favorecendo tanto a análise científica quanto a apreciação pública.
                </p>
            </div>
            <div className="flex aboutPageItem">
                <h3>Equipe</h3>
                <div className="flex row userCards">
                    <div className="demo flex userCard">
                        <img src="./image-otavio.png" alt="" style={{ width: '25%', borderRadius: '12px' }}/>
                        <div className="userInfo">
                            <h5>Otávio Sousa Araujo</h5>
                            <p>Pesquisa, UI/UX Design e Desenvolvimento</p>
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
                            <h5>Júlia Giannella</h5>
                            <p>Coordenação e supervisão</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}