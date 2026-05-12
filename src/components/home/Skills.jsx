const skills = [
  "C++",
  "Qt Framework",
  "PostgreSQL",
  "Supabase",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "Flask",
  "OpenCV",
  "REST API",
  "Git",
  "Linux",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-zinc-500 mb-4">
          SKILLS
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Technologies & Tools
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="
                px-5 py-3
                rounded-full
                border border-white/10
                bg-white/5
                text-zinc-300
              "
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}