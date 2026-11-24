export const projects = [
  {
    slug: "ceresgo",
    path: "/projects/ceresgo",
    title: "CeresGo",
    category: "Bus Management System",
    summary:
      "A transportation management application for bus operations, ticketing, fare calculation, and inspection activities.",
    technologies: ["React", "Vite", "Laravel", "MySQL", "SQLite"],
    overview:
      "CeresGo is designed to support the day-to-day workflows of administrators, conductors, and inspectors.",
    problem:
      "Bus operations involve connected tasks across staff roles, passenger ticketing, fare estimates, and ticket inspection.",
    objectives: [
      "Bring key bus operations into one system.",
      "Support role-specific workflows for administrators, conductors, and inspectors.",
      "Support fare estimation, ticketing, and inspection.",
    ],
    features: [
      "Administrator management",
      "Conductor workflow",
      "Estimated fare calculation",
      "Inspector workflow",
      "Ticket management",
      "Offline and online data support",
    ],
    planned: [],
    architecture:
      "React and Vite client with Laravel server and MySQL / SQLite data storage, as provided in the project brief. Exact deployment and synchronization boundaries need confirmation.",
    database:
      "MySQL and SQLite are listed in the project stack. Add an ER diagram or verified entity explanation when available.",
    challenges:
      "Add a specific implementation challenge and the decision made after confirming project history.",
    lessons: "Add a concrete lesson from implementation after project review.",
    improvements: [
      "Document and verify offline synchronization behavior.",
      "Add usability improvements identified through testing.",
    ],
    image: null,
    imageAlt: "",
    status: "Feature scope supplied; verify implementation before publishing",
  },
  {
    slug: "msrs",
    path: "/projects/msrs",
    title: "Municipal Service Request System",
    category: "Government Service Management",
    summary:
      "A Java desktop application designed to organize municipal service requests and monitor their review progress.",
    technologies: ["Java", "Java Swing", "MySQL", "MVC"],
    overview:
      "A desktop service management system for request intake, administrative review, status updates, and reporting.",
    problem:
      "Municipal service requests need a clear workflow from submission through review and status tracking.",
    objectives: [
      "Organize service requests and their lifecycle.",
      "Support role-aware administrative workflows.",
      "Make request progress and reports easier to review.",
    ],
    features: [
      "Authentication",
      "Role-based access control",
      "Service catalog",
      "Request management",
      "Approval workflows",
      "Status tracking",
      "Notifications",
      "Reports",
    ],
    planned: [],
    architecture:
      "Java Swing presentation layer organized with MVC and a MySQL database, based on the supplied project stack. Confirm the exact layer boundaries before adding a diagram.",
    database:
      "MySQL is listed as the database. Add a verified ERD or entity summary when available.",
    challenges:
      "Add a specific implementation challenge and the decision made after confirming project history.",
    lessons: "Add a concrete lesson from implementation after project review.",
    improvements: [
      "Document notification behavior and delivery mechanism.",
      "Add usability improvements identified through testing.",
    ],
    image: null,
    imageAlt: "",
    status: "Feature scope supplied; verify implementation before publishing",
  },
  {
    slug: "eventease",
    path: "/projects/eventease",
    title: "TMC EventEase",
    category: "School Event Management System",
    summary:
      "A school event management platform for administrator event management and student event discovery and registration.",
    technologies: ["React", "Vite", "CSS"],
    overview:
      "EventEase is intended to give administrators and students focused experiences for school events.",
    problem:
      "Students need a clear way to discover school events, while administrators need a way to manage event information.",
    objectives: [
      "Present event information to students.",
      "Support administrator event management.",
      "Provide student event discovery and registration experiences.",
    ],
    features: [
      "Administrator event management",
      "Student event discovery and registration",
    ],
    planned: [],
    architecture:
      "Frontend technology supplied: React, Vite, and CSS. Add architecture details only after inspecting the implementation.",
    database:
      "No database technology has been confirmed. Do not claim persistence or backend behavior until verified.",
    challenges:
      "Add a specific implementation challenge and the decision made after confirming project history.",
    lessons: "Add a concrete lesson from implementation after project review.",
    improvements: [
      "Confirm implemented workflows and document any future improvements.",
    ],
    image: null,
    imageAlt: "",
    status: "Verify implementation and feature scope",
  },
];
