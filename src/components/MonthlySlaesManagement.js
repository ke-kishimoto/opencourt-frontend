import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../utils/axiosUtil';
import RegisterBtn from '../elements/RegistBtn';
import { Link } from "react-router-dom";

const MonthlySalesManagement = () => {

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [events, setEvents] = useState([]);
  const axios = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/getEventByMonth/' + year + '/' + String((month + 1)).padStart(2, '0'));
      setEvents(result.data)
    }
    fetchData();
  }, [year, month]);

  const reflectAmount = async (event) => {
    const result = await axios.put('/reflectEventDetail/' + event.target.value)
    setEvents(events.map(e => {
      if(e.id != event.target.value) return e;
      e['number_of_user'] = result.data.number_of_user;
      e['amount'] = result.data.amount;
      return e;
    })) 
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    const index = Number(name.substr(-1));
    const newName = name.substring(0, name.length - 1)
    setEvents(
      events.map((e, i) => {
        if(index !== i) {
          return e;
        } else {
          e[newName] = value;
          return e;
        } 
      })
    )
  }

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
          <Typography variant="h5" textAlign={'right'}>{year}???</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5" textAlign={'left'}>{month + 1}???</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            onClick={() => navigate('/salesManagement/yearSalesTotal')}
          >
            ?????????
        </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            onClick={() => navigate('/salesManagement/all')}
          >
            ?????????
        </Button>
        </Grid>
        <Grid item xs={1}>
          <Typography>??????</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            ???????????????
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>????????????</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>????????????</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>??????</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>??????</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>??????</Typography>
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        {events.map((e, index) => {
          return (
            <>
              <Grid item xs={1}>
                <Typography>{e.day}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>
                <Link to={'/eventDetail/' + e.id}>{e.short_title}</Link>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  type="number"
                  name={'number_of_user' + index}
                  label="????????????"
                  variant="outlined"
                  value={e.number_of_user}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  type="number"
                  name={'amount' + index}
                  label="????????????"
                  variant="outlined"
                  value={e.amount}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  type="number"
                  name={'expenses' + index}
                  label="??????"
                  variant="outlined"
                  value={e.expenses}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}>
                <Typography>{e.amount - e.expenses}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Button
                  variant="outlined"
                  value={e.id}
                  onClick={reflectAmount}
                >
                  {'??????'}
                </Button>
              </Grid>
            </>
          )
        })}
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={4}>
          <Typography>??????</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            {events.map(e => Number(e.number_of_user)).reduce((p, c) => p + c, 0)}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            {events.map(e => Number(e.amount)).reduce((p, c) => p + c, 0)}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            {events.map(e => Number(e.expenses)).reduce((p, c) => p + c, 0)}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>
          {events.map(e => Number(e.amount) - Number(e.expenses)).reduce((p, c) => p + c, 0)}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <RegisterBtn 
            endpoint={'/monthlySales'}
            mode={'update'}
            validation={() => true}
            data={{events: events}}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default MonthlySalesManagement;