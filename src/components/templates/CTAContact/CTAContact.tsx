import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import contactImage from "../../../assets/images/DSC03720-Mejorado-NR.avif";

/**
 * A responsive call-to-action section that redirects users to the contact page.
 * Displays text and a button on the left, and an image on the right (stacked on small screens).
 */
const CTAContact: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contacto");
  };

  return (
    <section className="flex flex-col md:flex-row w-full h-dvh bg-hv-blue">
      {/* Text and Button Section */}
      <div className="flex flex-col justify-center items-start p-8 md:w-1/2 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Pensando en reformar? Este es el momento</h2>
        <p className="text-lg mb-6 text-gray-700">
          Nos encargamos de todo: desde la planificación hasta los acabados. Cuéntanos tu idea y nosotros la hacemos realidad.
        </p>
        <Link
          to="/contacto"
          className="inline-block px-20 py-3 bg-hv-blue text-white rounded-3xl shadow-lg hover:bg-hv-light-blue hover:text-hv-blue hover:shadow-[0_0_20px_5px_theme('colors.amber.50')] transition duration-500 ease-in-out text-center"
        >
          Empezar tu reforma
        </Link>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full h-64 md:h-full">
        <img
          src={contactImage}
          alt="Ilustración contacto"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default CTAContact;

