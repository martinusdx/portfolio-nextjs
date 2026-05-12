export default function About() {
  return (
    <section
      id="about"
      className="py-32 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-zinc-500 mb-4">
          ABOUT
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          Passionate About Building
          Reliable Systems
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-zinc-400 leading-8 text-lg">

          <p>
            I focus on backend systems,
            database engineering, API integrations,
            and modern web applications.
            I enjoy solving real-world technical
            problems and building scalable solutions.
          </p>

          <p>
            Experienced with PostgreSQL,
            C++, Qt Framework, Supabase,
            Flask, and modern JavaScript ecosystem.
            Currently learning Next.js and advanced
            frontend architecture.
          </p>

        </div>

      </div>
    </section>
  );
}