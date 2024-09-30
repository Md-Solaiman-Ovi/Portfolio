const SkillCard = ({ icon, altText }: { icon: string; altText: string }) => (
  <div className="flex items-center justify-center rounded-lg bg-gray-800 p-8 shadow-md">
    <img src={icon} alt={altText} className="h-12 w-12" />
  </div>
);

const Skills = () => {
  const skills = [
    { icon: "/src/assets/skills/html.svg", altText: "HTML5" },
    { icon: "/src/assets/skills/css.svg", altText: "CSS3" },
    { icon: "/src/assets/skills/js.svg", altText: "JavaScript" },
    { icon: "/src/assets/skills/react.svg", altText: "React" },
    { icon: "/src/assets/skills/next.svg", altText: "Next.js" },
    { icon: "/src/assets/skills/tailwind.svg", altText: "Tailwind CSS" },
    { icon: "/src/assets/skills/node-icon.svg", altText: "Node.js" },
    { icon: "/src/assets/skills/figma-icon.svg", altText: "Figma" },
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
