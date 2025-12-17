import MovieCard from "../components/MovieCard"
import { useState } from "react"
function Home(){
    const movies=[
        {id: 1,title:"Don 1",release_date:"2012"},
        {id: 2,title:"Don 2",release_date:"2012"},
        {id: 3,title:"Don 3",release_date:"2012"},
        {id: 4,title:"Don 4",release_date:"2012"}
    ]

    const handleSearch = ()=>{
        alert("searching....")
    }

    //using state :<

const [searchQuery,setSearchQuery]= useState("")


    return(
        <div className="home">
            <form className="search" onSubmit={handleSearch}>
                <input type="text" 
                placeholder="Search for movies.." className="search-input"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(movie=> <MovieCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    )
}
export default Home