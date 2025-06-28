import AllTasks from "../common/AllTasks";
import AppHeader from "../common/AppHeader";
import CreateTask from "../common/CreateTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <AppHeader />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
