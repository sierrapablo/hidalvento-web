import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from '../pages/App';
// import { About } from '../pages/About';
// import { Services } from '../pages/Services';
import { Gallery } from '../pages/Gallery';
import { Contact } from '../pages/Contact';
import { Maintenance } from '../pages/Maintenance';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre-nosotros" element={<App />} />
        <Route path="/servicios" element={<App />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/:slug" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
