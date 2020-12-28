import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import './ActorForm.css';

function ActorForm(props) {

    const {sortCriteria, sortBy, filterBy} = props;

    const handleChange = (event) => {
        console.log(event.target.value);
      };

    return(
        <div className="c-actors-form">
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="filter by name" onChange={e => filterBy(e.target.value)} />
                <FormControl className="form-control">
                    <InputLabel id="demo-simple-select-label">SortBy</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select" value={sortCriteria}
                        onChange={e => sortBy(e.target.value) }
                        >
                        <MenuItem value="firstName">first name</MenuItem>
                        <MenuItem value="lastName">last name</MenuItem>
                        <MenuItem value="age">age</MenuItem>
                    </Select>
                </FormControl>
            </form>
        </div>
        
    )
}

export default ActorForm;