import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { getStatusColorCode, } from '../utils/colorUtil';
import { useParams } from "react-router-dom";
import { useAxios } from '../utils/axiosUtil';

const EventDetailItem = () => {

  const axios = useAxios();
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios.get('/event/' + id);
      setEvent(result.data);
      const result2 = await axios.get('/userCategory');
      setCategories(result2.data.filter(e => e.category_name !== ''));
    }
    fetchDate();
  }, []);

  return (
    <Box
      sx={{
        p: 2,
        marginTop: 2,
        border: `solid 1px ${getStatusColorCode(event.status)}`,
        borderRadius: 3,

      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography>イベント名：{event.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>開催日時：{event.event_date}  {event.start_time}〜{event.end_time}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>場所：{event.place}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>詳細：{event.description}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>参加人数： {event.user_count} / {event.limit_number}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>参加費</Typography>
        </Grid>
        {categories.map((e, index) => {
          return (
            <Grid item xs={12}
              key={index}
            >
              <Typography>{e.category_name}：{event['price' + index]}</Typography>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default EventDetailItem;