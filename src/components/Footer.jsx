export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Chaimaa. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/chaimaa" target="_blank" className="hover:text-pink-400">
            LinkedIn
          </a>
          <a href="https://github.com/chaimaa" target="_blank" className="hover:text-pink-400">
            GitHub
          </a>
          <a href="mailto:chaimaa@example.com" className="hover:text-pink-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
