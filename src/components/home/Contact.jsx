export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-32
        border-t border-white/10
        relative
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          bg-white/5
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        <p className="text-zinc-500 mb-4">
          CONTACT
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Let's Build
          Something Meaningful
        </h2>

        <p className="text-zinc-400 text-lg leading-8 max-w-2xl mx-auto mb-12">
          Interested in backend systems,
          fullstack applications,
          APIs, automation tools,
          or scalable web platforms?
          I'm always open to discussing
          interesting projects and opportunities.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">

          <a
            href="mailto:martinusdx001@gmail.com"
            className="
              px-8 py-4
              rounded-full
              bg-white
              text-black
              font-medium
              hover:scale-105
              transition duration-300
            "
          >
            Email Me
          </a>

          <a
            href="https://github.com/martinusdx"
            target="_blank"
            className="
              px-8 py-4
              rounded-full
              border border-white/10
              bg-white/5
              hover:bg-white/10
              transition duration-300
            "
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/martinus-suryadi15/"
            target="_blank"
            className="
              px-8 py-4
              rounded-full
              border border-white/10
              bg-white/5
              hover:bg-white/10
              transition duration-300
              "
            >
            LinkedIn
        </a>

        </div>

        {/* SMALL FOOTNOTE */}
        <p className="text-zinc-600 text-sm">
          Currently focused on backend engineering,
          PostgreSQL systems, APIs,
          and modern web development.
        </p>

      </div>

    </section>
  );
}