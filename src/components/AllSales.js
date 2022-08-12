import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AllSales = () => {

  const [yearSales, setYearSales] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setYearSales([
      { year: 2020, participants_num: 10, sales: 10000, profit: 5000 },
      { year: 2021, participants_num: 10, sales: 10000, profit: 5000 },
      { year: 2022, participants_num: 10, sales: 10000, profit: 5000 },
    ])
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
                <Typography>{e.participants_num}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography>{e.sales}</Typography>
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
          <Typography>0</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>0</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>0</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default AllSales;