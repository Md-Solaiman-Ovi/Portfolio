import SkillImg1 from "../assets/skills/html.svg";
import SkillImg2 from "../assets/skills/css.svg";
import SkillImg3 from "../assets/skills/js.svg";
import SkillImg4 from "../assets/skills/ts.svg";
import SkillImg5 from "../assets/skills/react.svg";
import SkillImg6 from "../assets/skills/nextJS.svg";
import SkillImg7 from "../assets/skills/alpineJS.svg";
import SkillImg8 from "../assets/skills/tailwind.svg";
import SkillImg9 from "../assets/skills/bootstrap.svg";
import SkillImg10 from "../assets/skills/redux.svg";
// import SkillImg11 from "../assets/skills/tailwind.svg";
import SkillImg12 from "../assets/skills/git.svg";

const SkillCard = ({ icon, altText }: { icon: string; altText: string }) => (
  <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-800 p-8 shadow-md duration-300 ease-in-out hover:bg-teal-600">
    <img src={icon} alt={altText} className="h-12 w-12 hover:text-teal-500" />
    <p>{altText}</p>
  </div>
);

const Skills = () => {
  const skills = [
    { icon: SkillImg1, altText: "HTML5" },
    { icon: SkillImg2, altText: "CSS3" },
    { icon: SkillImg3, altText: "JavaScript" },
    { icon: SkillImg4, altText: "TypeScript" },
    { icon: SkillImg5, altText: "React" },
    { icon: SkillImg6, altText: "Next.js" },
    { icon: SkillImg7, altText: "Alpine.js" },
    { icon: SkillImg8, altText: "Tailwind CSS" },
    { icon: SkillImg9, altText: "Bootstrap" },
    { icon: SkillImg10, altText: "Redux" },
    // { icon: SkillImg11, altText: "RESTful API" },
    { icon: SkillImg12, altText: "Git" },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {skills.map((skill, index) => (
        <SkillCard key={index} icon={skill.icon} altText={skill.altText} />
      ))}
    </div>
  );
};

export default Skills;
