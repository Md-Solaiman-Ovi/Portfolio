import Card from "./card";
import projectImg1 from "../assets/projects/projectImg1.png";

const Projects = () => {
  const projects = [
    {
      imageSrc: projectImg1,
      title: "Responsive Card Component",
      description:
        "This card component is fully responsive and adapts to different screen sizes. The buttons link to external pages.",
      primaryUrl: "https://www.example.com/primary",
      secondaryUrl: "https://www.example.com/secondary",
    },
    {
      imageSrc: projectImg1,
      title: "Responsive Card Component",
      description:
        "This card component is fully responsive and adapts to different screen sizes. The buttons link to external pages.",
      primaryUrl: "https://www.example.com/primary",
      secondaryUrl: "https://www.example.com/secondary",
    },
    {
      imageSrc: projectImg1,
      title: "Responsive Card Component",
      description:
        "This card component is fully responsive and adapts to different screen sizes. The buttons link to external pages.",
      primaryUrl: "https://www.example.com/primary",
      secondaryUrl: "https://www.example.com/secondary",
    },
    {
      imageSrc: projectImg1,
      title: "Responsive Card Component",
      description:
        "This card component is fully responsive and adapts to different screen sizes. The buttons link to external pages.",
      primaryUrl: "https://www.example.com/primary",
      secondaryUrl: "https://www.example.com/secondary",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            primaryUrl={project.primaryUrl}
            secondaryUrl={project.secondaryUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
