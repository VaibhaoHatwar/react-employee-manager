import { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login"
import AdminDashboard from "./components/dashboard/AdminDashboard"
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard"
import { AuthContext } from "./context/AuthProvider";

const App = () => { 
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser);
  //     }
  //   }
  // }, [authData])

  const loginHandler = (email, password) => {
    if(authData && authData.admin.find((e)=> email === e.email && password === e.password)) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'admin'}));
    } else if(authData) {
      const employee = authData.employees.find((e)=> email === e.email && password === e.password);
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'employee'}));
      }
    } else {
      alert("Invalid Credentials!");
    } 
  }

  return (
    <>
      {!user ? <Login loginHandler={loginHandler} /> : ""}
      {user === "admin" ? <AdminDashboard /> : (user === 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}
    </>
  )
}

export default App