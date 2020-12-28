import TextField from '@material-ui/core/TextField';

function ActorForm() {
    return(
        <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="filter" />
        </form>
    )
}

export default ActorForm;