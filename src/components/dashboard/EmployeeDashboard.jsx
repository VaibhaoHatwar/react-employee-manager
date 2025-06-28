import AppHeader from "../common/AppHeader";
import TaskStats from "../common/TaskStats";
import TaskList from "../taskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <AppHeader />
      <TaskStats />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
