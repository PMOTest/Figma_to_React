import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TaskCard } from "@/components/ui/task-card"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const mockTasks = {
  todo: [
    {
      id: "1",
      title: "Design new landing page",
      description: "Create wireframes and mockups for the new product landing page",
      status: "todo" as const,
      priority: "high" as const,
      assignee: { name: "Sarah Johnson", initials: "SJ" },
      dueDate: "Dec 15",
      comments: 3,
      attachments: 2
    },
    {
      id: "2", 
      title: "Setup project repository",
      description: "Initialize Git repo and setup CI/CD pipeline",
      status: "todo" as const,
      priority: "medium" as const,
      assignee: { name: "Mike Chen", initials: "MC" },
      dueDate: "Dec 12",
      comments: 1,
      attachments: 0
    }
  ],
  progress: [
    {
      id: "3",
      title: "Implement user authentication",
      description: "Add login, register, and password reset functionality",
      status: "progress" as const,
      priority: "high" as const,
      assignee: { name: "Alex Rivera", initials: "AR" },
      dueDate: "Dec 18",
      comments: 5,
      attachments: 1
    },
    {
      id: "4",
      title: "Database optimization",
      description: "Optimize slow queries and add proper indexing",
      status: "progress" as const,
      priority: "medium" as const,
      assignee: { name: "Emily Zhang", initials: "EZ" },
      dueDate: "Dec 20",
      comments: 2,
      attachments: 3
    }
  ],
  review: [
    {
      id: "5",
      title: "API documentation update",
      description: "Update OpenAPI specs and add code examples",
      status: "review" as const,
      priority: "low" as const,
      assignee: { name: "David Kim", initials: "DK" },
      dueDate: "Dec 14",
      comments: 1,
      attachments: 1
    }
  ],
  done: [
    {
      id: "6",
      title: "Setup development environment",
      description: "Configure Docker containers and development tools",
      status: "done" as const,
      priority: "medium" as const,
      assignee: { name: "Lisa Wang", initials: "LW" },
      dueDate: "Dec 10",
      comments: 4,
      attachments: 0
    },
    {
      id: "7",
      title: "Initial project planning",
      description: "Define project scope, timeline, and resource allocation",
      status: "done" as const,
      priority: "high" as const,
      assignee: { name: "Tom Anderson", initials: "TA" },
      dueDate: "Dec 8",
      comments: 8,
      attachments: 5
    }
  ]
}

const columns = [
  { 
    id: "todo", 
    title: "To Do", 
    count: mockTasks.todo.length,
    className: "border-t-4 border-t-status-todo"
  },
  { 
    id: "progress", 
    title: "In Progress", 
    count: mockTasks.progress.length,
    className: "border-t-4 border-t-status-progress"
  },
  { 
    id: "review", 
    title: "In Review", 
    count: mockTasks.review.length,
    className: "border-t-4 border-t-status-review"
  },
  { 
    id: "done", 
    title: "Done", 
    count: mockTasks.done.length,
    className: "border-t-4 border-t-status-done"
  }
]

export function KanbanBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {columns.map((column) => (
        <Card key={column.id} className={`${column.className} bg-gradient-card`}>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between text-sm font-medium">
              <span>{column.title}</span>
              <span className="text-xs font-normal bg-muted px-2 py-1 rounded-full">
                {column.count}
              </span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-3">
            {mockTasks[column.id as keyof typeof mockTasks].map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                description={task.description}
                status={task.status}
                priority={task.priority}
                assignee={task.assignee}
                dueDate={task.dueDate}
                comments={task.comments}
                attachments={task.attachments}
              />
            ))}
            
            <Button 
              variant="ghost" 
              className="w-full border-2 border-dashed border-border/50 hover:border-primary/50 hover:bg-primary/5"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Task
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}