import { Navbar } from '../components/molecules/Navbar/Navbar';
import { Footer } from '../components/molecules/Footer/Footer';
import { HeroSection } from '../components/templates/HeroSection/HeroSection';
import { useState } from 'react';
import heroImg from '../assets/images/DSC03729-Mejorado-NR.avif';
import { SectionWrapper } from '../components/templates/SectionWrapper/SectionWrapper';

import { Email, WhatsApp } from '@mui/icons-material';

interface FormData {
  contactName: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    contactName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { contactName, subject, message } = formData;

    const emailBody = encodeURIComponent(`Hola, soy ${contactName}.\n\n${message}`);
    const mailtoLink = `mailto:comercial@reformashidalvento.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsAppSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { contactName, message } = formData;

    const phoneNumber = '34641689130';

    // Mensaje formateado para WhatsApp
    const whatsappMessage = encodeURIComponent(`Hola, soy ${contactName}. ${message}`);

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
      <Navbar />
      <SectionWrapper index={1}>
        <HeroSection
          subtitle={{ text: 'Cuéntanos tu idea', variant: 'secondary' }}
          image={heroImg}
        />
      </SectionWrapper>
      <SectionWrapper index={10}>
        <div className="flex justify-center items-center py-20 px-4 min-h-screen">
          <form
            onSubmit={handleEmailSubmit} // El submit por defecto será email
            className="w-full max-w-xl bg-white shadow-md rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contacto</h2>

            <div className="mb-4">
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                placeholder="Nombre de contacto"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Asunto"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="mb-6">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Haz una descripción de tu idea de reforma."
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-6 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-300 hover:text-blue-800 transition-colors duration-300"
              >
                <Email />
                Contactar por Email
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-6 bg-green-600 text-white font-semibold rounded-md hover:bg-green-400 hover:text-green-900 transition-colors duration-300"
              >
                <WhatsApp />
                Contactar por WhatsApp
              </button>
            </div>
          </form>
        </div>
      </SectionWrapper>
      <SectionWrapper index={100}>
        <Footer />
      </SectionWrapper>
    </>
  );
};

