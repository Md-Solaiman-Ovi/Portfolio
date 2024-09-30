const EducationCard = ({
  year,
  title,
  department,
  platform,
  cgpa,
}: {
  year: string;
  title: string;
  department: string;
  platform: string;
  cgpa: string;
}) => {
  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4 shadow-md">
      <h3 className="text-sm text-teal-400">{year}</h3>
      <h2 className="text-xl font-semibold">{title}</h2>
      <h2 className="text-base font-medium text-gray-400">{department}</h2>
      <p className="text-sm text-gray-400">{platform}</p>
      <p className="text-sm text-gray-400"> {cgpa}</p>
    </div>
  );
};

export default EducationCard;
