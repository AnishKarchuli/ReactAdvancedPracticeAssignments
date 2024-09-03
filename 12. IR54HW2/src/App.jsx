import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./useFetch";

const App = () => {
  const { data, loading, error, fetchData } = useFetch(
    "https://api.adviceslip.com/advice",
  );
  console.log(data);
  return (
    <div className="text-center mt-3">
      <h1 className="fw-semibold">Advice Slip API</h1>
      <button className="btn btn-primary my-2" onClick={fetchData}>
        Get Advice
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>An error occured while fetchind the advice.</p>}
      {data && (
      <p className="mt-3"><strong>{data.slip.advice}</strong></p>
      )}
    </div>
  );
};

export default App;
