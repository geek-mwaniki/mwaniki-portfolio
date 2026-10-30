
import Link from "next/link";

const experience = [
  {
    role: "Head of Digital Transformation and Corporate Marketing",
    company: "Soya Solutions Eastern E. Africa K. LTD",
    period: "May 2026 – Present",
    location: "Kenya · Hybrid",
    description:
      "Leading digital transformation initiatives, corporate marketing and technology-driven improvements to business operations.",
    responsibilities: [
      "Identify opportunities for process automation and operational efficiency.",
      "Support digital platforms, CRM, analytics and technology adoption.",
      "Drive digital marketing, brand growth and customer engagement.",
      "Coordinate with IT, sales, operations and other stakeholders.",
    ],
  },
  {
    role: "Sales and Marketing Executive",
    company: "Veenet Africa",
    period: "April 2026 – Present",
    location: "Nairobi, Kenya · On-site",
    description:
      "Working in wholesale connectivity and digital infrastructure, supporting business development and relationships across the ICT industry.",
    responsibilities: [
      "Develop business opportunities among ISPs and technology businesses.",
      "Conduct market research and competitor analysis.",
      "Prepare proposals, quotations and commercial documentation.",
      "Coordinate with technical and operations teams on client requirements.",
      "Support account management, retention and capacity growth.",
    ],
  },
  {
    role: "Backend Engineer (Project)",
    company: "Self-employed",
    period: "January 2026 – Present",
    location: "Remote",
    description:
      "Developing the backend of a workforce management system, with a focus on employee data, shift scheduling and payroll processes.",
    responsibilities: [
      "Design relational data models for employees, shifts and payroll cycles.",
      "Develop REST APIs using FastAPI.",
      "Implement role-based access and business logic.",
      "Manage database persistence and schemas using MySQL.",
    ],
  },
  {
    role: "Customer Service Assistant",
    company: "Kiambu National Polytechnic",
    period: "May 2024 – August 2025",
    location: "Kenya · On-site",
    description:
      "Supported students and staff through administrative, records-related and system-related enquiries.",
    responsibilities: [
      "Handled high-volume enquiries and service requests.",
      "Retrieved, verified and updated institutional records.",
      "Supported data accuracy and confidentiality.",
      "Identified process inefficiencies and coordinated service delivery.",
    ],
  },
  {
    role: "IT Consultant",
    company: "Freelance",
    period: "February 2022 – March 2026",
    location: "Independent",
    description:
      "Provided technology consulting and software development services to individuals and organisations.",
    responsibilities: [
      "Developed websites and software applications.",
      "Worked on database design, administration and SQL.",
      "Provided computer support and technical assistance.",
      "Contributed to projects including a farming management system and book application.",
    ],
  },
  {
    role: "Social Media Marketing Specialist",
    company: "Blink Electrics Ltd",
    period: "July 2023 – September 2023",
    location: "Kenya · Internship",
    description:
      "Supported brand visibility, marketing activities and customer engagement.",
    responsibilities: [
      "Conducted market research and supported marketing strategies.",
      "Created social media content and supported brand awareness.",
      "Contributed to lead generation and customer retention.",
      "Supported campaign analysis and marketing activities.",
    ],
  },
  {
    role: "IT Consultant",
    company: "Kiambu National Polytechnic",
    period: "January 2022 – February 2022",
    location: "Kenya · Freelance",
    description:
      "Provided database and ICT infrastructure support.",
    responsibilities: [
      "Supported deployment of a database for biometric systems.",
      "Managed database relationships and data manipulation.",
      "Assisted with ICT laboratory network planning and layout.",
      "Supported software and network configuration.",
    ],
  },
  {
    role: "Intern",
    company: "Strathmore University",
    period: "September 2019 – January 2020",
    location: "Kenya · On-site",
    description:
      "Contributed to SADAC activities, application development and data-related work.",
    responsibilities: [
      "Worked on the Juneberry application and website.",
      "Collected and analysed data.",
      "Supported project activities and development tasks.",
    ],
  },
];

export default function ExperiencePage() {
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
            Career & Professional Journey
          </p>

          <h1 className="max-w-3xl text-4xl font-bold md:text-6xl">
            Experience
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            My professional journey across software development, IT consulting,
            digital transformation and the ICT industry.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#14243A]">
            Professional Experience
          </h2>
          <p className="mt-2 text-gray-600">
            Roles, responsibilities and experience gathered across different
            organisations and projects.
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${item.role}`}
              className="border border-gray-200 bg-white p-7 md:p-9"
            >
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-semibold text-[#A9843F]">
                    {item.company}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-[#14243A]">
                    {item.role}
                  </h3>
                </div>

                <span className="shrink-0 text-sm font-medium text-gray-500">
                  {item.period}
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-500">{item.location}</p>

              <p className="mt-5 text-sm leading-7 text-gray-600">
                {item.description}
              </p>

              <ul className="mt-5 space-y-2">
                {item.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex gap-3 text-sm leading-6 text-gray-600"
                  >
                    <span className="text-[#C6A15B]">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
