import { useEffect } from "react"
import Login from "./components/auth/Login"
import AdminDashboard from "./components/dashboard/AdminDashboard"
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"

const App = () => {
    useEffect(() => {
    // setLocalStorage();
    getLocalStorage();
  })
  return (
    <>
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      <AdminDashboard />
    </>
  )
}

export default App