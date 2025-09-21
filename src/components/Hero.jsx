import Avatar from "../assets/avatar.svg"; // Assure-toi que ton avatar.svg est dans src/assets

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-8 bg-gradient-to-r from-pink-100 to-purple-100 px-6"
    >
      {/* Texte */}
      <div className="max-w-md">
        <h1 className="text-5xl font-bold text-purple-700">
          Hi, I’m <span className="text-pink-500">Chaimaa</span> 👋
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-md">
          I’m a <span className="font-semibold">Web Developer</span> passionate about 
          <span className="text-purple-600"> React</span>, 
          <span className="text-green-600"> Django</span>, and 
          <span className="text-yellow-600"> Data Dashboards</span>.
        </p>

        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            🚀 View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-pink-400 text-white font-semibold rounded-lg shadow-md hover:bg-pink-500 transition"
          >
            📩 Contact Me
          </a>
        </div>
      </div>

      {/* Avatar */}
      <div className="w-65 h-64">
        <img
          src={Avatar}
          alt="Avatar Chaimaa"
          className="rounded-2xl shadow-lg w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
