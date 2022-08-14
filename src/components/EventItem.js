import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { getStatusColorCode, } from '../utils/colorUtil';

const EventItem = (props) => {

  const navigate = useNavigate();

  const colorCode = getStatusColorCode(props.event.status);

  return (
    <Box
      sx={{
        p: 2,
        border: `solid 1px ${colorCode}`,
        borderRadius: 3,
        cursor: 'pointer',
        '&:hover': {
          bgcolor: `${colorCode}`,
          opacity: '0.7',
        }
      }}
      onClick={() => {
        navigate(`/eventDetail/${props.event.id}/userList`)
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography>イベント名：{props.event.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>開催日時：{props.event.event_date}  {props.event.start_time}〜{props.event.end_time}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>開催場所：{props.event.place}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>参加状況：xx / {props.event.limit_number}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default EventItem;