import Card from "./card";
import projectImg1 from "../assets/projects/projectImg1.png";
import projectImg2 from "../assets/projects/projectImg2.png";
import projectImg3 from "../assets/projects/projectImg3.png";
import projectImg4 from "../assets/projects/projectImg4.png";

const Projects = () => {
  const projects = [
    {
      imageSrc: projectImg1,
      title: "Electron",
      description:
        "Electron is an eCommerce website for electronics, built with Redux Toolkit, featuring 'add to cart' functionality and total amount calculation to enhance the shopping experience.",
      tech: "React, Tailwind CSS, Redux-toolkit",
      primaryUrl:
        "https://github.com/Md-Solaiman-Ovi/eCommerce-electronic-website",
      secondaryUrl: "https://e-commerce-electronic-website.vercel.app/",
    },
    {
      imageSrc: projectImg2,
      title: "Digi Koein",
      description:
        "Digi Koein features a visually appealing demo page designed using TypeScript, React, and Tailwind CSS, showcasing its potential without any implemented functionality",
      tech: "React, Tailwind CSS",
      primaryUrl:
        "https://github.com/Md-Solaiman-Ovi/assignment-junior-frontend-developer",
      secondaryUrl: "https://digi-koein-jrfintel.netlify.app/",
    },
    {
      imageSrc: projectImg3,
      title: "E-commerce",
      description:
        "The eCommerce project is a fully completed application with a polished frontend design, showcasing its features and functionality, although the backend is not yet available for deployment.",
      tech: "Next.js, Tailwind CSS, Redux-toolkit ",
      primaryUrl:
        "https://github.com/Md-Solaiman-Ovi/ecommerce-shop/tree/development",
      secondaryUrl: "https://md-solaiman-ovi-commerce-shop.netlify.app/",
    },
    {
      imageSrc: projectImg4,
      title: "Demo Card",
      description:
        "This card component is fully responsive and adapts to different screen sizes. The buttons link to external pages.",
      tech: "",
      primaryUrl: "https://www.example.com/primary",
      secondaryUrl: "https://www.example.com/secondary",
    },
  ];
  return (
    <div className="flex flex-col px-4 xl:px-0">
      <h2 className="mb-6 text-center text-4xl font-bold text-teal-500 lg:text-start">
        My Projects
      </h2>
      <p className="mb-8 text-center text-black dark:text-gray-400 lg:text-start">
        As a front-end developer, I specialize in building responsive, visually
        appealing, and user-centric interfaces. My projects focus on delivering
        smooth user experiences by combining modern technologies like React,
        Next.js, TypeScript, Tailwind CSS, and state management tools such as
        Redux Toolkit.
      </p>
      <div className="grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            tech={project.tech}
            primaryUrl={project.primaryUrl}
            secondaryUrl={project.secondaryUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
