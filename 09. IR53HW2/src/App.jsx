import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./useFetch";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  console.log(data);

  return (
    <div className="container mt-4">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p>An error occured while fetching posts.</p>}
      <h1 className="mb-3 fw-semibold">Posts</h1>
      {data && data.length > 0 ? (
        data.map((post) => (
          <div>
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-3">
                  <div className="card-body">
                    <h4 className="card-title fw-semibold">{post.title}</h4>
                    <p className="card-text">{post.body}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default App;
