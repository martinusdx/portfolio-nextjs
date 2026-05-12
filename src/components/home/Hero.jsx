"use client";

export default function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  
  return (
    // <motion.section
    //   initial={{ opacity: 0, y: 40 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.8 }}
    //   className="min-h-screen flex items-center"
    // >
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-zinc-400 mb-4">
          Backend & Fullstack Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Building Real-World Systems,
          APIs, and Modern Web Apps
        </h1>

        <p className="text-zinc-400 text-lg max-w-2xl">
          Specialized in backend systems,
          PostgreSQL, API integration,
          and modern web development.
        </p>

        <div className="flex gap-4 mt-10">

          <button
            onClick={() => scrollToSection("projects")}
            className="
              px-6 py-3
              rounded-full
              bg-white
              text-black
              font-medium
              hover:scale-105
              transition
            "
          >
            View Projects
          </button>

          <a
            href="https://github.com/martinusdx"
            target="_blank"
            className="
              px-6 py-3
              rounded-full
              border border-white/10
              bg-white/5
              hover:bg-white/10
              transition
            "
          >
            GitHub
          </a>

        </div>

      </div>
    </section> 
  );
}