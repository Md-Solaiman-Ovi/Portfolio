const SkillCard = ({ icon, altText }: { icon: string; altText: string }) => (
  <div className="flex items-center justify-center rounded-lg bg-gray-800 p-8 shadow-md">
    <img src={icon} alt={altText} className="h-12 w-12" />
  </div>
);

const Skills = () => {
  const skills = [
    { icon: "../assets/skills/html.svg", altText: "HTML5" },
    { icon: "../assets/skills/css.svg", altText: "CSS3" },
    { icon: "../assets/skills/js.svg", altText: "JavaScript" },
    { icon: "../assets/skills/react.svg", altText: "React" },
    { icon: "../assets/skills/next.svg", altText: "Next.js" },
    { icon: "../assets/skills/tailwind.svg", altText: "Tailwind CSS" },
    { icon: "../assets/skills/node-icon.svg", altText: "Node.js" },
    { icon: "../assets/skills/figma-icon.svg", altText: "Figma" },
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
