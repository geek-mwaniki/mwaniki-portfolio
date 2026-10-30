
export type ExperienceItem = {
  role: string;
  organisation: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Head of Digital Transformation and Corporate Marketing",
    organisation: "Soya Solutions Eastern E. Africa K. LTD",
    period: "May 2026 – Present",
    location: "Kenya",
    type: "Full-time",
    description:
      "Leading digital transformation initiatives, operational improvements and corporate marketing activities.",
    responsibilities: [
      "Driving process automation, CRM adoption and digital platform improvements.",
      "Supporting brand growth, customer engagement and marketing strategy.",
      "Working across teams to improve workflows, integrations and operational efficiency.",
    ],
  },
  {
    role: "Sales and Marketing Executive",
    organisation: "Veenet Africa",
    period: "April 2026 – Present",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description:
      "Working in wholesale connectivity and digital infrastructure, supporting business development and relationships across the ISP and enterprise market.",
    responsibilities: [
      "Developing opportunities for wholesale internet capacity and dedicated internet access.",
      "Managing prospect relationships, proposals and commercial follow-ups.",
      "Coordinating with technical and operations teams on client requirements.",
      "Conducting market research and competitor analysis.",
    ],
  },
  {
    role: "Backend Engineer",
    organisation: "Independent Project",
    period: "January 2026 – Present",
    location: "Remote",
    type: "Project",
    description:
      "Developing backend functionality for a workforce management and payroll system.",
    responsibilities: [
      "Designing relational data models for employees, shifts and payroll cycles.",
      "Developing REST APIs using FastAPI.",
      "Implementing role-based access and business rules.",
      "Managing database persistence with MySQL.",
    ],
  },
  {
    role: "IT Consultant",
    organisation: "Freelance",
    period: "February 2022 – March 2026",
    location: "Kenya",
    type: "Freelance",
    description:
      "Providing software development, database management, website development and IT support services.",
    responsibilities: [
      "Developing websites and software applications.",
      "Working with SQL and MySQL databases.",
      "Providing technical support and database administration.",
      "Contributing to projects including a farming management system and a book application.",
    ],
  },
  {
    role: "Customer Service Assistant",
    organisation: "Kiambu National Polytechnic",
    period: "May 2024 – August 2025",
    location: "Kenya",
    type: "Contract",
    description:
      "Supporting students and staff through customer service, records management and administrative systems.",
    responsibilities: [
      "Handling enquiries and system-related support requests.",
      "Retrieving, verifying and updating institutional records.",
      "Supporting accurate information management and service delivery.",
    ],
  },
  {
    role: "Social Media Marketing Specialist",
    organisation: "Blink Electrics Ltd",
    period: "July 2023 – September 2023",
    location: "Kenya",
    type: "Internship",
    description:
      "Supporting marketing, lead generation, brand awareness and customer engagement.",
    responsibilities: [
      "Conducting market research and analysing campaign performance.",
      "Creating social media content and supporting promotional activities.",
      "Contributing to customer relationship management and retention.",
    ],
  },
  {
    role: "IT Consultant",
    organisation: "Kiambu National Polytechnic",
    period: "January 2022 – February 2022",
    location: "Kenya",
    type: "Freelance",
    description:
      "Providing database and infrastructure support for institutional ICT requirements.",
    responsibilities: [
      "Deploying and managing a database for biometric systems.",
      "Planning ICT laboratory network layouts.",
      "Configuring software, systems and network equipment.",
    ],
  },
  {
    role: "Intern",
    organisation: "Strathmore University",
    period: "September 2019 – January 2020",
    location: "Kenya",
    type: "Internship",
    description:
      "Worked with the SADAC team on application development and data-related activities.",
    responsibilities: [
      "Contributing to the development of the Juneberry application and website.",
      "Collecting and analysing project data.",
    ],
  },
];
