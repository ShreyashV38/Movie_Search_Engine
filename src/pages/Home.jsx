import MovieCard from "../components/MovieCard"
import { useState ,useEffect} from "react"
import "../css/Home.css"
import { searchMovies,getPopularMovies } from "../services/api.js"
function Home(){
    //using state to store the movies fetched from the API
    const [searchQuery,setSearchQuery]= useState("")
    const [movies,setMovies]=useState([])
    const [error, setError] =  useState(null)
    const [loading,setLoading]= useState(true)

    useEffect(()=>{
        const loadPopularMovies= async ()=>{
            try {
                const popularMovies= await getPopularMovies();
                setMovies(popularMovies)
            }
            catch (err){
                console.log(err)
                setError("Failed to load movies......")
            }
            finally{
                setLoading(false)
            }
        }

        loadPopularMovies();
    },[])

    const handleSearch = (e)=>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }



    return(
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" 
                placeholder="Search for movies.." className="search-input"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}/>

                <button type="submit" className="search-button">Search</button>

            </form>

                {error && <div className="error-message"></div>}

            { loading ? (
                <div className="Loading">Loading....</div>
            ) : (
            <div className="movies-grid">

                {movies.map((movie) => 
                movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (<MovieCard movie={movie} key={movie.id}/>
                )
                )}

            </div>)
            }
            
        </div>
    )
}
export default Home