import { Navbar } from '../components/molecules/Navbar/Navbar';

import heroImg from '../assets/images/DSC03735-Mejorado-NR.avif'


export const App = () => {
  return (
    <>
      <div className="w-full h-dvh animate-fadein">
        <Navbar />
        <img
          src={heroImg}
          alt="HidalVento"
          className="w-full object-cover"
          style={{ height: "calc(100dvh - 56px)" }}
        />
        <div className="absolute top-[56px] left-0 w-full h-[calc(100dvh-56px)] bg-black/50 z-10" />
      </div>
    </>
  );
};
