import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import RegistBtn from '../elements/RegistBtn'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';

const Inquiry = () => {

  const axios = useAxios();
  const [events, setEvents] = useState([]);
  const [data, setData] = useState({
    event_id: '',
    title: '',
    content: '',
  })

  useEffect(() => {
		const fetchData = async () => {
      const year = new Date().getFullYear();
      const month = new Date().getMonth();
      const result = await axios.get('/getEventByMonth/' + year + '/' + String((month + 1)).padStart(2, '0'));
      setEvents(result.data)
    }
    fetchData();
  }, [])

  const validation = () => {
    return true;
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setData(
      { ...data, [name]: value }
    )
  }

  return (
    <Container maxWidth={'lg'}
      sx={{
        minHeight: 650,
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <FormControl sx={{ width: '50%' }}>
            <InputLabel>対象イベント</InputLabel>
            <Select
              required
              name="event_id"
              label="対象イベント"
              onChange={handleChange}
              value={data.event_id}
            >
              {events.map(e => {
                return (
                  <MenuItem
                    value={e.id}
                    key={e.id}
                  >
                    {e.short_title + ' : ' + e.event_date}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="title"
            fullWidth
            label="タイトル"
            variant="outlined"
            onChange={handleChange}
            value={data.title}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="content"
            fullWidth
            multiline
            rows={5}
            label="内容"
            variant="outlined"
            onChange={handleChange}
            value={data.content}
          />
        </Grid>
        <Grid item sx={12}>
          <RegistBtn
            mode={'new'}
            label={'送信'}
            validation={validation}
            data={data}
            endpoint={'/inquiry'}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Inquiry;