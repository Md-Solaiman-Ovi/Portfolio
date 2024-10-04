import React from "react";

type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
  tech: string;
  primaryUrl: string;
  secondaryUrl: string;
};

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  tech,
  primaryUrl,
  secondaryUrl,
}) => {
  return (
    <div className="duration-50 group relative box-border h-[600px] rounded-xl bg-gray-800 shadow-lg transition ease-in-out hover:border-[1px] hover:border-teal-400 hover:bg-transparent hover:shadow-xl">
      {/* Image Section */}
      <div className="rouonded-xl p-4">
        <img
          className="h-1/2 w-full rounded-xl object-cover md:h-56 lg:h-64"
          src={imageSrc}
          alt="Card"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <div className="mb-2 text-xl font-bold text-teal-400 md:text-2xl">
          {title}
        </div>
        {/* Description */}
        <p className="mb-4 text-base text-gray-500">{description}</p>

        <div className="absolute bottom-5 flex flex-col">
          <p className="mb-4 text-xs text-teal-500">{tech}</p>
          <div className="flex gap-4">
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded bg-teal-600 px-4 py-2 text-center font-bold text-white hover:bg-teal-500"
            >
              GitHub
            </a>
            <a
              href={secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded border-[1px] border-teal-500 px-4 py-2 text-center font-bold text-white group-hover:text-black dark:hover:bg-gray-800 dark:group-hover:text-white"
            >
              Preview
            </a>
          </div>
        </div>

        {/* Button Section */}
      </div>
    </div>
  );
};

export default Card;
