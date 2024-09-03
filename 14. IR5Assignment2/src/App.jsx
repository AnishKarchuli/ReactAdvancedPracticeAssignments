import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./useFetch";
import { useState } from "react";

const App = () => {
  const { data, loading, error, fetchData } = useFetch(
    "https://randomuser.me/api/?results=3",
  );
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  console.log(data);

  return (
    <div className="container mt-4">
      <h2 className="fw-semibold">People Directory</h2>
      <button className="btn btn-primary my-3" onClick={fetchData}>
        Get People
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>An error occured while fetching people.</p>}
      {data && (
        <>
          <div className="row">
            {data.results.map((person) => (
              <div key={person.login.uuid} className="col-md-4">
                <div className="card mb-2">
                  <img
                    src={person.picture.large}
                    alt="Person Image"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">
                      {person.name.first} {person.name.last}
                    </h5>
                    <p>Age: {person.dob.age}</p>
                    <p>Gender: {person.gender}</p>
                    <p>Username: {person.login.username}</p>
                    <p>Email: {person.email}</p>
                    {showMoreInfo && (
                      <>
                        <p>Phone Number: {person.cell}</p>
                        <p>
                          Full Address: {person.location.street.number},{" "}
                          {person.location.street.name}, {person.location.city},{" "}
                          {person.location.state}, {person.location.country},{" "}
                          {person.location.postcode}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button
              className="btn btn-primary px-5"
              onClick={() => setShowMoreInfo(!showMoreInfo)}
            >
              {showMoreInfo ? "Show Less Info" : "Show More Info"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
