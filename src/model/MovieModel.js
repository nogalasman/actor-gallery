class MovieModel {
    constructor(id, movieName,
        lengthInMinutes,
        poster,
        director,
        mainStars) {
            this.id = id;
            this.movieName = movieName;
            this.lengthInMinutes = lengthInMinutes;
            this.poster = 'https://image.tmdb.org/t/p/w500' + poster;
            this.director = director;
            this.mainStars = mainStars;
    }
}

export default MovieModel;