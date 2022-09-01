import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../utils/axiosUtil';

const YearSalesTotal = () => {

  const [year, setYear] = useState(new Date().getFullYear());
  const [monthlySales, setMontylySales] = useState([]);
  const axios = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios.get('/getMonthlySlaes/' + year);
      setMontylySales(result.data);
    }
    fetchDate();
  }, [year])

  return (
    <>
      <Grid container spacing={5} marginTop={5}>
        <Grid item xs={1}>
          <ArrowBackIosIcon
            cursor={'pointer'}
            onClick={() => {
              setYear(year - 1);
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <ArrowForwardIosIcon
            cursor={'pointer'}
            onClick={() => {
              setYear(year + 1);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" textAlign={'center'}>{year}年</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            onClick={() => navigate('/salesManagement/monthly')}
          >
            イベント合計
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
        <Grid item xs={3}>
          <Typography>月</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>参加人数</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>売上金額</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>粗利</Typography>
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        {monthlySales.map(e => {
          return (
            <>
              <Grid item xs={3}>
                <Typography>{e.month}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography>{e.number_of_user}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography>{e.amount}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography>{e.profit}</Typography>
              </Grid>
            </>
          )
        })}
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={3}>
          <Typography>合計</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>
            {monthlySales.map(e => Number(e.number_of_user)).reduce((p, c) => p + c, 0)}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>
            {monthlySales.map(e => Number(e.amount)).reduce((p, c) => p + c, 0)}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>
            {monthlySales.map(e => Number(e.profit)).reduce((p, c) => p + c, 0)}
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default YearSalesTotal;