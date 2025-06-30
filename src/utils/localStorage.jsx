const employees = [
  {
    id: 1,
    firstName: "Amit",
    lastName: "Verma",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Fix header UI",
        description: "Update the header styling in the dashboard",
        date: "2025-06-25",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Deploy landing page",
        description: "Upload the landing page to Netlify",
        date: "2025-06-23",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "API Error Logging",
        description: "Add error logging to all task-related API routes",
        date: "2025-06-22",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Rohit",
    lastName: "Patil",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Write unit tests",
        description: "Write tests for login and register components",
        date: "2025-06-20",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update database schema",
        description: "Add 'status' field to tasks table",
        date: "2025-06-18",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Dark mode toggle",
        description: "Implement dark mode in settings",
        date: "2025-06-21",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Refactor auth flow",
        description: "Split login and register logic into separate hooks",
        date: "2025-06-24",
        category: "Auth",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Sneha",
    lastName: "Kulkarni",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Design error pages",
        description: "Create custom 404 and 500 error pages",
        date: "2025-06-22",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize images",
        description: "Compress and lazy-load all images",
        date: "2025-06-20",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix broken links",
        description: "Audit and fix all broken links in footer",
        date: "2025-06-19",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    lastName: "Sharma",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create login animation",
        description: "Add motion effects to login transitions",
        date: "2025-06-23",
        category: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Backend cleanup",
        description: "Remove unused API endpoints",
        date: "2025-06-21",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Accessibility audit",
        description: "Ensure WCAG compliance for form elements",
        date: "2025-06-24",
        category: "Accessibility",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Update Readme",
        description: "Add setup instructions to project README",
        date: "2025-06-20",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Karan",
    lastName: "Mehta",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Set up CI pipeline",
        description: "Configure GitHub Actions for auto deployment",
        date: "2025-06-18",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Error boundary",
        description: "Implement error boundary for app",
        date: "2025-06-19",
        category: "React",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Mobile nav fix",
        description: "Fix menu toggle bug in mobile view",
        date: "2025-06-20",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Anjali",
    lastName: "Deshmukh",
    email: "admin@example.com",
    password: "123",
    role: "admin"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    
    return {employees, admin};
}
