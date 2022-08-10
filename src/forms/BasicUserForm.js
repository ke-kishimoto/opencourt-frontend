import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CategorySelectBox from '../elements/CategorySelectBox';
import GenderSelectBox from '../elements/GenderSelectBox';

const BasicUserForm = () => {
  return (
    <>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="名前"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <GenderSelectBox />
      </Grid>
      <Grid item xs={3}>
        <CategorySelectBox />
      </Grid>
    </>
  )
}

export default BasicUserForm;