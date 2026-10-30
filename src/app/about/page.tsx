
import Link from "next/link";

export default function AboutPage() {
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
            A little about me
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Technology makes more sense when it solves real problems.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.5fr_1fr] lg:px-10">
        <div>
          <h2 className="text-2xl font-bold text-[#14243A]">
            My professional journey
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
            <p>
              My experience sits at the intersection of software development,
              digital transformation, IT consulting and the wider ICT industry.
              Each area has given me a different perspective on how technology
              works and the role it plays in organisations.
            </p>

            <p>
              My technical work has involved software development, backend
              systems, databases and application design. My work in business
              and the ICT industry has exposed me to connectivity, customer
              needs, commercial decisions and the practical challenges
              organisations face when adopting technology.
            </p>

            <p>
              I am particularly interested in building useful systems,
              improving business processes and finding practical ways to
              connect technical solutions with organisational needs.
            </p>

            <p>
              Beyond my professional work, I write about technology,
              infrastructure and the experiences that shape the industry.
              I also enjoy exploring ideas through independent software and
              digital projects.
            </p>
          </div>
        </div>

        <aside className="h-fit border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-bold text-[#14243A]">
            Areas of focus
          </h2>

          <ul className="mt-6 space-y-4">
            {[
              "Digital transformation",
              "Software and backend development",
              "Business systems and process improvement",
              "ICT and connectivity",
              "Technology research and writing",
            ].map((area) => (
              <li
                key={area}
                className="flex gap-3 border-b border-gray-100 pb-4 text-sm text-gray-600 last:border-0"
              >
                <span className="text-[#C6A15B]">●</span>
                {area}
              </li>
            ))}
          </ul>

          <Link
            href="/experience"
            className="mt-8 inline-flex text-sm font-semibold text-[#14243A] hover:text-[#A9843F]"
          >
            Explore my experience →
          </Link>
        </aside>
      </section>
    </main>
  );
}
