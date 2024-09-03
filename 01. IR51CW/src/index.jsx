import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from './App';
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Report from "./pages/Report";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/movies",
		element: <Movies />,
	},
	{
		path: "/report",
		element: <Report />,
	},
	{
		path: "/movies/:movieId",
		element: <MovieDetails />
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)