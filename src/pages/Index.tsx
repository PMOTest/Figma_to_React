import { DashboardLayout } from "@/components/DashboardLayout"
import { DashboardStats } from "@/components/DashboardStats"
import { KanbanBoard } from "@/components/KanbanBoard"

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back!</h1>
          <p className="text-muted-foreground mt-1">
            Here's an overview of your projects and tasks.
          </p>
        </div>
        
        <DashboardStats />
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Task Board</h2>
          <KanbanBoard />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
