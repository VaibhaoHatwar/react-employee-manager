const AppHeader = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser("");
  }

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">Username 👋</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-700 text-lg font-medium px-5 py-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default AppHeader;
