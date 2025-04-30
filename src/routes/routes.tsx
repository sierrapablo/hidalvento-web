import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { App } from '../pages/App';
// import { About } from '../pages/About';
// import { Services } from '../pages/Services';
// import { Gallery } from '../pages/Gallery';
// import { Contact } from '../pages/Contact';
import { Maintenance } from '../pages/Maintenance';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Maintenance />} />
        <Route path="/sobre-nosotros" element={<Maintenance />} />
        <Route path="/servicios" element={<Maintenance />} />
        <Route path="/galeria" element={<Maintenance />} />
        <Route path="/contacto" element={<Maintenance />} />
        <Route path="/:slug" element={<Maintenance />} />
      </Routes>
    </BrowserRouter>
  );
};
