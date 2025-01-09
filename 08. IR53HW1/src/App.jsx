import useFetch from './useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=4');
  // console.log(data.length)
  
  return (
    <div className='container mt-4'>
      <h1 className='pb-2'>Todo Lists</h1>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>An error occured while fetching todos.</p>}
        {data && data.length > 0 ? (
          data.map((todo) => (
            <div className='row'>
              <div className='col-md-12'>
                <div className='card mb-2'>
                  <div className='card-body'>
                    <h3 className='card-title'>{todo.title}</h3>
                    <p>{todo.completed === true ? "Completed" : "Not Completed"}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
      <p></p>
        )}
      </div>
    </div>
  )
}

export default App;