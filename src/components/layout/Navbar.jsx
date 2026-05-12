"use client";

export default function Navbar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-[9999]
        border-b border-white/10
        bg-black/70
        backdrop-blur-lg
      "
    >

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="font-bold text-xl text-white">
          Martinus Suryadi
        </h1>

        {/* MENU */}
        <div className="flex gap-6 text-sm text-zinc-300">

          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-white transition"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-white transition"
          >
            Skills
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-white transition"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-white transition"
          >
            Contact
          </button>

        </div>

      </div>

    </nav>
  );
}