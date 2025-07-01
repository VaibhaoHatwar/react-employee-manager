import AppHeader from "../common/AppHeader";
import TaskStats from "../common/TaskStats";
import TaskList from "../taskList/TaskList";

const EmployeeDashboard = (props) => {

  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <AppHeader changeUser={props.changeUser} data={props.data} />
      <TaskStats data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
