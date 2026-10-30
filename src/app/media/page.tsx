
import Link from "next/link";

const mediaPlatforms = [
  {
    name: "DevDexterity",
    category: "Technology & Digital Content",
    description:
      "A platform for exploring technology, software development, digital skills and ideas shaping the technology space.",
    status: "Content platform",
  },
  {
    name: "Between Systems & Souls",
    category: "Technology & Creative Storytelling",
    description:
      "A creative platform bringing together business systems, technology and storytelling through two distinct experiences.",
    status: "Independent project",
  },
];

export default function MediaPage() {
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
            Beyond professional work
          </p>

          <h1 className="max-w-3xl text-4xl font-bold md:text-6xl">
            Media & Ideas
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Platforms and creative work through which I explore technology,
            communicate ideas and connect different perspectives.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#14243A]">
            Selected platforms
          </h2>
          <p className="mt-2 text-gray-600">
            Independent spaces for technology, creativity and communication.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {mediaPlatforms.map((platform, index) => (
            <article
              key={platform.name}
              className="flex min-h-[300px] flex-col justify-between border border-gray-200 bg-white p-8"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#A9843F]">
                  {platform.category}
                </p>

                <h3 className="mt-5 text-3xl font-bold text-[#14243A]">
                  {platform.name}
                </h3>

                <p className="mt-5 max-w-lg leading-7 text-gray-600">
                  {platform.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">
                <span className="text-xs text-gray-500">
                  {platform.status}
                </span>
                <span className="text-2xl font-semibold text-[#C6A15B]">
                  0{index + 1}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
