import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

const BasicEventForm = () => {

  const [categories, setCategories] = useState([]);

  useState(() => {
    setCategories([
      {id: 1, name: '社会人'},
      {id: 2, name: '大学生'},
      {id: 3, name: '高校生'},
      {id: 4, name: 'カテゴリ4'},
      {id: 5, name: 'カテゴリ5'},
    ])
  }, [])

  return (
    <>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="イベント名"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="イベント名略称"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="開催場所"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="number"
          label="人数"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="詳細"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>参加費</Typography>
      </Grid>
      {categories.map(e => {
        return (
          <Grid item xs={4}>
            <TextField
              fullWidth
              type="number"
              label={e.name}
              variant="outlined"
            />
          </Grid>
        )
      })}
      </>
  )
}

export default BasicEventForm;