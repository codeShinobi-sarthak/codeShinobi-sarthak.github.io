import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen bg-lightYellow text-darkGray">
      {/* About Me Section */}
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-softOrange mb-8">
          About Me
        </h1>
        <p className="text-lg mb-6">
          Hi! I'm Sarthak jain, a passionate developer with a love for creating intuitive, engaging, and efficient web applications. I enjoy learning and applying new technologies to solve real-world problems.
        </p>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-softOrange mb-8">
          Skills
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <li className="text-lg">JavaScript</li>
          <li className="text-lg">React</li>
          <li className="text-lg">Node.js</li>
          <li className="text-lg">TailwindCSS</li>
          {/* Add more skills as needed */}
        </ul>
      </div>

      {/* Tech Stack Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-softOrange mb-8">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <img src="/path/to/react-logo.png" alt="React" className="w-16 mx-auto mb-2"/>
            <p className="text-center">React</p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <img src="/path/to/node-logo.png" alt="Node.js" className="w-16 mx-auto mb-2"/>
            <p className="text-center">Node.js</p>
          </div>
          {/* Add more technologies as needed */}
        </div>
      </div>
    </section>
  );
};

export default Home;
