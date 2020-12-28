import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Link';
import './Actor.css';

function Actor(props) {

    const { actor } = props;

    return (
        <div className="c-actor">
            <GridListTile cols={1}>
                <img src={actor.img} alt={actor.fullName()} />
                <GridListTileBar
              title={actor.fullName()}
              subtitle={<span>age: {actor.age()}</span>}
              actionIcon={
                <IconButton onClick={() => window.open(actor.imdbLink)} aria-label={`info about ${actor.fullName()}`} className="icon">
                  <InfoIcon />
                </IconButton>
              }
            />
            </GridListTile>
        </div>
    );
}

export default Actor;