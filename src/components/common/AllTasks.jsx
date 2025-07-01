import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] rounded p-5 mt-5">
      <div className="bg-red-400 mb-2 flex justify-between rounded py-2 px-4">
        <h2 className="text-lg font-medium text-center w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium text-center w-1/5">New Task</h3>
        <h5 className="text-lg font-medium text-center w-1/5"> Active Task</h5>
        <h5 className="text-lg font-medium text-center w-1/5"> Completed</h5>
        <h5 className="text-lg font-medium text-center w-1/5"> Failed</h5>
      </div>
      <div className="overflow-auto">
        {authData.employees.map((employee) => {
        return (
          <div key={employee.id} className="border-2 border-emerald-500 mb-2 flex justify-between rounded py-2 px-4">
            <h2 className="text-lg font-medium text-center w-1/5">{employee.firstName} {employee.lastName}</h2>
            <h3 className="text-lg font-medium text-center w-1/5 text-blue-500">{employee.taskCount.newTask}</h3>
            <h5 className="text-lg font-medium text-center w-1/5 text-yellow-400"> {employee.taskCount.active}</h5>
            <h5 className="text-lg font-medium text-center w-1/5 text-green-400"> {employee.taskCount.completed}</h5>
            <h5 className="text-lg font-medium text-center w-1/5 text-red-400"> {employee.taskCount.failed}</h5>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default AllTasks;
