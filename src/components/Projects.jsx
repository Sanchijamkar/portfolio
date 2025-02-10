import React from "react";
import bloodbankImage from '../assets/bloodbank.jpg'
import removeImage from '../assets/remove.jpg'
import calImage from '../assets/cal.png'

const projects = [
  {
    id: 1,
    name: "Blood Bank Management System",
    technologies: "Web Development",
    image: bloodbankImage,
    github: "https://www.example.com",
    live: "https://www.github.com"
  },
  {
    id: 2,
    name: "Background Remover App using Flask",
    technologies: "HTML5 CSS3 JavaScript python",
    image: removeImage,
    github: "https://www.example.com",
    live: "https://www.github.com",
    
  },
  {
    id: 3,
    name: "Python Calculator Implementation",
    technologies: "python Tkinter",
    image: calImage,
    github: "https://www.example.com",
    live: "https://www.github.com",
  },
]
const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project =>(
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 " />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.live} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">Live</a>
            </div>
          ))}
        </div> <br /> and many more...
      </div>
    </div>
  );
};

export default Projects;
