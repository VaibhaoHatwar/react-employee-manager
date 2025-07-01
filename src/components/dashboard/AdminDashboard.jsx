import AllTasks from "../common/AllTasks";
import AppHeader from "../common/AppHeader";
import CreateTask from "../common/CreateTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <AppHeader changeUser={props.changeUser} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
