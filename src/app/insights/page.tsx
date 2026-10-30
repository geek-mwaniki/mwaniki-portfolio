
import Link from "next/link";
import { insights } from "@/data/insights";

const featuredArticles = insights.filter(
  (article) =>
    article.category === "Connectivity & Infrastructure" ||
    article.category === "ISP Industry"
);

const otherArticles = insights.filter(
  (article) => !featuredArticles.includes(article)
);

export default function InsightsPage() {
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
            Writing & Perspectives
          </p>

          <h1 className="max-w-3xl text-4xl font-bold md:text-6xl">
            Insights
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Perspectives on technology, connectivity, business and the
            experiences shaping the digital industry.
          </p>

          <a
            href="https://www.linkedin.com/in/angela-njoki-mwaniki/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex border border-[#C6A15B] px-5 py-3 text-sm font-semibold text-[#C6A15B] transition hover:bg-[#C6A15B] hover:text-[#14243A]"
          >
            Visit my LinkedIn profile ↗
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#A9843F]">
            Industry perspectives
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#14243A]">
            Connectivity & the ISP industry
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredArticles.map((article, index) => (
            <article
              key={article.url}
              className={`flex min-h-[300px] flex-col justify-between p-8 ${
                index === 0
                  ? "bg-[#14243A] text-white"
                  : "border border-[#D9DEE5] bg-white text-[#14243A]"
              }`}
            >
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    index === 0 ? "text-[#C6A15B]" : "text-[#A9843F]"
                  }`}
                >
                  {article.category}
                </p>

                <h3 className="mt-6 text-2xl font-bold leading-snug">
                  {article.title}
                </h3>

                <p
                  className={`mt-4 text-sm leading-7 ${
                    index === 0 ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {article.description}
                </p>
              </div>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 text-sm font-semibold ${
                  index === 0
                    ? "text-[#C6A15B]"
                    : "text-[#14243A] hover:text-[#A9843F]"
                }`}
              >
                Read article ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#A9843F]">
            More writing
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#14243A]">
            Technology, business & perspectives
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherArticles.map((article) => (
            <article
              key={article.url}
              className="flex flex-col border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#C6A15B] hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#A9843F]">
                {article.category}
              </p>

              <p className="mt-2 text-xs text-gray-500">{article.date}</p>

              <h3 className="mt-5 text-xl font-bold leading-snug text-[#14243A]">
                {article.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                {article.description}
              </p>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 text-sm font-semibold text-[#14243A] hover:text-[#A9843F]"
              >
                Read article ↗
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
