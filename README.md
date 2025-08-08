# 3D MultiViz - Visualizador 3D para Patrimônio Cultural

**3D MultiViz** é uma plataforma de código aberto para multivisualização de artefatos de patrimônio cultural em 3D. Desenvolvida com tecnologias web modernas, a ferramenta permite que pesquisadores, estudantes e o público em geral explorem coleções digitais de forma interativa.

Este projeto é uma iniciativa do **Laboratório de Artefatos Físicos, Digitais e Algorítmicos (Lafda)** da **Universidade Federal Fluminense (UFF)**.

---

## Funcionalidades

- **Visualização Interativa**: Navegue, rotacione, aplique zoom e explore modelos 3D.
- **Multivisualização**: Carregue e compare múltiplos artefatos simultaneamente na mesma cena.
- **Anotações e Metadados**: Associe informações, notas e dados históricos diretamente aos modelos 3D.
- **Interface Responsiva**: Acessível em desktops, tablets e dispositivos móveis.

---

## Manual de Instalação

Para executar este projeto localmente, você precisará ter o **Node.js** (versão 18 ou superior) e o **npm** instalados em sua máquina.

### 1. Clone o Repositório

```bash
git clone https://github.com/lafdaUff/3d-multiviz.git
cd 3d-multiviz
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Inicie o Servidor de Desenvolvimento

```bash
npm run dev
```

O terminal exibirá o endereço local para acessar a aplicação (geralmente `http://localhost:5173`).  
Abra este link no seu navegador para ver o projeto em execução.

### 4. Gerando a Versão de Produção (Build)

```bash
npm run build
```

Os arquivos finais serão gerados na pasta `dist/`, prontos para serem implantados em um servidor web.

---

## Tecnologias Utilizadas

- [**Vite**](https://vitejs.dev): Ferramenta de build e desenvolvimento rápido para projetos web.
- [**React.js**](https://reactjs.org): Biblioteca para construção de interfaces de usuário.
- [**React Three Fiber**](https://docs.pmnd.rs/react-three-fiber): Renderizador React para Three.js, simplificando a criação de cenas 3D.

---

## Como Contribuir

Contribuições são muito bem-vindas! Siga os passos abaixo para colaborar:

1. Faça um **fork** do projeto.
2. Crie uma **branch** para sua nova funcionalidade:
   ```bash
   git checkout -b feature/minha-feature
   ```
3. Faça o **commit** de suas alterações:
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. Envie para a sua branch:
   ```bash
   git push origin feature/minha-feature
   ```
5. Abra um **Pull Request**.

---

## Licença



---

## Agradecimentos

Este trabalho é fruto das pesquisas e do desenvolvimento realizado no **Laboratório de Artefatos Físicos, Digitais e Algorítmicos (Lafda)** da **Universidade Federal Fluminense (UFF)**.  
Agradecemos a todos os pesquisadores, desenvolvedores e colaboradores que tornaram este projeto possível.
