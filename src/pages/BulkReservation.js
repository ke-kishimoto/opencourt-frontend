import Container from '@mui/material/Container';
import EventItem from '../components/EventItem';
import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import RegisterBtn from '../elements/RegistBtn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import { useAxios } from '../utils/axiosUtil';
import { useRecoilValue } from 'recoil';
import { getUser } from '../states/selectors/userSelector';
import { 
  COLOR_STATUS_PARTICIPATED, 
  COLOR_STATUS_PARTICIPATED_WAITING, 
  COLOR_STATUS_END} from '../utils/colorUtil';

const BulkReservation = () => {

  const axios = useAxios();
  const user = useRecoilValue(getUser);
  const [checkedEventIds, setCheckedEventIds] = useState([]);

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
    const fetchData = async () => {
      const result = await axios.get('/getEventByMonth/' + year + '/' + String((month + 1)).padStart(2, '0'));
      setEvents(result.data)
    }
    fetchData();
  }, [year, month])

  return (
    <Container
      sx={{
        minHeight: 650,
      }}
    >
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
              value={e.id}
              onChange={(event) => {
                event.target.checked
                 ? setCheckedEventIds([...checkedEventIds, event.target.value])
                 : setCheckedEventIds(checkedEventIds.filter(id => id != event.target.value));
              }}
            />
          </Grid>
          <Grid item xs={11}>
            <EventItem
              event={e}
            />
          </Grid>
          </>
        )
      })}
      <Grid item xs={12}>
        <RegisterBtn 
          mode={'new'}
          endpoint={'/bulkResevation'}
          validation={() => true}
          data={{
            user_id: user.id,
            event_ids: checkedEventIds,
          }}
        />
      </Grid>
      </Grid>
    </Container>
  )

}

export default BulkReservation;