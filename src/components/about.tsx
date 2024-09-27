// import Navbar from "./navbar";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 bg-slate-200 transition duration-300 ease-in-out dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-white">Welcome to the Galaxy</h1>
      <p className="max-w-xl text-center text-lg text-gray-300">
        Explore the depths of the universe while scrolling through the wonders
        of the galaxy.
      </p>
      <button className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600">
        Learn More
      </button>
    </div>
  );
};

export default About;
