function MovieCard({movie}){

    function onFavoriteClick(){
        alert("Clicked")
    }
    return(
        <div className="card">
            <div className="image">
                <img src="{movie.url}" alt="{movie.title}" />
                <div className="movie-overlay">
                    <button className="Favourite" onClick={onFavoriteClick}>
                        ♥︎
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard