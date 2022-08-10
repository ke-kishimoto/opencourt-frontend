import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import BasicUserForm from '../forms/BasicUserForm';

const JoinForm = () => {

  const [companions, setCompanions] = useState([]);
  const companion = {
    name: '', gender: '', category: '',
  };

  return (
    <Box>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography>参加フォーム</Typography>
        </Grid>
        <BasicUserForm />
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="メールアドレス"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="備考"
            variant="outlined"
          />
        </Grid>
        {companions.map(e => {
          return (
            <BasicUserForm />
          )
        })}
        <Grid item xs={12}>
          <Button
            variant="outlined"
            onClick={() => {setCompanions(companions.concat(companion))}}
          >
            同伴者追加
						</Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
          >
            登録
						</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default JoinForm;