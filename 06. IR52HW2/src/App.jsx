import { useState } from "react"
import useFetch from "./useFetch"


export default function App() {
  const [showJoke, setShowJoke] = useState(false);

  const { data } = useFetch("https://v2.jokeapi.dev/joke/Programming?type=single")
  
  return (
    <main>
      <h1>Programming API</h1>
      <button onClick={() => setShowJoke(true)}>Get Programming Joke</button>
      {
        showJoke && (
          <div>
            {data ? <p>{JSON.stringify(data.joke)}</p> : <p>An error occured while fetching programming joke.</p>}
          </div>
        )
      }
    </main>
  )
}