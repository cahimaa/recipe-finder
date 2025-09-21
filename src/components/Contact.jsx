export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-pink-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">📩 Contact Me</h2>
        <p className="text-gray-700 mb-8">
          Feel free to reach out via email or connect with me on LinkedIn / GitHub.
        </p>

        <form
          action="mailto:chaimaa@example.com"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-6 text-purple-600">
          <a href="https://www.linkedin.com/in/chaimaa" target="_blank">LinkedIn</a>
          <a href="https://github.com/chaimaa" target="_blank">GitHub</a>
        </div>
      </div>
    </section>
  );
}
