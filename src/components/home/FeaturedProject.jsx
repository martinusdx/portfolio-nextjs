import Image from "next/image";

export default function FeaturedProject() {
  return (
    <section
      id="projects"
      className="
        py-32 border-t 
        border-white/10
        relative
        overflow-hidden
      "
    >

      <div
        className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[700px]
            bg-blue-500/10
            blur-[140px]
            rounded-full
            pointer-events-none
        "
      />  

      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE */}
        <p className="text-zinc-500 mb-4">
          FEATURED PROJECT
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          Attendance PWA System
        </h2>

        {/* DESCRIPTION */}
        <p className="text-zinc-400 text-lg leading-8 max-w-3xl mb-16">
          A Progressive Web App attendance system
          with authentication, attendance tracking,
          leave requests, push notifications,
          and multi-device session handling
          using Supabase and PostgreSQL.
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-3 mb-16">

          {[
            "Next.js",
            "Supabase",
            "PostgreSQL",
            "PWA",
            "JavaScript",
            "Tailwind CSS",
          ].map((tech) => (
            <div
              key={tech}
              className="
                px-4 py-2
                rounded-full
                bg-white/5
                border border-white/10
                text-sm text-zinc-300
              "
            >
              {tech}
            </div>
          ))}

        </div>

        {/* IMAGE SHOWCASE */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* LOGIN */}
          <div
            className="
              rounded-3xl
              overflow-hidden
              border border-white/10
              bg-white/5
              transition duration-300 
              hover:scale-[1.02]
            "
          >
            <Image
              src="/images/projects/attendance/login.PNG"
              alt="Login Screen"
              width={500}
              height={1000}
              className="w-full h-auto"
            />
          </div>

          {/* DASHBOARD */}
          <div
            className="
              rounded-3xl
              overflow-hidden
              border border-white/10
              bg-white/5
              transition duration-300 
              hover:scale-[1.02]
            "
          >
            <Image
              src="/images/projects/attendance/dashboard-1.PNG"
              alt="Dashboard Screen"
              width={500}
              height={1000}
              className="w-full h-auto"
            />
          </div>

          {/* ADMIN */}
          <div
            className="
              rounded-3xl
              overflow-hidden
              border border-white/10
              bg-white/5
              transition duration-300 
              hover:scale-[1.02]
            "
          >
            <Image
              src="/images/projects/attendance/admin-1.PNG"
              alt="Admin Screen"
              width={500}
              height={1000}
              className="w-full h-auto"
            />
          </div>

        </div>

        {/* FEATURE LIST */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 text-zinc-400">

          <div>
            ✅ Authentication & Session Management
          </div>

          <div>
            ✅ Attendance Check-in System
          </div>

          <div>
            ✅ Push Notification Reminder
          </div>

          <div>
            ✅ Multi-device Session Handling
          </div>

          <div>
            ✅ Mobile Responsive PWA
          </div>

          <div>
            ✅ Admin Attendance Monitoring
          </div>

        </div>

      </div>
    </section>
  );
}