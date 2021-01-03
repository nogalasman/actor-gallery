import { Button, Container } from "@material-ui/core";
import './HomePage.css'


const HomePage = () => 

    <div className="p-homepage">
        <Container>
            <h1>Actors Movies App</h1>
            <p>My favourite actors movies app!! :)</p>
            <p>
            <Button variant="contained" color="primary" href="#/actors">Enter</Button>
                {/* <Link to="/cars">Enter</Link> */}
            </p>
        </Container>
    </div>

export default HomePage;