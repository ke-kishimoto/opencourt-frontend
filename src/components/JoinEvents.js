import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { COLOR_STATUS_END } from '../utils/colorUtil';
import EventItem from './EventItem';

const JoinEvents = () => {

  const [tabValue, setTabValue] = useState('1');
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
            {events.filter(e => e.status === COLOR_STATUS_END).map(e => {
              return (
                <Grid item xs={12}>
                  <EventItem
                    eventInfo={e}
                  />
                </Grid>
              )
            })}
          </Grid>
        </TabPanel>
        <TabPanel value="2" index={1}>
          <Grid container spacing={5}>
            {events.filter(e => e.status !== COLOR_STATUS_END).map(e => {
              return (
                <Grid item xs={12}>
                  <EventItem
                    eventInfo={e}
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