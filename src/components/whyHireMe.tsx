import { useState } from "react";
import TabContent from "./tabContent";
import EducationCard from "./educationCard";
import Skills from "./skills";

const WhyHireMe = () => {
  const options = ["Experience", "Education", "Skills", "About me"];
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="flex w-full items-center px-4">
      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        {/* Left Section (Tabs) */}
        <div className="lg:w-2/6">
          <h2 className="mb-6 text-4xl font-bold dark:text-white">
            Why hire me?
          </h2>
          <p className="mb-8 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            consequat, faucibus et, et.
          </p>
          <div className="space-y-4">
            {options.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`w-full rounded-md px-4 py-2 text-left text-lg font-semibold ${
                  activeTab === tab.toLowerCase()
                    ? "bg-teal-400 text-black"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section (Content) */}
        <div className="lg:w-4/6">
          <TabContent isActive={activeTab === "education"}>
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white">
              My education
            </h2>
            <p className="mb-8 text-black dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque consequat.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <EducationCard
                year="2023"
                title="Full Stack Web Development Bootcamp"
                platform="Online Course Platform"
              />
              <EducationCard
                year="2022"
                title="Front-end Track"
                platform="Codecademy"
              />
              <EducationCard
                year="2020 - 2021"
                title="Programming Course"
                platform="Online Course"
              />
              <EducationCard
                year="2019"
                title="Certified Web Developer"
                platform="Tech Institute"
              />
            </div>
          </TabContent>

          {/* Add similar TabContent for other sections (Experience, Skills, About me) */}
          <TabContent isActive={activeTab === "experience"}>
            <h2 className="mb-6 text-4xl font-bold">My Experience</h2>
            {/* Add Experience Content */}
          </TabContent>

          <TabContent isActive={activeTab === "skills"}>
            <h2 className="mb-6 text-4xl font-bold">My Skills</h2>
            <p className="mb-8 text-black dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque consequat.
            </p>
            <Skills />
          </TabContent>

          <TabContent isActive={activeTab === "about me"}>
            <h2 className="mb-6 text-4xl font-bold">About Me</h2>
            {/* Add About Me Content */}
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
