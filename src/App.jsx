import './App.css'
import MovieCard from './components/MovieCard';

function App() {
  const movieNumber=1
  return (
    <>
      <MovieCard movie={{title:"Don",release_date:"2014"}}/>
    </>
  );
}



export default App
