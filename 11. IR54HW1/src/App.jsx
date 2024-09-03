import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./useFetch";

const App = () => {
  const { data, loading, error, fetchData } = useFetch(
    "https://randomuser.me/api/",
  );
  console.log(data);
  return (
    <div className="container mt-3">
      {loading && <p>Loading...</p>}
      {error && <p>An error occured while fetching user detail.</p>}
      <h1 className="fw-semibold mb-3">Random User API</h1>
      <button onClick={fetchData} className="btn btn-info">
        Get Random User
      </button>
      {data && (
        <div className="mt-3">
          {/* Using IIFE */}
          {(() => {
            const { name, email, location } = data.results[0];
            return (
              <>
                <p>
                  <strong>Name: </strong>
                  {name.first} {name.last}
                </p>
                <p>
                  <strong>Email: </strong>
                  {email}
                </p>
                <p>
                  <strong>City: </strong>
                  {location.city}
                </p>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
};

export default App;
