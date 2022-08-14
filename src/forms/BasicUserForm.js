import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CategorySelectBox from '../elements/CategorySelectBox';
import GenderSelectBox from '../elements/GenderSelectBox';

const BasicUserForm = (props) => {
  return (
    <>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="名前"
          variant="outlined"
          value={props.user.name}
          disabled={props.disabled}
        />
      </Grid>
      <Grid item xs={3}>
        <GenderSelectBox 
          disabled={props.disabled}
          value={props.user.gender}
        />
      </Grid>
      <Grid item xs={3}>
        <CategorySelectBox 
          disabled={props.disabled}
          value={props.user.user_category_id}
        />
      </Grid>
    </>
  )
}

export default BasicUserForm;