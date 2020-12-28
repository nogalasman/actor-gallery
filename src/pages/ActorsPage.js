import Actor from '../components/Actor';
import ActorModel from '../model/ActorModel';
import { useState } from 'react';
import GridList from '@material-ui/core/GridList';
import Container from '@material-ui/core/Container';


import './ActorsPage.css';
import ActorForm from '../components/ActorForm';

function ActorsPage() {

    const actors = [ 
        new ActorModel(0, "Denzel", "Washington", '1954-12-28', "https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_UY317_CR12,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000243/?ref_=tt_cl_t9"),
        new ActorModel(1, "Anthony", "Hopkins", '1937-12-31', "https://m.media-amazon.com/images/M/MV5BMTg5ODk1NTc5Ml5BMl5BanBnXkFtZTYwMjAwOTI4._V1_UY317_CR6,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000164/?ref_=nv_sr_srsg_3"),
        new ActorModel(2, "Alfred", "Hitchcock", '1899-08-13', "https://m.media-amazon.com/images/M/MV5BMTQxOTg3ODc2NV5BMl5BanBnXkFtZTYwNTg0NTU2._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000033/?ref_=tt_cl_t1"),
        new ActorModel(3, "Jodie", "Foster", '1962-11-19', "https://m.media-amazon.com/images/M/MV5BMTM3MjgyOTQwNF5BMl5BanBnXkFtZTcwMDczMzEwNA@@._V1_UY317_CR1,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000149/?ref_=nmls_hd"),
        new ActorModel(4, "John", "Travolta", '1962-11-19', "https://m.media-amazon.com/images/M/MV5BMTUwNjQ0ODkxN15BMl5BanBnXkFtZTcwMDc5NjQwNw@@._V1_UY317_CR11,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000237/?ref_=tt_cl_t4"),
        new ActorModel(5, "Samuel L.", "Jackson", '1948-12-21', "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000168/?ref_=tt_cl_t5"),
        new ActorModel(6, "Uma", "Thurman", '1970-04-29', "https://m.media-amazon.com/images/M/MV5BMjMxNzk1MTQyMl5BMl5BanBnXkFtZTgwMDIzMDEyMTE@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000235/?ref_=tt_cl_t15"),
        new ActorModel(7, "Rosanna", "Arquette", '1959-08-10', "https://m.media-amazon.com/images/M/MV5BNTI0MjYxMzQ0OF5BMl5BanBnXkFtZTcwMTk0OTE3NQ@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000275/?ref_=tt_cl_t13"),
    ];

    const [actorsData, setActorsData] = useState(actors);
    const [filter, setFilter] = useState("");
    const [sortCriteria, setSortCriteria] = useState("firstName");

    
    
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
    }

    function sortBy(criteria){
        setSortCriteria(criteria);
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
    
        const actorsCont = data.map( actor => <Actor actor={actor} key={actor.id}> </Actor>);
        return actorsCont;
    }
    return (
        <div className="p-actors">
            <Container>
                <h1>My Favourite Actors !!</h1>
                <ActorForm sortCriteria={sortCriteria} filterBy={ name => filterBy(name) } sortBy={ criteria => sortBy(criteria) }></ActorForm>
                <GridList className="grid-list" cellHeight={160} cols={3}>
                { buildActors() }
                </GridList>
            </Container>
        </div>
    )
}

export default ActorsPage;