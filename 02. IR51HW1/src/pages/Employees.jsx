import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

export const employees = [
  {
    id: "1",
    name: "John Doe",
    title: "Software Developer",
    department: "IT",
    hoursWorked: 210,
    performanceRate: 0.79,
    overTimeHours: 60,
  },
  {
    id: "2",
    name: "Jane Smith",
    title: "Designer",
    department: "Design",
    hoursWorked: 195,
    performanceRate: 0.95,
    overTimeHours: 45,
  },
  {
    id: "3",
    name: "Bob Johnson",
    title: "Project Manager",
    department: "Management",
    hoursWorked: 170,
    performanceRate: 0.85,
    overTimeHours: 20,
  },
];

const Employees = () => {
  const [employeeFilter, setEmployeeFilter] = useState("All")

  const filteredEmployees = employeeFilter === "All" ? employees : employees.filter((employee) => employee.department === employeeFilter)
  
  return (
    <>
      <Header />
      <div className="container py-3">
        <h1 className="fw-semibold">List of Employees</h1>
        <div className="my-4">
          <label htmlFor="departmentFilter" className="form-group">Filter by Department:</label>
          <select id="departmentFilter" className="form-select" onChange={(event) => setEmployeeFilter(event.target.value)}>
            <option value="All">All Departments</option>
            <option value="IT">IT</option>
            <option value="Design">Design</option>
            <option value="Management">Management</option>
          </select>
        </div>
        <div className="mb-4">
          <ul className="list-group">
            {filteredEmployees.map((employee) => (
              <li key={employee.id} className="list-group-item">
                <h5>{employee.name}</h5>
                <p>{employee.title}</p>
                <Link to={`/employees/${employee.id}`} className="btn btn-primary">View Details</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Employees;