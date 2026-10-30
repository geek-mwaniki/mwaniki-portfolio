
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#F7F8FA] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#14243A] sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[#667085]">
            My professional journey across technology, business,
            software development and digital transformation.
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((item, index) => (
            <article
              key={`${item.organisation}-${item.role}`}
              className="grid gap-5 rounded-lg border border-[#E5E7EB] bg-white p-6 md:grid-cols-[210px_1fr] md:gap-10 md:p-8"
            >
              <div>
                <p className="text-sm font-semibold text-[#A9843F]">
                  {item.period}
                </p>

                <span className="mt-3 inline-block rounded-full bg-[#F0F2F5] px-3 py-1 text-xs font-medium text-[#596575]">
                  {item.type}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#14243A]">
                  {item.role}
                </h3>

                <p className="mt-1 font-semibold text-[#596575]">
                  {item.organisation}
                </p>

                <p className="mt-1 text-xs text-[#858B94]">
                  {item.location}
                </p>

                <p className="mt-4 text-sm leading-7 text-[#596575]">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-sm leading-6 text-[#596575]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6A15B]" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
