import Container from '@mui/material/Container';
import EventItem from '../components/EventItem';
import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import { 
  COLOR_STATUS_PARTICIPATED, 
  COLOR_STATUS_PARTICIPATED_WAITING, 
  COLOR_STATUS_END} from '../utils/colorUtil';

const BulkReservation = () => {

  const isDisabled = (status) => {
    if(status === COLOR_STATUS_PARTICIPATED || 
      status === COLOR_STATUS_PARTICIPATED_WAITING ||
      status === COLOR_STATUS_END) {
        return true;
      }
    return false;
  }

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const [events, setEvents] = useState([]);
  useEffect(() => {
    setEvents([
      { id: 1, day: 1, short_name: 'バスケ', event_name: 'バスケットボール', status: 9 },
      { id: 2, day: 1, short_name: 'バスケ', event_name: 'バスケットボール', status: 9 },
      { id: 3, day: 2, short_name: 'バスケ', event_name: 'バスケットボール', status: 1 },
      { id: 4, day: 3, short_name: 'サッカー', event_name: 'サッカー', status: 2 },
      { id: 5, day: 3, short_name: '野球', event_name: '野球', status: 3 },
      { id: 6, day: 4, short_name: '野球', event_name: '野球', status: 4 },
      { id: 7, day: 4, short_name: '野球', event_name: '野球', status: 5 },
    ])
  }, [year, month])

  return (
    <Container>
      <Grid container spacing={5} marginTop={5}>
      <Grid item xs={1}>
        <ArrowBackIosIcon
          cursor={'pointer'}
          onClick={() => {
            setYear(month === 0 ? year - 1 : year);
            setMonth(month === 0 ? 11 : month - 1);
          }}
        />
      </Grid>
      <Grid item xs={1}>
        <ArrowForwardIosIcon
          cursor={'pointer'}
          onClick={() => {
            setYear(month === 11 ? year + 1 : year);
            setMonth(month === 11 ? 0 : month + 1);
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" textAlign={'right'}>{year}年</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" textAlign={'left'}>{month + 1}月</Typography>
      </Grid>
      <Grid item xs={2}/>
      <Grid item xs={12}>
        <Typography textAlign={'left'}>
          ※過去のイベント、申し込み済みのイベントは選択できません。
        </Typography>
      </Grid>
      {events.map(e => {
        return (
          <>
          <Grid item xs={1}>
            <Checkbox 
              disabled={isDisabled(e.status)}
              sx={{m:5}}
            />
          </Grid>
          <Grid item xs={11}>
            <EventItem
              eventInfo={e}
            />
          </Grid>
          </>
        )
      })}
      <Grid item xs={12}>
        <Button
          variant="contained"
          sx={{marginLeft:20,
            marginBottom:10,
          }}
        >
          登録
        </Button>
      </Grid>
      </Grid>
    </Container>
  )

}

export default BulkReservation;