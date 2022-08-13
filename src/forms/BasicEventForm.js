import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { getEventTemplate } from '../states/selectors/eventTemplateSelector';

const BasicEventForm = () => {

  const [categories, setCategories] = useState([]);
  const template = useRecoilValue(getEventTemplate);

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
          value={template.title}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="イベント名略称"
          variant="outlined"
          value={template.short_title}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="開催場所"
          variant="outlined"
          value={template.place}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="number"
          label="人数"
          variant="outlined"
          value={template.limit_number}
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
      {categories.map((e, index) => {
        return (
          <Grid item xs={4}>
            <TextField
              fullWidth
              type="number"
              label={e.name}
              variant="outlined"
              value={template['price' + (index + 1)]}
            />
          </Grid>
        )
      })}
      </>
  )
}

export default BasicEventForm;