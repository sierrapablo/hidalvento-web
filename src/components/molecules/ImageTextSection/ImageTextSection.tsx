interface ImageTextSectionProps {
  title: string;
  text: string;
  image: string;
  bgColor?: 'white' | 'blue';
}

export const ImageTextSection = ({ title, text, image, bgColor = 'white' }: ImageTextSectionProps) => {

  const bgClass = bgColor === 'blue' ? 'bg-hv-blue' : 'bg-white';
  const textColorClass = bgColor === 'blue' ? 'text-white' : 'text-gray-700';

  return (
    <section className="min-h-[100dvh] flex flex-col md:flex-row">
      {/* Imagen */}
      <div className="relative w-full md:w-3/5 h-[calc(100dvh-56px)] md:h-[calc(100dvh-56px)]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Texto encima en móvil */}
        <div className="absolute inset-0 flex items-center justify-center md:hidden bg-neutral-700/40 p-8 text-center">
          <div>
            <h2 className="text-white text-xl font-bold mb-4">{title}</h2>
            <p className="text-white text-sm whitespace-pre-line">{text}</p>
          </div>
        </div>
      </div>

      {/* Texto sticky desktop */}
      <div className={`hidden md:flex md:flex-col md:justify-center md:w-2/5 px-16 pb-20 sticky top-14 h-[calc(100dvh-56px)] ${bgClass}`}>
        <h2 className={`text-3xl font-bold mb-4 ${textColorClass}`}>{title}</h2>
        <p className={`text-lg whitespace-pre-line ${textColorClass}`}>{text}</p>
      </div>
    </section>
  );
};
