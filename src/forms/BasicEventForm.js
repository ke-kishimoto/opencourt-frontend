import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { getEventTemplate } from '../states/selectors/eventTemplateSelector';
import { useAxios } from '../utils/axiosUtil';
import { useSetRecoilState } from 'recoil';
import { eventBaseState } from "../states/atoms/eventAtom";
import { getEventBase } from '../states/selectors/eventSelector';

const BasicEventForm = () => {

  const axios = useAxios();
  const [categories, setCategories] = useState([]);
  const template = useRecoilValue(getEventTemplate);
  const setEventBase =  useSetRecoilState(eventBaseState);
  const eventBase = useRecoilValue(getEventBase);

  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios.get('/userCategory');
      setCategories(result.data.filter(e => e.category_name !== ''));
    };
    fetchDate();
  }, []);

  useEffect(() => {
    setEventBase(template)
  }, [template])

  const handleChange = (event) => {
    const { name, value } = event.target
    setEventBase(
      { ...eventBase, [name]: value }
    )
  }

  return (
    <>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="イベント名"
          name="title"
          variant="outlined"
          value={eventBase.title}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="イベント名略称"
          name="short_title"
          variant="outlined"
          value={eventBase.short_title}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="開催場所"
          name="place"
          variant="outlined"
          value={eventBase.place}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="number"
          label="人数"
          name="limit_number"
          variant="outlined"
          value={eventBase.limit_number}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="詳細"
          name="description"
          variant="outlined"
          value={eventBase.description}
          onChange={handleChange}
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
              label={e.category_name}
              name={'price' + (index + 1)}
              variant="outlined"
              value={eventBase['price' + (index + 1)]}
              onChange={handleChange}
            />
          </Grid>
        )
      })}
      </>
  )
}

export default BasicEventForm;