import { Navbar } from '../components/molecules/Navbar/Navbar';
import { Footer } from '../components/molecules/Footer/Footer';
import { HeroSection } from '../components/templates/HeroSection/HeroSection';
import './Contact.css';

import { useState } from 'react';

import heroImg from '../assets/images/DSC03735-Mejorado-NR.avif'

export const Contact = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  };

  const handleSubmit = e => {
    e.preventDefault()
    const { contactName, subject, message } = formData

    const emailBody = encodeURIComponent(
      `Hola, soy ${contactName}.\n\n${message}`
    )
    const mailtoLink = `mailto:comercial@reformashidalvento.com?subject=${encodeURIComponent(
      subject
    )}&body=${emailBody}`
    window.location.href = mailtoLink
  };

  return (
    <>
      <Navbar />
      <HeroSection subtitle={{ text: "Cuéntanos tu idea", variant: "secondary" }} image={heroImg} />
      <div className='justify-items-center py-20'>
        <form className='contactForm' onSubmit={handleSubmit}>
          <div className='formGroup'>
            <input
              type='text'
              id='contactName'
              name='contactName'
              value={formData.contactName}
              onChange={handleChange}
              placeholder='Nombre de contacto'
              required
            />
          </div>
          <div className='formGroup'>
            <input
              type='text'
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              placeholder='Asunto'
              required
            />
          </div>
          <div className='formGroup'>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Haz una descripción de tu idea de reforma.'
              rows={5}
            />
          </div>
          <button type='button' className='formButton' onClick={handleSubmit}>
            Contactar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};
