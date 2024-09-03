import { Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main className="container mt-3">
        <section>
          <img src="https://placehold.co/400x300/EFEFEFF/grey?text=Players+Smiling" alt="Players Smiling" className="img-fluid" />
        </section>
        <section className="my-4">
          <h3 className="fw-semibold">Our Players</h3>
          <p>Meet our talented team of players who work hard to achieve success on the field.</p>
          <Link to="/players" className="btn btn-primary">View Players</Link>
        </section>
        <section className="mb-3">
          <h3 className="fw-semibold">Team Performance</h3>
          <p>Explore our team's performance statistics to gain insights into our success on the field.</p>
          <Link to="/report" className="btn btn-primary">View Performance</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
