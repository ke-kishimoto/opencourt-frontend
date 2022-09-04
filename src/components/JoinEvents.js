import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { COLOR_STATUS_END } from '../utils/colorUtil';
import EventItem from './EventItem';
import { useAxios } from '../utils/axiosUtil';

const JoinEvents = (props) => {

  const axios = useAxios();
  const [tabValue, setTabValue] = useState('1');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/getEventListByUser/' + props.id);
      setEvents(result.data);
    }
    fetchData();

  }, [])

  return (
    <Box>
      <TabContext value={tabValue}>
        <TabList aria-label="イベントタブ" onChange={(e, newValue) => setTabValue(newValue)}>
          <Tab label="参加済イベント" value="1" />
          <Tab label="参加予定イベント" value="2" />
        </TabList>
        <TabPanel value="1" index={0}>
          <Grid container spacing={5}>
            {events.filter(e => e.status === COLOR_STATUS_END).map(eu => {
              return (
                <Grid item xs={12}
                  key={eu.id}
                >
                  <EventItem
                    event={eu.event}
                  />
                </Grid>
              )
            })}
          </Grid>
        </TabPanel>
        <TabPanel value="2" index={1}>
          <Grid container spacing={5}>
            {events.filter(e => e.status !== COLOR_STATUS_END).map(eu => {
              return (
                <Grid item xs={12}
                  key={eu.id}
                >
                  <EventItem
                    event={eu.event}
                  />
                </Grid>
              )
            })}
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default JoinEvents;