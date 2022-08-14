import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import TemplateSelectBox from '../elements/TemplateSelectBox';
import BasicEventForm from '../forms/BasicEventForm';
import Button from '@mui/material/Button';
import RegisterBtn from '../elements/RegistBtn';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getEventBase } from '../states/selectors/eventSelector';

const NewEvent = () => {

  const [eventDate, setEventDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const eventBase = useRecoilValue(getEventBase);

  const validation = () => {
    return true;
  }

  return (
    <Container maxWidth={'lg'}>
      <Grid container spacing={3} margin={5} >
        <Grid item xs={12}>
          <Typography>新規イベント</Typography>
        </Grid>
        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="開催日"
              name="event_date"
              value={eventDate}
              onChange={(value) => {
                setEventDate(value)
              }}
              renderInput={(params) => <TextField {...params} />}
              inputFormat={'yyyy/MM/dd'}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="開始時間"
              name="start_time"
              value={startTime}
              onChange={(value) => setStartTime(value)}
              renderInput={(params) => <TextField {...params} />}
              inputFormat={'HH:mm'}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="終了時間"
              name="end_time"
              value={endTime}
              onChange={(value) => setEndTime(value)}
              renderInput={(params) => <TextField {...params} />}
              inputFormat={'HH:mm'}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <TemplateSelectBox />
        </Grid>
        <BasicEventForm />
        <Grid item xs={6}>
					<Button
						variant="outlined"
					>
						クリア
							</Button>
				</Grid>
				<Grid item xs={6}>
          <RegisterBtn 
            mode={'new'}
            validation={validation}
            endpoint={'/event'}
            data={{...eventBase, 
              event_date: eventDate, 
              start_time: startTime, 
              end_time: endTime
            }}
          />  
				</Grid>
      </Grid>
    </Container>
  )
}

export default NewEvent;