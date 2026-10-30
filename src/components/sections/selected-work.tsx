
const projects = [
  {
    name: "Project Nexus",
    category: "Software Development",
    status: "In Development",
    description:
      "A wholesale capacity billing and operations platform designed around the needs of internet service providers.",
    visual: "NEXUS",
    visualLabel: "ISP OPERATIONS",
    theme: "navy",
  },
  {
    name: "Workforce Management System",
    category: "Backend Engineering",
    status: "Backend Project",
    description:
      "A workforce management system covering employee records, shift scheduling, payroll cycles and business rules.",
    visual: "WORKFORCE",
    visualLabel: "PEOPLE & OPERATIONS",
    theme: "grey",
  },
  {
    name: "Between Systems & Souls",
    category: "Web Development",
    status: "Personal Project",
    description:
      "A digital platform exploring the relationship between business systems, technology and creative storytelling.",
    visual: "SYSTEMS & SOULS",
    visualLabel: "LOGIC MEETS LIFE",
    theme: "gold",
  },
  {
    name: "Technical Writing",
    category: "Research & Communication",
    status: "Published Work",
    description:
      "Articles and perspectives on connectivity, digital transformation, SaaS and the changing technology landscape.",
    visual: "PERSPECTIVES",
    visualLabel: "TECHNOLOGY & INDUSTRY",
    theme: "navy",
  },
];

const visualThemes = {
  navy: "bg-[#14243A] text-white",
  grey: "bg-[#E8EBEF] text-[#14243A]",
  gold: "bg-[#C6A15B] text-[#14243A]",
};

export default function SelectedWork() {
  return (
    <section id="projects" className="bg-[#F7F8FA] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#14243A] sm:text-4xl">
              Selected Work
            </h2>
            <p className="mt-2 text-base text-[#858B94]">
              A few projects and contributions I’ve worked on.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-lg border border-[#E5E7EB] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`relative flex h-44 flex-col justify-between overflow-hidden p-5 ${
                  visualThemes[project.theme as keyof typeof visualThemes]
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.16em] opacity-75">
                    {project.visualLabel}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-current opacity-60" />
                </div>

                <div>
                  <div className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {project.visual}
                  </div>
                  <div className="mt-2 h-[2px] w-12 bg-current opacity-50 transition-all duration-300 group-hover:w-20" />
                </div>
              </div>

              <div className="flex min-h-[225px] flex-col p-5">
                <div className="mb-3">
                  <span className="inline-flex rounded-full bg-[#F0F2F5] px-3 py-1 text-xs font-medium text-[#596575]">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold leading-snug text-[#14243A]">
                  {project.name}
                </h3>

                <p className="mt-1 text-xs font-semibold text-[#B18B49]">
                  {project.category}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-[#667085]">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
