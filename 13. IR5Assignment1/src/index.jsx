import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import Players from './pages/Players';
import Report from './pages/Report';
import PlayerDetails from './pages/PlayerDetails';


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/players",
		element: <Players />
	},
	{
		path: "/report",
		element: <Report />
	},
	{
		path: "/players/:playerId",
		element: <PlayerDetails />
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)