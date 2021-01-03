import Actor from '../components/Actor';
import ActorModel from '../model/ActorModel';
import { useEffect, useState } from 'react';
import GridList from '@material-ui/core/GridList';
import Container from '@material-ui/core/Container';
import axios from 'axios';

import './ActorsPage.css';
import ActorForm from '../components/ActorForm';

function ActorsPage(props) {

    const { actors } = props;
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
        console.log("actors recieved: "+JSON.stringify(actors));
        let data = actors.filter(function (actor) {
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
    
        const actorsCont = data.map( actor => <Actor actor={actor} key={actor.id} > </Actor>);
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