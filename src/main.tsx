import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "swiper/css";
import AcervoLafda from './AcervoLafda.tsx'
import Home from './Home.tsx'
import { BrowserRouter } from 'react-router'
import { Route, Routes } from 'react-router'
import About from './About.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/acervo-lafda" element={<AcervoLafda />} />
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
