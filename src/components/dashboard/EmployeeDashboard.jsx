import AppHeader from "../common/AppHeader";
import TaskStats from "../common/TaskStats";
import TaskList from "../taskList/TaskList";

const EmployeeDashboard = ({data}) => {
  console.log(data);

  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <AppHeader data={data} />
      <TaskStats data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
