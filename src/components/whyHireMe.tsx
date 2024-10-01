import { useState } from "react";
import TabContent from "./tabContent";
import EducationCard from "./educationCard";
import Skills from "./skills";
import ExperienceCard from "./experienceCard";

const WhyHireMe = () => {
  const options = ["Skills", "Experience", "Education", "About me"];
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="flex w-full items-center px-4">
      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        {/* Left Section (Tabs) */}
        <div className="lg:w-2/6">
          <h2 className="mb-6 text-4xl font-bold dark:text-white">
            Why hire me?
          </h2>
          <p className="mb-8 dark:text-gray-400">
            I am a passionate Software Engineer focusing on Frontend Development
            with a strong problem-solving mindset and commitment to excellence.
          </p>
          <div className="grid grid-cols-2 items-center gap-4 lg:grid-cols-1">
            {options.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`w-full whitespace-nowrap rounded-md px-4 py-2 text-center text-xs font-semibold lg:text-left lg:text-lg ${
                  activeTab === tab.toLowerCase()
                    ? "bg-teal-400 text-black"
                    : "bg-gray-500 text-white hover:bg-gray-600 dark:bg-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section (Content) */}
        <div className="lg:w-4/6">
          {/* Add similar TabContent for other sections (Experience, Skills, About me) */}
          <TabContent isActive={activeTab === "experience"}>
            <h2 className="mb-6 text-center text-4xl font-bold text-teal-500 lg:text-start">
              My Experience
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <ExperienceCard
                year="April 2022 - Present"
                title="Junior Software Enginerer"
                platform="AriSaf Tech Ltd."
              />
            </div>
          </TabContent>
          <TabContent isActive={activeTab === "education"}>
            <h2 className="mb-6 text-center text-4xl font-bold text-teal-500 lg:text-start">
              My education
            </h2>
            <p className="mb-8 text-center text-black dark:text-gray-400 lg:text-start">
              I have developed a strong foundation in Computer Science, driven
              by my commitment and passion for learning, preparing me for
              success in the tech industry.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <EducationCard
                year="2018 - 2022"
                title="Bachelor of Science"
                department="Department of CSE"
                platform="East West University"
                cgpa="CGPA: 3.26 (In the scale of 4.00)"
              />
              <EducationCard
                year="2016 - 2017"
                title="Higher Secondary Certificate"
                department="Background of Science"
                platform="Govt. Science College, Tejgoan"
                cgpa="GPA: 4.67 (In the scale of 5.00)"
              />
              <EducationCard
                year="2014 - 2015"
                title="Secondary School Certificate"
                department="Background of Science"
                platform="Ananda Nagar Adarsha Bidyalay"
                cgpa="GPA: 5.00 (In the scale of 5.00)"
              />
            </div>
          </TabContent>

          <TabContent isActive={activeTab === "skills"}>
            <h2 className="mb-6 text-center text-4xl font-bold text-teal-500 lg:text-start">
              My Skills
            </h2>
            <p className="mb-8 text-center text-black dark:text-gray-400 lg:text-start">
              As a front-end developer, I specialize in crafting visually
              appealing and user-friendly interfaces, utilizing technologies
              such as:
            </p>
            <Skills />
          </TabContent>

          <TabContent isActive={activeTab === "about me"}>
            <h2 className="mb-6 text-4xl font-bold text-teal-500">About Me</h2>

            <p className="rounded-lg bg-slate-400 p-4 text-black dark:bg-gray-800 dark:text-white/70">
              I’m Md Solainman Ovi, a front-end developer with almost 2 years of
              experience specializing in React.js, Next.js, Alpine.js, Tailwind
              CSS, and TypeScript. My journey began at East West University, and
              I currently work at AriSaf Tech Ltd, where I create responsive,
              user-centric web applications.
              <br /> <br />
              I excel in crafting clean, efficient code and thrive in
              collaborative environments. My passion for continuous learning
              drives me to stay updated with industry trends, ensuring I deliver
              the best solutions to clients.
              <br />
              <br />
              I’m eager to take on new challenges and contribute my skills to
              innovative projects. Let’s connect and build something amazing
              together!
            </p>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
