import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="task-list"
      className="h-[55%] overflow-x-auto flex items-center py-5 justify-start gap-5 flex-nowrap mt-10 w-full"
    >
      {
        data.tasks.map((elem, idx)=>{
          if(elem.active) {
          return <AcceptTask key={idx} data={elem} />
          }
          if(elem.newTask) {
          return <NewTask key={idx} data={elem} />
          }
          if(elem.completed) {
          return <CompleteTask key={idx} data={elem} />
          }
          if(elem.failed) {
          return <FailedTask key={idx} data={elem} />
          }  
        })
      }
    </div>
  );
};

export default TaskList;
