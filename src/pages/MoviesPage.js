
import Movie from '../components/Movie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GridList from '@material-ui/core/GridList';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';

function MoviesPage(props) {
    const {id} = useParams();
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/person/" + id + "/movie_credits?api_key=7c32e96d2b6cf3b9af35ea5273762c93&language=en-US").then(res => {
            setMoviesData(res.data.cast.map(result => result.id));
        });
    });

    const buildMovies = () => {
    
        const moviesCont = moviesData.map( movieId => <Movie movieId={movieId} key={movieId}> </Movie>);
        return moviesCont;
    }
    return(
        <div className="p-movies">
            <Container>
                <GridList className="grid-list-h" cellHeight={160} cols={1}>
                { buildMovies() }
                </GridList>
            </Container>
        </div>
    )
    
}

export default MoviesPage;