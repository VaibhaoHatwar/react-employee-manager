const TaskList = () => {
  return (
    <div
      id="task-list"
      className="h-[55%] overflow-x-auto flex items-center py-5 justify-start gap-5 flex-nowrap mt-10 w-full"
    >
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          enim mollitia rem voluptate vitae voluptates?
        </p>
      </div>
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          enim mollitia rem voluptate vitae voluptates?
        </p>
      </div>
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          enim mollitia rem voluptate vitae voluptates?
        </p>
      </div>
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          enim mollitia rem voluptate vitae voluptates?
        </p>
      </div>
    </div>
  );
};

export default TaskList;
