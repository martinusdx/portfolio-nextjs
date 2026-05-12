export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-xl">
          Martinus Suryadi
        </h1>

        <div className="flex gap-6 text-sm text-zinc-300">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}