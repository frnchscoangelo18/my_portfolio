export interface Certificate {
  title: string;
  issuer: string;
  category: "Python" | "Data Science" | "SQL";
  date: string;
  link: string;
  logo: string;
}

export const certificates: Certificate[] = [
  {
    title: "Intermediate Python",
    issuer: "DataCamp",
    category: "Python",
    date: "January 2026",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/5e97fdfa1acf991a0d8a58b1dba0b1821da80359?raw=1",
    logo: "https://cdn.simpleicons.org/datacamp/03EF62",
  },
  {
    title: "Data Manipulation with pandas",
    issuer: "DataCamp",
    category: "Data Science",
    date: "Feb 2026",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/936a431c8311a0f00ff7fda67cf70e39e8868e8d?raw=1",
    logo: "https://cdn.simpleicons.org/datacamp/03EF62",
  },
  {
    title: "Applying SQL to Real-World Problems",
    issuer: "DataCamp",
    category: "SQL",
    date: "March 2026",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/7db9c98e6c80b84f72396b095f7fef4990674de0?raw=1",
    logo: "https://cdn.simpleicons.org/datacamp/03EF62",
  },
];

