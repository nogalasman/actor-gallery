import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Link';
import MovieIcon from '@material-ui/icons/Movie';
import './Actor.css';
import { useState } from 'react';

import { Redirect } from 'react-router-dom';

function Actor(props) {

    const { actor } = props;
    const [redirectTo, setRedirectTo] = useState("");

    if (redirectTo) {
      return <Redirect to={redirectTo}/>
    } else {
      return (
          <div className="c-actor">
              <GridListTile cols={1}>
                  <img src={actor.img} alt={actor.fullName()} />
                  <GridListTileBar
                title={actor.fullName()}
                subtitle={<span>age: {actor.age()}</span>}
                actionIcon={
                  <div className="icon-container">
                  <IconButton onClick={() => window.open(actor.imdbLink)} aria-label={`info about ${actor.fullName()}`} className="icon">
                    <InfoIcon />
                  </IconButton>
                  <IconButton onClick={() => setRedirectTo("/actors/" + actor.id + "/movies")} aria-label={`info about ${actor.fullName()}`} className="icon">
                    <MovieIcon />
                  </IconButton>
                </div>
                }
              />
              </GridListTile>
          </div>
      );
  }
}

export default Actor;