/**
 * Interface representing a work or internship experience entry.
 */
export interface Experience {
  /** Position or job title */
  role: string;
  /** Company or organization name */
  company: string;
  /** Tenure duration string (e.g. "July 2026 - Present") */
  date: string;
  /** Description of responsibilities and achievements */
  description: string;
}

/**
 * Work experience timeline dataset displayed in the Experience section.
 */
export const experiences: Experience[] = [
  {
    role: "IT Network Support Intern",
    company: "EWS Telecommunications Services",
    date: "July 2026 - Present",
    description: "Delivering technical support, diagnosing client network infrastructure issues, and maintaining enterprise hardware and communication systems.",
  },
];
