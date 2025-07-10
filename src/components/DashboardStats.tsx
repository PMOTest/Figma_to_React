import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  CheckCircle, 
  Clock, 
  Users, 
  FolderOpen,
  TrendingUp,
  AlertTriangle
} from "lucide-react"

const stats = [
  {
    title: "Total Projects",
    value: "12",
    change: "+2 this month",
    icon: FolderOpen,
    color: "text-primary"
  },
  {
    title: "Active Tasks", 
    value: "47",
    change: "+8 this week",
    icon: Clock,
    color: "text-status-progress"
  },
  {
    title: "Completed Tasks",
    value: "156",
    change: "+23 this week", 
    icon: CheckCircle,
    color: "text-status-done"
  },
  {
    title: "Team Members",
    value: "8",
    change: "2 new this month",
    icon: Users,
    color: "text-accent-foreground"
  }
]

const projectProgress = [
  {
    name: "Website Redesign",
    progress: 75,
    status: "On Track",
    dueDate: "Dec 20, 2024"
  },
  {
    name: "Mobile App Development", 
    progress: 45,
    status: "At Risk",
    dueDate: "Jan 15, 2025"
  },
  {
    name: "API Integration",
    progress: 90,
    status: "Ahead",
    dueDate: "Dec 10, 2024"
  }
]

export function DashboardStats() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Progress */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Project Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {projectProgress.map((project, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-sm">{project.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "On Track" 
                      ? "bg-status-done/10 text-status-done"
                      : project.status === "At Risk"
                      ? "bg-destructive/10 text-destructive"
                      : "bg-status-progress/10 text-status-progress"
                  }`}>
                    {project.status === "At Risk" && <AlertTriangle className="h-3 w-3 inline mr-1" />}
                    {project.status}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  Due {project.dueDate}
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}