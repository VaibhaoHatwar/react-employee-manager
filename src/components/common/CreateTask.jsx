import { useState } from "react";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [task, setTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setTask({
      title,
      date,
      category,
      description,
      active: false,
      newTask: true,
      completed: false,
      failed: true,
    });
    console.log('createtask task',task);
    const data = JSON.parse(localStorage.getItem("employees"));

    data.forEach((employee) => {
      console.log(employee)
    })

    // setTitle("");
    // setDate("");
    // setAssignTo("");
    // setCategory("");
    // setDescription("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between  text-sm"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="py-1 px-2 w-4/5
                border-[1px] border-gray-400 mb-4 placeholder:gray-200 rounded outline-none"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-gray-300 mb-0.5">Date</h3>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="py-1 px-2 w-4/5
                border-[1px] border-gray-400 mb-4 placeholder:gray-200 rounded outline-none"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-gray-300 mb-0.5">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="py-1 px-2 w-4/5
                border-[1px] border-gray-400 mb-4 placeholder:gray-200 rounded outline-none"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="py-1 px-2 w-4/5
                border-[1px] border-gray-400 mb-4 placeholder:gray-200 rounded outline-none"
              type="text"
              placeholder="Design, dev, etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-gay-300 mb-0.5">Description</h3>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="w-full h-44 text-white py-2 px-4 rounded outline-none border-[1px] border-gray-400 placeholder:gray-200 rounded outline-none"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
