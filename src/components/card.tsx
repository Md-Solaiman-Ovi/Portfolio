import React from "react";

type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
  primaryUrl: string;
  secondaryUrl: string;
};

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  primaryUrl,
  secondaryUrl,
}) => {
  return (
    <div className="box-border rounded-xl bg-gray-800 shadow-lg transition-all duration-300 ease-in-out hover:border-[1px] hover:border-teal-400 hover:bg-transparent hover:shadow-xl">
      {/* Image Section */}
      <div className="rouonded-xl p-4">
        <img
          className="object-fit h-48 w-full rounded-xl md:h-56 lg:h-64"
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
        <p className="mb-4 text-base text-gray-500 md:text-lg">{description}</p>

        {/* Button Section */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
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
            className="whitespace-nowrap rounded border-[1px] border-teal-500 px-4 py-2 text-center font-bold text-white hover:bg-gray-800"
          >
            Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
