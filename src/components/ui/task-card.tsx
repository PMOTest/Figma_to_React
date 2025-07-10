import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, MessageSquare, Paperclip } from "lucide-react"
import { cn } from "@/lib/utils"

interface TaskCardProps {
  title: string
  description?: string
  status: "todo" | "progress" | "review" | "done"
  priority: "low" | "medium" | "high"
  assignee?: {
    name: string
    initials: string
  }
  dueDate?: string
  comments?: number
  attachments?: number
  className?: string
}

const statusConfig = {
  todo: {
    label: "To Do",
    className: "bg-status-todo/10 text-status-todo border-status-todo/20"
  },
  progress: {
    label: "In Progress", 
    className: "bg-status-progress/10 text-status-progress border-status-progress/20"
  },
  review: {
    label: "In Review",
    className: "bg-status-review/10 text-status-review border-status-review/20"
  },
  done: {
    label: "Done",
    className: "bg-status-done/10 text-status-done border-status-done/20"
  }
}

const priorityConfig = {
  low: { label: "Low", className: "bg-muted text-muted-foreground" },
  medium: { label: "Medium", className: "bg-status-progress/10 text-status-progress" },
  high: { label: "High", className: "bg-destructive/10 text-destructive" }
}

export function TaskCard({ 
  title, 
  description, 
  status, 
  priority, 
  assignee, 
  dueDate, 
  comments = 0, 
  attachments = 0,
  className 
}: TaskCardProps) {
  return (
    <Card className={cn(
      "group cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
      "border-border/50 bg-gradient-card",
      className
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-sm leading-tight line-clamp-2">
            {title}
          </h3>
          <Badge 
            variant="secondary" 
            className={priorityConfig[priority].className}
          >
            {priorityConfig[priority].label}
          </Badge>
        </div>
        
        {description && (
          <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
            {description}
          </p>
        )}
      </CardHeader>
      
      <CardContent className="pt-0 space-y-3">
        <Badge 
          variant="outline" 
          className={statusConfig[status].className}
        >
          {statusConfig[status].label}
        </Badge>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {dueDate && (
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{dueDate}</span>
              </div>
            )}
            
            {comments > 0 && (
              <div className="flex items-center gap-1">
                <MessageSquare className="h-3 w-3" />
                <span>{comments}</span>
              </div>
            )}
            
            {attachments > 0 && (
              <div className="flex items-center gap-1">
                <Paperclip className="h-3 w-3" />
                <span>{attachments}</span>
              </div>
            )}
          </div>
          
          {assignee && (
            <Avatar className="h-6 w-6">
              <AvatarFallback className="text-xs font-medium bg-primary/10 text-primary">
                {assignee.initials}
              </AvatarFallback>
            </Avatar>
          )}
        </div>
      </CardContent>
    </Card>
  )
}