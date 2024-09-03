import Footer from "../components/Footer";
import Header from "../components/Header";

const Report = () => {
  return (
    <>
      <Header />
      <main className="container my-4">
        <h1 className="fw-semibold">Health Report</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h3 className="fw-semibold">Weight Loss Progress</h3>
            <p>Current Weight: 180 lbs</p>
            <p>Starting Weight: 200 lbs</p>
            <p>Weight Loss: 20 lbs</p>
          </div>
          <div className="col-md-4">
            <h3 className="fw-semibold">Exercise Goals</h3>
            <p>Weekly Exercise Hours Goal: 5 hours</p>
            <p>Exercise Hours This Week: 7 hours</p>
            <p>Remaining Hours to Goal: 0 hours</p>
          </div>
          <div className="col-md-4">
            <h3 className="fw-semibold">Healthy Eating Habits</h3>
            <p>Vegetables Consumed: 5 servings/day</p>
            <p>Fruits Consumed: 3 servings/day</p>
            <p>Water Intake: 8 glasses/day</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Report;