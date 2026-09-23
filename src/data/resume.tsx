import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ali BEKTASH",
  initials: "DV",
  url: "https://agb.github.io/portfolio/",
  location: "Osaka, Japan",
  locationLink: "https://www.google.com/maps/place/osaka",
  description: "アリと申します。よろしくお願いします。",
  summary:
    "I started as a designer, then moved into front-end, back-end, and full-stack development before transitioning into AI engineering. Along the way, I also took the leap into entrepreneurship. Today, I work as an AI Engineer at a Japanese company in Osaka.",
  avatarUrl: "/portfolio/me.png",
  skills: [
    "React",
    "Next.js",
    "Angular",
    "Typescript",
    "AI",
    "AI Workflow",
    "RAG",
    "Automation",
    "Harness Engineering",
    "Web and Mobile Applications",
    "UI/UX",
    "Docker",
    "Git",
    "AWS",
    "Tailwind",
    "jQuery",
    "PHP",
    "MySQL",
    "OpenAPI Tools",
    "API",
    "Full-Stack Development",
    "Lightroom",
    "Photoshop",
    "Business Level Japanese",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/agb",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/aligokselbektas",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/agokselb",
        icon: Icons.x,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Japan AI Consulting",
      href: "https://japan-ai-consulting.com/",
      badges: [],
      location: "Japan",
      title: "AI Engineer",
      logoUrl: "/portfolio/jaic.png",
      start: "Apr 2026",
      end: "PRESENT",
      description: `Japan AI Consulting supports businesses in using AI and generative AI to improve operations, increase productivity, and make better data-driven decisions.

Responsibilities:

　　● Acted as a sub-leader in a multicultural team
　　● Improved product UI and helped define design direction
　　● Worked on architectural improvements for AI products
　　● Contributed to strengthening and improving the organizational structure

Notable Clients: Toyota Japan, Daikin, Microsoft Japan, Deel Japan`,
    },
    {
      company: "Hito.run",
      href: "https://hito.run/",
      badges: [],
      location: "Japan",
      title: "Founder",
      logoUrl: "/portfolio/hito-run.png",
      start: "May 2026",
      end: "Sep 2026",
      description: `A platform for building autonomous AI workforce with minimal setup and automated management.

Sunset the project after OpenAI and Claude Code introduced native autonomous agent capabilities that significantly overlapped with the core harness layer.

Responsibilities:

　　● Developed the agent harness and autonomous execution workflows
　　● Full-stack development (frontend, backend, database, infrastructure)
　　● System architecture and cloud/server management
　　● Billing, authentication, deployment operations
　　● Product ownership as solo founder`,
    },
    {
      company: "Zengate Global",
      href: "https://www.zengate.global/",
      badges: [],
      location: "Osaka, Japan",
      title: "Full-stack Engineer",
      logoUrl: "/portfolio/zengate-global.png",
      start: "April 2025",
      end: "May 2026",
      description: `
      Zengate Global is a global company building decentralized systems using blockchain technology, aiming to redefine digital trust and expand access to financial tools.

      I worked as a full-stack engineer at Zengate Global, building decentralized web applications using blockchain technology.
`,
    },
    {
      company: "Shiftplus Inc.",
      href: "https://www.shiftplus.co.jp/",
      badges: [],
      location: "Osaka, Japan",
      title: "Front-end Engineer",
      logoUrl: "/portfolio/shiftplus.svg",
      start: "Feb 2022",
      end: "Mar 2025",
      description: `2022-08 - PRESENT | OTETSUZUKI
OTETSUZUKI is an application that digitizes an organization or municipality's physical (printed) forms. The organization or municipality can freely fill out the desired form, verify it using the MyNumberCard if they wish, and accept payments through the created form.

　　● I developed advanced form applications with Typescript
　　● Due to my background as a designer, I fulfilled design needs such as wireframes, logos, and web design when necessary.
　　● I implemented the front-end part of the listing, filtering, and email sending-receiving pages in the admin panel
　　● The form creation page is structured similarly to Google Forms and contains quite complex functionalities, which I managed to implement.
　　● I implemented the search engine (for incoming applications) in the admin panel
　　● I independently developed the notification page, payment page, help page,
administrator assignment pages, etc. in the admin panel and public side.
　　● Fix the bugs
　　● Implementation of the new feature

Some customers: Osaka City, Kanagawa City, Saison


2023-01 - 2023-08 | LGMate
LGMATE contributes to improving the efficiency of HR personnel, reflecting staff transfer requests and suitability in personnel placement, promoting career development, maintaining and enhancing staff motivation, and ultimately strengthening the organizational capabilities of the local government.

LGMATE for public servants in collaboration with Shintomi Town in Miyazaki Prefecture, Waseda University and Shiftplus Inc.

　　● Design and coding of the simulation, groups, profile etc. pages
　　● Implementation of the new feature
　　● Fix the bugs


2022-02 - 2022-08 | LGTalk
LGTALK is an application that enables communication among all team members in municipalities.

　　● I developed a WYSIWYG editor from the plain text section (textarea) of the chat application. I did this independently without using any plugins.
　　● I fixed some UX/UI problems. For example, I solved some issues in the mobile view.

Some customers: Kumamoto City, Miyazaki City, and Okayama
`,
    },
    {
      company: "Lancers.jp",
      badges: [],
      href: "https://www.lancers.jp",
      location: "Remote",
      title: "Full Stack Web Developer and Designer",
      logoUrl: "/portfolio/lancers.svg",
      start: "June 2020",
      end: "Feb 2022",
      description: `I have worked as a freelance Full Stack Web Developer and occasionally as a designer. Using my design skills, I have created various logos and interfaces. Leveraging my software expertise, I have participated in more than 20+ projects, both big and small, and successfully completed them.`,
    },
    {
      company: "Nisshin Medical Foods Corporation",
      href: "https://www.nifs.co.jp/",
      badges: [],
      location: "Wakayama, Japan",
      title: "Assistant",
      logoUrl: "/portfolio/nisshin-medical-foods.png",
      start: "Nov 2019",
      end: "June 2020",
      description:
        "Nissin Medical Foods Corporation, is headquartered in Chiyoda-ku, Tokyo, Japan. The company that provides food services to hospitals, medical facilities, and welfare facilities. My duty is to help prepare a meal-scheduling program.",
    },
    {
      company: "Simenty",
      href: "https://simenty.com",
      badges: [],
      location: "Smyra, Turkey",
      title: "Founder and Full-stack Engineer",
      logoUrl: "/portfolio/simenty.png",
      start: "June 2015",
      end: "Nov 2018",
      description:
        "Simenty is a software that automatically makes websites mobile-friendly while following responsive design guidelines. We've worked with Türkiye İş Bankası, Turkcell and many small to medium-sized businesses to build a better mobile world wide web. I have sold this startup to İNTEGRAL KALİTE DANIŞMANLIK ve EĞİTİM HİZMETLERİ LTD. ŞTİ. (Based in Istanbul)",
    },
    {
      company: "Jetmenager",
      href: "https://jetmenajer.com",
      badges: [],
      location: "Smyra, Turkey",
      title: "Full-stack Web Developer and Designer",
      logoUrl: "/portfolio/jetmenager.png",
      start: "June 2014",
      end: "April 2015",
      description:
        "Jetmenager is a social media for athletes that aims to bring professional athletes and clubs together. I worked here as a front-end, back-end and designer.",
    },
    {
      company: "Bilgius",
      href: "https://bilgius.com",
      badges: [],
      location: "Remote",
      title: "Webmaster and Designer",
      logoUrl: "/portfolio/bilgius.png",
      start: "July 2010 ",
      end: "Aug 2013",
      description:
        "Bilgius.com is a general-purpose blog site. It was initially designed for sharing general knowledge based on programming courses I attended at university. Additionally, we recently launched a Q&A platform similar to Stack Overflow.",
    },
    {
      company: "Deiba.org",
      href: "https://deiba.org",
      logoUrl: "",
      badges: [],
      location: "Remote",
      title: "Webmaster",
      start: "Oct 2007 ",
      end: "Feb 2009",
      description: "My firstwebsite.",
    },
  ],
  education: [],
  hackathons: [],
} as const;
