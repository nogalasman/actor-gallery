import Actor from '../components/Actor';
import ActorModel from '../model/ActorModel';
import { useEffect, useState } from 'react';
import GridList from '@material-ui/core/GridList';
import Container from '@material-ui/core/Container';
import axios from 'axios';


import './ActorsPage.css';
import ActorForm from '../components/ActorForm';
import Movie from '../components/Movie';

function ActorsPage() {

    const [actorsData, setActorsData] = useState([]);
    const [moviesData, setMoviesData] = useState([]);
    const [filter, setFilter] = useState("");
    const [sortCriteria, setSortCriteria] = useState("firstName");

    useEffect(() => {
        axios.get("actors.json").then(res => {
            setActorsData(res.data.map(plainActor => new ActorModel(plainActor)));
        });
    },[]);
    
    function sortActorsByAge(a, b) {
        return a.age() - b.age();
    }

    function sortActorsByFirstName(a, b) {
        return a.firstName.localeCompare(b.firstName);
    }

    function sortActorsByLastName(a, b) {
        return a.lastName.localeCompare(b.lastName);
    }

    function filterBy(name){
        setFilter(name);
        setMoviesData([]);
    }

    function sortBy(criteria){
        setSortCriteria(criteria);
        setMoviesData([]);
    }

    const buildActors = () => {
        let data = actorsData.filter(function (actor) {
            const full = (actor.fullName() + " " + actor.firstName).toLowerCase();
            return full.includes(filter.toLowerCase());
          });
    
        if (sortCriteria === "age") {
            data.sort(sortActorsByAge);
        } else if (sortCriteria === "lastName") {
            data.sort(sortActorsByLastName);
        } else if (sortCriteria === "firstName") {
            data.sort(sortActorsByFirstName);
        }
    
        const actorsCont = data.map( actor => <Actor actor={actor} key={actor.id} updateMovies={name => updateMovies(name)}> </Actor>);
        return actorsCont;
    }

    function updateMovies(name){
        axios.get("https://api.themoviedb.org/3/search/person?api_key=7c32e96d2b6cf3b9af35ea5273762c93&language=en-US&query="+name.replace(" ","%20")).then(res => {
            setMoviesData(res.data.results[0].known_for.map(result => result.id));
        });
    }

    const buildMovies = () => {
    
        const moviesCont = moviesData.map( movieId => <Movie movieId={movieId} key={movieId}> </Movie>);
        return moviesCont;
    }

    return (
        <div className="p-actors">
            <Container>
                <h1>My Favourite Actors !!</h1>
                <ActorForm sortCriteria={sortCriteria} filterBy={ name => filterBy(name) } sortBy={ criteria => sortBy(criteria) }></ActorForm>
                <GridList className="grid-list" cellHeight={160} cols={3}>
                { buildActors() }
                </GridList>
                <GridList className="grid-list-h" cellHeight={160} cols={1}>
                { buildMovies() }
                </GridList>
            </Container>
        </div>
    )
}

export default ActorsPage;