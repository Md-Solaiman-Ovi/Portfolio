import React from "react";

const EducationCard = ({
  year,
  title,
  platform,
}: {
  year: string;
  title: string;
  platform: string;
}) => {
  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4 shadow-md">
      <h3 className="text-sm text-teal-400">{year}</h3>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-400">{platform}</p>
    </div>
  );
};

export default EducationCard;
