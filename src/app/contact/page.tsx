import Link from "next/link";

const contactLinks = [
  {
    name: "LinkedIn",
    description: "Professional background, industry discussions and articles.",
    url: "https://www.linkedin.com/in/angela-njoki-mwaniki/",
  },
  {
    name: "GitHub",
    description: "Software projects and technical work.",
    url: "https://github.com/geek-mwaniki/",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA]">
      <section className="bg-[#14243A] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-10 inline-block text-sm text-[#C6A15B] hover:text-white"
          >
            ← Back to portfolio
          </Link>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C6A15B]">
            Get in touch
          </p>

          <h1 className="max-w-3xl text-4xl font-bold md:text-6xl">
            Let’s connect.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            I’m open to professional opportunities, collaborations and
            conversations around software, technology and digital
            transformation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <h2 className="text-2xl font-bold text-[#14243A]">
          Find me online
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {contactLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-200 bg-white p-8 transition-colors hover:border-[#C6A15B]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-[#14243A]">
                  {item.name}
                </h3>
                <span className="text-2xl text-[#C6A15B] transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <p className="mt-4 text-gray-600">{item.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}