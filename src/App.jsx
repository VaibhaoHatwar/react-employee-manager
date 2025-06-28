import { useState } from "react";
import Login from "./components/auth/Login"
import AdminDashboard from "./components/dashboard/AdminDashboard"
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard"

const App = () => {
  const [user, setUser] = useState(null);

  const loginHandler = (email, password) => {
    if(email === "admin@me.com" && password === "123") {
      setUser("admin");
    } else if(email === "user@me.com" && password === "123") {
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