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

    const actorsCont = actorsData.map( actor => <Actor actor={actor} key={actor.id}> </Actor>);
    
    return (
        <div className="p-actors">
            <Container minWidth="sm">
                <ActorForm></ActorForm>
                <GridList className="grid-list" cellHeight={160} cols={3}>
                { actorsCont }
                </GridList>
            </Container>
        </div>
    )
}

export default ActorsPage;