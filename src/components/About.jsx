import Avatar from "../assets/About.svg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* Photo / Avatar */}
        <div className="w-65 h-64">
          <img
            src={Avatar}
            alt="About Chaimaa"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Texte */}
        <div>
          <h2 className="text-3xl font-bold text-purple-700 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hi 👋, I’m <span className="font-semibold text-pink-500">Chaimaa</span>, 
            a passionate <span className="text-purple-600">Web Developer</span> with
            experience in building modern websites, dashboards, and APIs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I’ve worked with <span className="font-semibold">HTML, CSS, JavaScript, React, Next.js, Django, PostgreSQL</span>,
            and also created data dashboards with <span className="font-semibold">Power BI</span>. 
          </p>
          <p className="text-gray-700 leading-relaxed">
            My goal is to help businesses and people bring their ideas to life 🌟.
          </p>
        </div>
      </div>
    </section>
  );
}
