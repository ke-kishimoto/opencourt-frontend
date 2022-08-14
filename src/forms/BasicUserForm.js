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
          name={'name' + props.index}
          variant="outlined"
          value={props.user.name}
          disabled={props.disabled}
          onChange={props.handleChange}
        />
      </Grid>
      <Grid item xs={3}>
        <GenderSelectBox 
          disabled={props.disabled}
          value={props.user.gender}
          index={props.index}
          handleChange={props.handleChange}
        />
      </Grid>
      <Grid item xs={3}>
        <CategorySelectBox 
          disabled={props.disabled}
          value={props.user.user_category_id}
          index={props.index}
          handleChange={props.handleChange}
        />
      </Grid>
    </>
  )
}

export default BasicUserForm;