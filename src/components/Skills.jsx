export default function Skills() {
  const skills = [
    { name: "HTML", color: "bg-orange-500" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-yellow-400" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Next.js", color: "bg-gray-800" },
    { name: "Django", color: "bg-green-600" },
    { name: "PostgreSQL", color: "bg-indigo-600" },
    { name: "Workbench", color: "bg-teal-600" },
    { name: "APIs", color: "bg-purple-500" },
    { name: "SQL Queries", color: "bg-red-500" },
    { name: "Power BI", color: "bg-yellow-600" },
  ];

  return (
    <section id="skills" className="py-20 bg-pink-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">💡 My Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`px-6 py-2 rounded-full text-white font-medium shadow-md ${skill.color}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
