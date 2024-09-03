import Footer from "../components/Footer";
import Header from "../components/Header";

const Report = () => {
  return (
    <div>
      <Header />
      <div className="container my-3">
        <h1 className="fw-semibold">Team Performance Report</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h4 className="fw-semibold">Top Scorer</h4>
            <p>Name: Lionel Messi</p>
            <p>Goals Scored: 25</p>
          </div>
          <div className="col-md-4">
            <h4 className="fw-semibold">Best Assister</h4>
            <p>Name: Neymar Jr</p>
            <p>Assists: 15</p>
          </div>
          <div className="col-md-4">
            <h4 className="fw-semibold">Most Valuable Player (MVP)</h4>
            <p>Name: Cristiano Ronaldo</p>
            <p>Overall Rating: 9.5</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Report;
