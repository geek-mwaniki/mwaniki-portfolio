
const focusAreas = [
  "Digital Transformation",
  "Software Engineering",
  "Business Systems",
  "Technology & Connectivity",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-10">

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#B18B49]">
            About Me
          </p>

          <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#14243A] sm:text-4xl">
            Technology, business and the work of bringing ideas together.
          </h2>

          <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-[#596575]">
            <p>
              My professional experience spans software development,
              digital transformation, IT consulting and the ICT industry.
              Working across these areas has given me an appreciation of
              both the technical side of technology and the business
              challenges it is meant to address.
            </p>

            <p>
              I enjoy developing practical software solutions, improving
              business processes and exploring how technology can make
              organisations work better.
            </p>

            <p>
              I also write about technology and industry developments,
              sharing perspectives shaped by professional experience
              and ongoing learning.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-xl bg-[#14243A] p-8 text-white sm:p-10">
          <h3 className="text-xl font-semibold">
            Areas of Focus
          </h3>

          <div className="mt-7 space-y-5">
            {focusAreas.map((area, index) => (
              <div
                key={area}
                className="flex items-center gap-4 border-b border-white/15 pb-4 last:border-0"
              >
                <span className="text-sm font-semibold text-[#C6A15B]">
                  0{index + 1}
                </span>

                <span className="text-base font-medium text-slate-100">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
