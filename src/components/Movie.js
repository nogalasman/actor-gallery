import { Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Typography } from '@material-ui/core';
import { useEffect,useState } from 'react';
import axios from 'axios';
import './Movie.css';
import MovieModel from '../model/MovieModel'

function Movie(props) {

    const { movieId } = props;
    const [movieData, setMovie] = useState(null);

    useEffect(() => {
        let didCancel = false;
        const promiseCredit = axios.get("https://api.themoviedb.org/3/movie/" + movieId + "/credits?api_key=7c32e96d2b6cf3b9af35ea5273762c93&language=en-US");
        const promiseDetails = axios.get("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=7c32e96d2b6cf3b9af35ea5273762c93&language=en-US");
        Promise.all([promiseCredit,promiseDetails]).then(responses => {
            const id = responses[0].data.id;
            const title = responses[1].data.title;
            const runtime = responses[1].data.runtime;
            const poster = responses[1].data.poster_path;
            let director = "";
            let stars = [];
            responses[0].data.cast.forEach(member => {
                if ((member.known_for_department === "Acting") && (stars.length <= 6)) {
                    stars.push(member.name);
                }
            });
       
            const directorMember = responses[0].data.crew.find(member => member.job === "Director");
            if (directorMember) {
                director = directorMember.name;
            }
            const newMovie = new MovieModel(id,title,runtime,poster,director,stars.join());
            if (!didCancel) {
                setMovie(newMovie);
            }
            
        });
        return () => {
            didCancel = true;
          };
    });


    return (
        movieData ? <div className="c-movie">
            <Box my={4}>
        <Card className="card">
          <CardActionArea className="area"> 
            <CardMedia
              className="media"
              image={movieData.poster}
              title="Contemplative Reptile"
            />
            <CardContent
              className="content">
              <Typography gutterBottom variant="h5" component="h2">
                <span className="special-font">{movieData.movieName}</span>
              </Typography>
              <Typography  gutterBottom>
                <span className="bold-font">Length in minutes:</span> {movieData.lengthInMinutes}
              </Typography>
              <Typography  gutterBottom>
              <span className="bold-font">Director:</span> {movieData.director}
                </Typography>
              <Typography  gutterBottom>
              <span className="bold-font"> Main stars:</span>
              </Typography>
              <Typography  gutterBottom>
                {movieData.mainStars}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
        </div> : <><CircularProgress /></>
    );
}

export default Movie;