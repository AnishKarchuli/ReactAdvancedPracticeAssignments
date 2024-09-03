import Footer from "../components/Footer";
import Header from "../components/Header";
import { employees } from "./Employees";

const Report = () => {
  const mostWorkedEmployee = employees.reduce((acc, curr) => acc.hoursWorked > curr.hoursWorked ? acc : curr)

  const highestRatedEmployee = employees.reduce((acc, curr) => acc.performanceRate > curr.performanceRate ? acc : curr)

  const totalOvertimeHours = employees.reduce((acc, curr) => acc + curr.overTimeHours , 0)
  
  return (
    <>
      <Header />
      <main className="container my-3">
        <h1 className="fw-semibold">HR Report</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h4 className="fw-semibold">Most Worked Employee</h4>
            <p>Name: {mostWorkedEmployee.name}</p>
            <p>Hours Worked: {mostWorkedEmployee.hoursWorked}</p>
          </div>
          <div className="col-md-4">
            <h4 className="fw-semibold">Highest Rated Employee</h4>
            <p>Name: {highestRatedEmployee.name}</p>
            <p>Performance Rate: {highestRatedEmployee.performanceRate}</p>
          </div>
          <div className="col-md-4">
            <h4 className="fw-semibold">Total Overtime Hours</h4>
            <p>Total Overtime Hours: {totalOvertimeHours}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Report;