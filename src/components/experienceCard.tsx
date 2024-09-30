const ExperienceCard = ({
  year,
  title,
  platform,
}: {
  year: string;
  title: string;
  platform: string;
}) => {
  return (
    <div className="mb-4 rounded-lg bg-white/30 p-4 shadow-md dark:bg-gray-800">
      <h3 className="text-sm text-teal-500 dark:text-teal-400">{year}</h3>
      <h2 className="text-xl font-semibold text-black dark:text-white">
        {title}
      </h2>
      <p className="text-sm text-sky-500 dark:text-sky-300">{platform}</p>

      <ul className="my-4 flex list-inside list-disc flex-col gap-4 text-sm text-black/70 dark:text-white/50">
        <li>
          <b className="text-base text-black dark:text-white/80">
            Web Application Development:
          </b>{" "}
          Built responsive applications using React.js and Next.js, enhancing
          user experience across devices.
        </li>
        <li>
          <b className="text-base text-black dark:text-white/80">
            {" "}
            Performance Optimization:{" "}
          </b>
          Improved load times through code splitting and lazy loading
          techniques.
        </li>
        <li>
          <b className="text-base text-black dark:text-white/80">
            {" "}
            Responsive Design Implementation:{" "}
          </b>
          Used Tailwind CSS and Bootstrap to create accessible and visually
          appealing layouts.
        </li>
        <li>
          <b className="text-base text-black dark:text-white/80">
            State Management:
          </b>{" "}
          Leveraged Context API and Redux for efficient data flow in
          applications.
        </li>
        <li>
          <b className="text-base text-black dark:text-white/80">
            Agile Collaboration:
          </b>{" "}
          Participated in sprint planning and code reviews, upholding high
          coding standards.
        </li>
        <li>
          <b className="text-base text-black dark:text-white/80">
            Continuous Learning:
          </b>{" "}
          Explored new frontend technologies, including Alpine.js, to enhance
          skills.
        </li>
      </ul>
    </div>
  );
};

export default ExperienceCard;
