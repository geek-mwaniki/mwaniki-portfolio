
import Link from "next/link";

const projects = [
  {
    number: "01",
    name: "Project Nexus",
    category: "Software Development",
    status: "In Development",
    description:
      "A wholesale connectivity billing and operations platform designed around the needs of internet service providers and capacity providers.",
    details: [
      "Capacity allocation and account management",
      "Separate billing accounts and monthly invoicing",
      "Prorated billing for mid-month onboarding",
      "A foundation for broader ISP operations management",
    ],
    technology: ["Next.js", "React", "SQL"],
  },
  {
    number: "02",
    name: "Workforce Management System",
    category: "Backend Engineering",
    status: "Backend Project",
    description:
      "A backend system focused on employee records, shift scheduling and payroll cycle management.",
    details: [
      "Relational employee and shift data models",
      "REST API development",
      "Role-based access control",
      "Payroll cycle and business rule management",
    ],
    technology: ["Python", "FastAPI", "MySQL"],
  },
  {
    number: "03",
    name: "Between Systems & Souls",
    category: "Web Development",
    status: "Personal Project",
    description:
      "A digital platform bringing together technology, business systems and creative storytelling under one brand.",
    details: [
      "A dedicated Systems experience",
      "A separate Souls experience",
      "Shared visual identity and navigation",
      "An evolving platform for ideas and creative work",
    ],
    technology: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    number: "04",
    name: "Technical Writing",
    category: "Research & Communication",
    status: "Published Work",
    description:
      "Articles and professional perspectives on connectivity, internet infrastructure, software, digital transformation and the Kenyan technology industry.",
    details: [
      "Industry analysis and commentary",
      "Connectivity and infrastructure topics",
      "Software and business perspectives",
      "Technology communication on LinkedIn",
    ],
    technology: ["Research", "Technical Writing", "Industry Analysis"],
  },
];

export default function ProjectsPage() {
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
            Selected Work
          </p>

          <h1 className="max-w-3xl text-4xl font-bold md:text-6xl">
            Projects & Contributions
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            A selection of software projects, independent work and technical
            contributions that reflect my interests and professional journey.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid gap-8 border border-gray-200 bg-white p-7 md:grid-cols-[100px_1fr] md:p-10"
            >
              <div className="text-3xl font-bold text-[#C6A15B]">
                {project.number}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A9843F]">
                    {project.category}
                  </p>
                  <span className="border border-gray-200 px-3 py-1 text-xs text-gray-500">
                    {project.status}
                  </span>
                </div>

                <h2 className="mt-3 text-2xl font-bold text-[#14243A] md:text-3xl">
                  {project.name}
                </h2>

                <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-6 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold text-[#14243A]">
                      Scope of work
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {project.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-3 text-sm leading-6 text-gray-600"
                        >
                          <span className="text-[#C6A15B]">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#14243A]">
                      Technologies & skills
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technology.map((tech) => (
                        <span
                          key={tech}
                          className="border border-gray-200 px-3 py-2 text-xs text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
