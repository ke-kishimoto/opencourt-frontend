import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import EventItem from '../components/EventItem';
import { useNavigate } from 'react-router-dom';
import { getStatusColorCode, } from '../utils/colorUtil';
import StatusColorGuide from '../components/StatusColorGuide';
import { useAxios } from '../utils/axiosUtil';

// カレンダーの2次元配列を作成
const createCalendar = (year, month) => {
  const start = new Date(year, month, 1);     // 月初
  const last = new Date(year, month + 1, 0);  // 月末
  const startDate = start.getDate();          // 月初
  const lastDate = last.getDate();            // 月末
  const startDay = start.getDay();            // 月初の曜日
  const lastDay = last.getDay();

  const days = [];
  let weekDay = [];
  let dayCount = 0; // 曜日カウント用

  for (let i = startDate; i <= lastDate; i++) {
    if (i === startDate) {
      for (let j = 0; j < startDay; j++) {
        weekDay.push('');
        dayCount++;
      }
    }
    weekDay.push(i);
    dayCount++;
    if (dayCount === 7) {
      days.push(weekDay);
      dayCount = 0;
      weekDay = [];
    }
  }
  for (let i = lastDay; i < 6; i++) {
    weekDay.push('');
  }
  days.push(weekDay);

  return days;

}

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`

const Th = styled.th`
	height: 36px;
	border: 1px solid #CCC;
`

const Td = styled.td`
	height: 80px;
	border: 1px solid #CCC;
	padding: 5px;
	vertical-align: initial;
	width: 100px
`

const Calendar = () => {

  const axios = useAxios();
  const navigate = useNavigate();
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [days, setDays] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setDays(createCalendar(year, month));

    const fetchData = async () => {
      const result = await axios.get('/getEventByMonth/' + year + '/' + String((month + 1)).padStart(2, '0'));
      setEvents(result.data)
    }
    fetchData();

  }, [year, month])

  return (
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
      <Grid item xs={1}>
        <Button
        variant="outlined"
        >
          月
        </Button>
		  </Grid>
      <Grid item xs={1}>
      <Button
        variant="outlined"
        >
          週
        </Button>
				</Grid>
      <Grid item xs={12}>
        <Table>
          <thead>
            <tr>
              <Th>日</Th>
              <Th>月</Th>
              <Th>火</Th>
              <Th>水</Th>
              <Th>木</Th>
              <Th>金</Th>
              <Th>土</Th>
            </tr>
          </thead>

          <tbody>
            {days.map((week, index) => {
              return (
                <tr
                  key={index}
                >
                  {week.map((day, index) => {
                    return (
                      <Td
                        key={index}
                        onClick={() => {
                          if(day === '') return;
                          navigate('/newEvent');
                      }}
                        style={{backgroundColor: day !== '' ? '#FFF' : '#EEE'}}
                      >
                        {day}
                        {events.filter(e => Number(e.day) == day).map(ev => {
                          return (
                            <Box
                              key={ev.id}
                              bgcolor={getStatusColorCode(ev.status)}
                              sx={{
                                margin: 1,
                                paddingLeft: 1,
                                color: day !== '' ? '#FFF' : '#DDD',
                                fontWeight: 700,
                                borderRadius: 1,
                                cursor: 'pointer',
                                '&:hover': {
                                  opacity: '0.5',
                                }
                              }}
                              onClick={(event) => { 
                                event.stopPropagation()
                                navigate(`/eventDetail/${ev.id}/userList`) 
                              }}
                            >
                              {ev.short_title}
                            </Box>
                          )
                        })}
                      </Td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </Table >
      </Grid >
      <StatusColorGuide />
      {events.map(e => {
        return (
          <Grid item xs={12}
          key={e.id}
          >
            <EventItem
              event={e}
            />
          </Grid>
        )
      })}
    </Grid>
  )

}

export default Calendar;