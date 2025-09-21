export default function Projects() {
  const projects = [
    {
      name: "Recipe Finder",
      desc: "Application React utilisant une API externe pour trouver des recettes.",
      img: "/src/assets/recette.jpg", // tu peux remplacer par un screenshot du projet
      github: "https://github.com/cahimaa/recipe-finder",
      demo: "https://recipe-finder-4gb8bmw2s-chaimaa-s-projects.vercel.app",
    },
    {
      name: "Dashboard Power BI",
      desc: "Création d'un dashboard interactif pour visualisation de données.",
      img: "https://via.placeholder.com/300x200",
      github: "#",
      demo: "#",
    },
    {
      name: "API Django + PostgreSQL",
      desc: "API RESTful avec Django et base de données PostgreSQL.",
      img: "https://via.placeholder.com/300x200",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-purple-700 mb-12 text-center">
          🚀 My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden shadow-md hover:scale-105 transition transform"
            >
              <img src={project.img} alt={project.name} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-purple-600">{project.name}</h3>
                <p className="text-gray-700 mt-2">{project.desc}</p>
                <div className="mt-4 flex justify-between">
                  <a href={project.github} target="_blank" className="text-blue-600 font-medium hover:underline">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" className="text-pink-500 font-medium hover:underline">
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
