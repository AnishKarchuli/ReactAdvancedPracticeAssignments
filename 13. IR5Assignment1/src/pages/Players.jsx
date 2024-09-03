import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export const playersData = [
  { id: 1, name: "Lionel Messi", position: "Forward", team: "Barcelona" },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    position: "Forward",
    team: "Manchester United",
  },
  {
    id: 3,
    name: "Neymar Jr",
    position: "Forward",
    team: "Paris Saint-Germain",
  },
  {
    id: 4,
    name: "Kylian Mbappé",
    position: "Forward",
    team: "Paris Saint-Germain",
  },
  {
    id: 5,
    name: "Robert Lewandowski",
    position: "Forward",
    team: "Bayern Munich",
  },
];

const Players = () => {
  const [playersFilter, setPlayersFilter] = useState("All");

  const filteredPlayers =
    playersFilter === "All"
      ? playersData
      : playersData.filter((player) => player.team === playersFilter);

  return (
    <>
      <Header />
      <main className="container my-3">
        <h1>List of Players</h1>
        <section>
          <label htmlFor="teamFilter" className="form-label">
            Filter by Team:
          </label>
          <select
            id="teamFilter"
            className="form-select"
            onChange={(event) => setPlayersFilter(event.target.value)}
          >
            <option value="All">All Teams</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Manchester United">Manchester United</option>
            <option value="Paris Saint-Germain">Paris Saint-Germain</option>
            <option value="Bayern Munich">Bayern Munich</option>
          </select>
        </section>
        <section className="my-3">
          <ul className="list-group">
            {filteredPlayers.map((player) => (
              <li key={player.id} className="list-group-item">
                <h5>{player.name}</h5>
                <p>Position: {player.position}</p>
                <p>Team: {player.team}</p>
                <Link to={`/players/${player.id}`} className="btn btn-primary">View Details</Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Players;
