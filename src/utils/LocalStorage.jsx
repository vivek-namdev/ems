import { json } from "express";

const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Fix login bug",
          description: "Resolve the login issue for user accounts.",
          date: "2024-11-21",
          category: "Development"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          title: "Prepare project report",
          description: "Compile all project details into a report.",
          date: "2024-11-22",
          category: "Documentation"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Attend team meeting",
          description: "Discuss project progress with the team.",
          date: "2024-11-20",
          category: "Meeting"
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Optimize database queries",
          description: "Improve query performance for large datasets.",
          date: "2024-11-21",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Submit timesheet",
          description: "Update and submit the weekly timesheet.",
          date: "2024-11-19",
          category: "Admin"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Create API documentation",
          description: "Document the endpoints of the new API.",
          date: "2024-11-18",
          category: "Documentation"
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Design new feature mockup",
          description: "Create UI mockups for the upcoming feature.",
          date: "2024-11-23",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Fix CSS alignment issue",
          description: "Resolve UI alignment issues on mobile screens.",
          date: "2024-11-20",
          category: "Development"
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Set up CI/CD pipeline",
          description: "Implement automated build and deployment.",
          date: "2024-11-24",
          category: "DevOps"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          title: "Analyze user feedback",
          description: "Gather insights from recent user reviews.",
          date: "2024-11-22",
          category: "Analysis"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Fix email delivery issue",
          description: "Resolve issues with email notifications.",
          date: "2024-11-19",
          category: "Development"
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          title: "Prepare for client demo",
          description: "Create slides and prepare a script for the demo.",
          date: "2024-11-25",
          category: "Presentation"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Test new payment gateway",
          description: "Run tests on the integrated payment gateway.",
          date: "2024-11-22",
          category: "Testing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Update project timeline",
          description: "Reassess and update the project milestones.",
          date: "2024-11-20",
          category: "Planning"
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];  


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', json.stringify(admin))
}

export const getLoaclStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
}