import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const MonthlySalesManagement = () => {

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

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
  }, [year, month]);

  return (
    <>
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
        <Grid item xs={3}>
          <Typography variant="h5" textAlign={'right'}>{year}年</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5" textAlign={'left'}>{month + 1}月</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            onClick={() => navigate('/salesManagement/yearSalesTotal')}
          >
            月合計
        </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            onClick={() => navigate('/salesManagement/all')}
          >
            年合計
        </Button>
        </Grid>
        <Grid item xs={2}>
          <Typography>日付</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>イベント名</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>参加人数</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>売上金額</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>経費</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>粗利</Typography>
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        {events.map(e => {
          return (
            <>
              <Grid item xs={2}>
                <Typography>{e.day}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>{e.short_name}</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  type="number"
                  label="参加人数"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  type="number"
                  label="売上金額"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  type="number"
                  label="経費"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={2}>
                <Typography>{0}</Typography>
              </Grid>
            </>
          )
        })}
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={4}>
          <Typography>合計</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>{0}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>{0}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>{0}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>{0}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
          >
            更新
        </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default MonthlySalesManagement;