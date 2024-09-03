import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { employees } from "./Employees";

const EmployeeDetails = () => {
  const { employeeId } = useParams();
  const employee = employees.find((employee) => employee.id === employeeId)
  return (
    <>
      <Header />
      <main className="container my-3">
        {employee ? (
      <>
        <h2>{employee.name}</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Name: </strong>{employee.name}
          </li>
          <li className="list-group-item">
            <strong>Designation: </strong>{employee.title}
          </li>
          <li className="list-group-item">
            <strong>Department: </strong>{employee.department}
          </li>
        </ul>
      </>
    ) : (
      <p className="alert alert-danger">Employee not found.</p>
    )}
      </main>
      <Footer />
    </>
  )
}

export default EmployeeDetails;