import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { playersData } from "./Players";

const PlayerDetails = () => {
  const { playerId } = useParams();

  const player = playersData.find((player) => player.id === parseInt(playerId));

  return (
    <>
      <Header />
      <main className="container my-3">
        {player && (
          <>
            <h2>{player.name}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Name: </strong>
                {player.name}
              </li>
              <li className="list-group-item">
                <strong>Position: </strong>
                {player.position}
              </li>
              <li className="list-group-item">
                <strong>Team: </strong>
                {player.team}
              </li>
            </ul>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default PlayerDetails;
