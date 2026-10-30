
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-[#101F30] text-white"
    >
      <div className="mx-auto grid min-h-[510px] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-10 lg:py-20">

        <div className="max-w-xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#C6A15B]">
            Software Engineer / Digital Transformation
          </p>

          <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl">
            Mwaniki
          </h1>

          <h2 className="mt-5 max-w-lg text-3xl font-semibold leading-tight text-[#C6A15B] sm:text-4xl">
            Digital Transformation & Software Engineering
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
            I build practical solutions, work with great people and enjoy
            turning ideas into systems that create real value.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-md bg-[#C6A15B] px-7 py-3.5 font-semibold text-[#14243A] transition-colors hover:bg-[#D5B576]"
            >
              View My Work <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="#contact"
              className="rounded-md border border-slate-300 px-7 py-3.5 font-semibold text-white transition-colors hover:border-[#C6A15B] hover:text-[#C6A15B]"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="flex min-h-[360px] items-center justify-center md:min-h-[430px]">
          <div className="flex h-[340px] w-full max-w-[430px] items-center justify-center rounded-2xl border border-white/10 bg-[#1B3047] md:h-[430px]">
            <div className="text-center">
              <span className="text-7xl font-bold tracking-tight text-[#C6A15B]/70">
                MW
              </span>
              <p className="mt-4 text-sm text-slate-400">
                Profile photograph
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
