import useFetch from './useFetch'

const App = () => {
  const { data, loading, error, fetchData } = useFetch('https://jsonplaceholder.typicode.com/posts');
  console.log(data)
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>An error occured while fetching the posts.</p>}
      <h1>Fetch Data on Button Click</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <div>
        {
          data && data.length > 0 && (
            <ul>
              {
                data.map(post => (
                  <li key={post.id}>{post.title}</li>
                ))
              }
            </ul>
          )
          
        }
      </div>
    </div>
  )
}

export default App;