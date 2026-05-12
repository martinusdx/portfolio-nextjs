const projects = [
  {
    title: "QR Attendance PWA",
    description:
      "Mobile PWA attendance system using QR/barcode scanning, GPS location validation, remote leave requests, and real-time attendance tracking.",
  },

  {
    title: "BlockedStock Management",
    description:
      "WinForms C# application for managing Client_Stock data with CRUD operations, SQL Server integration, and stored procedure-based processing.",
  },

  {
    title: "UtilityTools",
    description:
      "Qt C++ desktop helper application connected to RT server with memory editing tools, database CRUD features, and restricted SQL editor for safer operational access.",
  },
];

export default function OtherProjects() {
  return (
    <section className="py-32 border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6">

        <p className="text-zinc-500 mb-4">
          OTHER PROJECTS
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          More Things I've Built
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                p-8
                rounded-3xl
                border border-white/10
                bg-white/5
                transition duration-300
                hover:-translate-y-2
                hover:border-white/20
              "
            >

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-7">
                {project.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}