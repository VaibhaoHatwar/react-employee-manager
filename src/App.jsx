import { useContext, useState } from "react";
import Login from "./components/auth/Login"
import AdminDashboard from "./components/dashboard/AdminDashboard"
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard"
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  const loginHandler = (email, password) => {
    if(authData && authData.admin.find((e)=> email === e.email && password === e.password)) {
      setUser("admin");
    } else if(authData && authData.employees.find((e)=> email === e.email && password === e.password)) {
      setUser("employee");
    } else {
      alert("Invalid Credentials!");
    } 
  }

  return (
    <>
      {!user ? <Login loginHandler={loginHandler} /> : ""}
      {user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App