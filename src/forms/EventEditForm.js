import Grid from '@mui/material/Grid';
import BasicEventForm from './BasicEventForm';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';
import { useSetRecoilState } from 'recoil';
import { eventBaseState } from "../states/atoms/eventAtom";
import RegisterBtn from '../elements/RegistBtn';
import { useRecoilValue } from 'recoil';
import { getEventBase } from '../states/selectors/eventSelector';

const EventEditForm = () => {

  const axios = useAxios();
  const { id } = useParams();
  const setEventBase =  useSetRecoilState(eventBaseState);
  const eventBase = useRecoilValue(getEventBase);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/event/' + id);
      setEventBase(result.data);
    }
    fetchData();
  }, [])

  const validation = () => {
    return true;
  }

  return (
    <Grid container spacing={3} margin={5} >
      <BasicEventForm />
      <Grid item xs={6}>
        <RegisterBtn 
          mode={'update'}
          validation={validation}
          endpoint={'/event'}
          data={{...eventBase, 
            id: id,
          }}
        />  
				</Grid>
    </Grid>
  )

}

export default EventEditForm;