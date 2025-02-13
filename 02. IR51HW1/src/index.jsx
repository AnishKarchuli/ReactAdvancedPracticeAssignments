import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Employees from './pages/Employees';
import EmployeeDetails from './pages/EmployeeDetails';
import Report from './pages/Report';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/employees",
		element: <Employees />,
	},
	{
		path: "/report",
		element: <Report />,
	},
	{
		path: "/employees/:employeeId",
		element: <EmployeeDetails />
	}
])


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)