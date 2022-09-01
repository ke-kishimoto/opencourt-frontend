import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../utils/axiosUtil';

const AllSales = () => {

  const [yearSales, setYearSales] = useState([]);
  const axios = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/getAllSales');
      setYearSales(result.data);
    }
    fetchData();
  }, [])

  return (
    <>
      <Grid container spacing={5} marginTop={5}>

        <Grid item xs={8}>
          <Typography variant="h5" textAlign={'center'}>売上集計</Typography>
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
            onClick={() => navigate('/salesManagement/yearSalesTotal')}
          >
            月合計
        </Button>
        </Grid>
        <Grid item xs={3}>
          <Typography>年</Typography>
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
        {yearSales.map(e => {
          return (
            <>
              <Grid item xs={3}>
                <Typography>{e.year}</Typography>
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
            {yearSales.map(e => Number(e.number_of_user)).reduce((p, c) => p + c, 0)}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>
            {yearSales.map(e => Number(e.amount)).reduce((p, c) => p + c, 0)}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>
            {yearSales.map(e => Number(e.profit)).reduce((p, c) => p + c, 0)}
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default AllSales;