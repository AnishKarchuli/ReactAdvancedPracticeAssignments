import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FoodItems from './pages/FoodItems';
import Report from './pages/Report';
import FoodItemDetails from './pages/FoodItemDetails';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/foodItems",
		element: <FoodItems />
	},
	{
		path: "/report",
		element: <Report />
	},
	{
		path: "/foodItems/:itemId",
		element: <FoodItemDetails />
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)