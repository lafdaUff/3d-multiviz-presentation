import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
//   .use(Backend)
//   // detect user language
//   // learn more: https://github.com/i18next/i18next-browser-languageDetector
//   .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,
    lng: 'pt', 

    resources: {
      en: {
        translation: {
          "collection": {
            "name": "Lafda internal collection",
            "desc": "© Universidade Federal Fluminense - 2025"
          },
          "tutorial": {
            "title": "How to navigate",
            "moreInfo": "For more information, visit the",
            "lafdaSite": "Lafda website",
            "navigate": "Navigate",
            "step1": {"label": "Orbit", "description": "Left click + drag / drag with one finger (touch)"},
            "step2": {"label": "Zoom", "description": "Scroll wheel / pinch (touch)"},
            "step3": {"label": "Mode", "description": "Right click + drag / two-finger drag (touch)"},
            "step4": {"label": "Select", "description": "Left click / single tap (touch)"}
          },
          "search": {"placeholder": "Search"},
          "home": {
            "header": {
              "learnMore": "Learn More",
              "wiki": "Wiki"
            },
            "hero": {
              "title": "3D MultiViz",
              "description": "3D-MultiViz is a free multi-viewer prototype based on open-source software.",
              "viewDemos": "View Demos",
              "learnMore": "Learn More"
            },
            "demos": {
              "demo": "Demo",
              "accessDemo": "Access Demo",
              "demo1": {
                "title": "Mask Collection",
                "description": "A collection previously digitized in Lafda extension projects, used to validate the first version of the prototype. It served as a basis for structuring the concept of simultaneous multi-visualization and adjusting the navigation experience."
              },
              "demo2": {
                "title": "Lafda Collection",
                "description": "Souvenirs and handicraft pieces collected by the laboratory coordinator, which will be displayed in a third demonstration. This personal-academic collection demonstrates the tool's potential to represent hybrid sets, bringing together everyday objects and cultural references from different origins."
              },
              "demo3": {
                "title": "Pucará Bulls",
                "description": "Traditional ceramic pieces from the Andes, integrated into the second demonstration, focusing on how the multi-viewer can be used to compare 3D models digitized with different techniques and devices."
              }
            },
            "footer": {
              "copyright": "© 2025 - Laboratório de Artefatos Físicos, Digitais e Algorítmicos"
            }
          },
          "about": {
            "title": "About 3D MultiViz",
            "whatIs": {
              "title": "What is 3D MultiViz?",
              "description": "3D-MultiViz is an offshoot of the research project \"Visualization of Cultural Collections\", developed within the research line \"Technologies and languages for registration, visualization and dissemination of cultural heritage\", conducted by Lafda-UFF - Laboratory of Physical, Digital and Algorithmic Artifacts. The investigation starts from a central identified problem: although there are important advances in 3D model viewers for web interfaces, most applications are limited to isolated visualization of three-dimensional objects. This makes comparative analysis between pieces difficult. 3D-MultiViz addresses this challenge by proposing an interactive interface that allows exploring multiple 3D objects in the same scene, expanding the possibilities for academic analysis, public engagement and cultural dissemination."
            },
            "multiVisualization": {
              "title": "Multi-visualization",
              "description": "Free and open-source viewers such as Smithsonian Voyager, Kompakkt and 3DHOP offer presentation and annotation modes for 3D models, but still focus on individual artifact display. 3D-MultiViz advances in this scenario by introducing the concept of multi-visualization — the possibility of gathering and simultaneously manipulating several three-dimensional models in the same interactive space. This differential expands the tool's application potential, allowing side-by-side comparisons, dynamic curatorial narratives and the creation of shared digital scenarios for collections. For the field of cultural heritage, this means new ways to represent contexts, thematic relationships and historical connections between objects, favoring both scientific analysis and public appreciation."
            },
            "team": {
              "title": "Team",
              "otavio": {
                "name": "Otávio Sousa Araujo",
                "role": "Research, UI/UX Design and Development"
              },
              "julia": {
                "name": "Júlia Giannella",
                "role": "Coordination and supervision"
              }
            }
          }
        }
      },
      pt: {
        translation: {
          "collection": {
            "name": "Acervo interno do Lafda",
            "desc": "© Universidade Federal Fluminense - 2025"
          },
          "tutorial": {
            "title": "Como navegar",
            "moreInfo": "Para mais informações, acesse o",
            "lafdaSite": "site do Lafda",
            "navigate": "Navegar",
            "step1": {"label": "Órbita", "description": "Clique esquerdo + arraste / arraste com um dedo (touch)"},
            "step2": {"label": "Zoom", "description": "Segure ou role o scroll / Faça pinça (touch)"},
            "step3": {"label": "Modo", "description": "Clique direito + arraste / Arraste com dois dedos (touch)"},
            "step4": {"label": "Selecionar", "description": "Clique esquerdo / toque único (touch)"}
          },
          "search": {"placeholder": "Pesquisar"},
          "home": {
            "header": {
              "learnMore": "Saiba Mais",
              "wiki": "Wiki"
            },
            "hero": {
              "title": "3D MultiViz",
              "description": "O 3D-MultiViz é um protótipo de multivisualizador gratuito baseado em software de código aberto.",
              "viewDemos": "Ver Demos",
              "learnMore": "Saiba Mais"
            },
            "demos": {
              "demo": "Demo",
              "accessDemo": "Acessar Demo",
              "demo1": {
                "title": "Coleção de Máscaras",
                "description": "conjunto previamente digitalizado em projetos de extensão do Lafda, utilizado para validar a primeira versão do protótipo. Serviu como base para estruturar o conceito de multivisualização simultânea e ajustar a experiência de navegação."
              },
              "demo2": {
                "title": "Acervo do Lafda",
                "description": "Souvenirs e peças de artesanato colecionados pela coordenadora do laboratório, que serão exibidos em uma terceira demonstração. Esse acervo pessoal-acadêmico evidencia o potencial da ferramenta para representar conjuntos híbridos, reunindo objetos cotidianos e referências culturais de diferentes origens."
              },
              "demo3": {
                "title": "Toritos de Pucará",
                "description": "Peças de cerâmica tradicionais dos Andes, integradas à segunda demonstração, com foco em como o multivisualizador pode ser utilizado para comparar modelos 3D digitalizados com diferentes técnicas e dispositivos."
              }
            },
            "footer": {
              "copyright": "© 2025 - Laboratório de Artefatos Físicos, Digitais e Algorítmicos"
            }
          },
          "about": {
            "title": "Sobre o 3D MultiViz",
            "whatIs": {
              "title": "O que é o 3D MultiViz?",
              "description": "O 3D-MultiViz é um desdobramento do projeto de pesquisa \"Visualização de Coleções Culturais\", desenvolvido no âmbito da linha de pesquisa \"Tecnologias e linguagens para registro, visualização e difusão do patrimônio cultural\", conduzida pelo Lafda-UFF – Laboratório de Artefatos Físicos, Digitais e Algorítmicos. A investigação parte de um problema central identificado: embora existam avanços importantes em visualizadores de modelos 3D para interfaces web, a maioria das aplicações limitam-se à visualização isolada de objetos tridimensionais. Isso dificulta a análise comparativa entre peças. O 3D-MultiViz responde a esse desafio ao propor uma interface interativa que permite explorar múltiplos objetos 3D em uma mesma cena, ampliando as possibilidades de análise acadêmica, engajamento público e difusão cultural."
            },
            "multiVisualization": {
              "title": "Multivisualização",
              "description": "Visualizadores gratuitos e de código aberto como o Smithsonian Voyager, o Kompakkt e o 3DHOP oferecem modos de apresentação e anotação de modelos 3D, mas ainda se concentram na exibição individual de artefatos. O 3D-MultiViz avança nesse cenário ao introduzir o conceito de multivisualização  — a possibilidade de reunir e manipular simultaneamente vários modelos tridimensionais em um mesmo espaço interativo. Esse diferencial amplia o potencial de aplicação da ferramenta, permitindo comparações lado a lado, narrativas curatoriais dinâmicas e a criação de cenários digitais compartilhados para coleções. Para o campo do patrimônio cultural, isso significa novas formas de representar contextos, relações temáticas e conexões históricas entre objetos, favorecendo tanto a análise científica quanto a apreciação pública."
            },
            "team": {
              "title": "Equipe",
              "otavio": {
                "name": "Otávio Sousa Araujo",
                "role": "Pesquisa, UI/UX Design e Desenvolvimento"
              },
              "julia": {
                "name": "Júlia Giannella",
                "role": "Coordenação e supervisão"
              }
            }
          }
        }
      },
      es: {
        translation: {
          "collection": {
            "name": "Colección interna de Lafda",
            "desc": "© Universidade Federal Fluminense - 2025"
          },
          "tutorial": {
            "title": "Cómo navegar",
            "moreInfo": "Para más información, visite el",
            "lafdaSite": "sitio de Lafda",
            "navigate": "Navegar",
            "step1": {"label": "Órbita", "description": "Clic izquierdo + arrastrar / arrastrar con un dedo (táctil)"},
            "step2": {"label": "Zoom", "description": "Rueda del ratón / pellizcar (táctil)"},
            "step3": {"label": "Modo", "description": "Clic derecho + arrastrar / arrastrar con dos dedos (táctil)"},
            "step4": {"label": "Seleccionar", "description": "Clic izquierdo / toque único (táctil)"}
          },
          "search": {"placeholder": "Buscar"},
          "home": {
            "header": {
              "learnMore": "Saber Más",
              "wiki": "Wiki"
            },
            "hero": {
              "title": "3D MultiViz",
              "description": "3D-MultiViz es un prototipo de multi-visualizador gratuito basado en software de código abierto.",
              "viewDemos": "Ver Demos",
              "learnMore": "Saber Más"
            },
            "demos": {
              "demo": "Demo",
              "accessDemo": "Acceder a Demo",
              "demo1": {
                "title": "Colección de Máscaras",
                "description": "Una colección previamente digitalizada en proyectos de extensión de Lafda, utilizada para validar la primera versión del prototipo. Sirvió como base para estructurar el concepto de multi-visualización simultánea y ajustar la experiencia de navegación."
              },
              "demo2": {
                "title": "Colección de Lafda",
                "description": "Souvenirs y piezas de artesanía coleccionadas por la coordinadora del laboratorio, que se mostrarán en una tercera demostración. Esta colección personal-académica demuestra el potencial de la herramienta para representar conjuntos híbridos, reuniendo objetos cotidianos y referencias culturales de diferentes orígenes."
              },
              "demo3": {
                "title": "Toritos de Pucará",
                "description": "Piezas de cerámica tradicionales de los Andes, integradas en la segunda demostración, enfocándose en cómo el multi-visualizador puede utilizarse para comparar modelos 3D digitalizados con diferentes técnicas y dispositivos."
              }
            },
            "footer": {
              "copyright": "© 2025 - Laboratório de Artefatos Físicos, Digitais e Algorítmicos"
            }
          },
          "about": {
            "title": "Acerca de 3D MultiViz",
            "whatIs": {
              "title": "¿Qué es 3D MultiViz?",
              "description": "3D-MultiViz es un derivado del proyecto de investigación \"Visualización de Colecciones Culturales\", desarrollado en el marco de la línea de investigación \"Tecnologías y lenguajes para registro, visualización y difusión del patrimonio cultural\", llevada a cabo por Lafda-UFF - Laboratorio de Artefactos Físicos, Digitales y Algorítmicos. La investigación parte de un problema central identificado: aunque existen avances importantes en visualizadores de modelos 3D para interfaces web, la mayoría de las aplicaciones se limitan a la visualización aislada de objetos tridimensionales. Esto dificulta el análisis comparativo entre piezas. 3D-MultiViz aborda este desafío proponiendo una interfaz interactiva que permite explorar múltiples objetos 3D en la misma escena, ampliando las posibilidades de análisis académico, participación pública y difusión cultural."
            },
            "multiVisualization": {
              "title": "Multi-visualización",
              "description": "Visualizadores gratuitos y de código abierto como Smithsonian Voyager, Kompakkt y 3DHOP ofrecen modos de presentación y anotación para modelos 3D, pero aún se centran en la exhibición individual de artefactos. 3D-MultiViz avanza en este escenario introduciendo el concepto de multi-visualización — la posibilidad de reunir y manipular simultáneamente varios modelos tridimensionales en el mismo espacio interactivo. Este diferencial amplía el potencial de aplicación de la herramienta, permitiendo comparaciones lado a lado, narrativas curatoriales dinámicas y la creación de escenarios digitales compartidos para colecciones. Para el campo del patrimonio cultural, esto significa nuevas formas de representar contextos, relaciones temáticas y conexiones históricas entre objetos, favoreciendo tanto el análisis científico como la apreciación pública."
            },
            "team": {
              "title": "Equipo",
              "otavio": {
                "name": "Otávio Sousa Araujo",
                "role": "Investigación, Diseño UI/UX y Desarrollo"
              },
              "julia": {
                "name": "Júlia Giannella",
                "role": "Coordinación y supervisión"
              }
            }
          }
        }
      }
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

  });


export default i18n;