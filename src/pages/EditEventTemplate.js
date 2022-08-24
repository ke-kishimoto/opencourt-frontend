import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import RegisterBtn from '../elements/RegistBtn';
import DeleteBtn from '../elements/DeleteBtn';
import Container from '@mui/material/Container';
import BasicEventForm from '../forms/BasicEventForm';
import { useRecoilState } from 'recoil';
import { getEventTemplate } from '../states/selectors/eventTemplateSelector';
import { getEventBase } from '../states/selectors/eventSelector';
import { useAxios } from "../utils/axiosUtil";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { eventTemplateState } from "../states/atoms/eventTemplateAtom";
import { eventBaseState } from "../states/atoms/eventAtom";

const EditEventTemplate = () => {

  const axios = useAxios();
  const [template, setTemplate] =  useRecoilState(eventTemplateState);
  const [eventBase, setEventBase] = useRecoilState(eventBaseState);
  const [templateName, setTemplateName] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/getTemplate/' + id);
      setTemplate(result.data);
    }
    fetchData();
  }, [])

  useEffect(() => {
    setTemplateName(template.template_name)
  }, [template.template_name])

  const validation = () => {
    return true;
  }

	return (
		<Container maxWidth={'lg'}>
			<Grid container spacing={3} margin={5} >
				<Grid item xs={12}>
					<Typography>イベントテンプレート編集</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField
            id="template-name"
						fullWidth
            label="テンプレート名"
            name="template_name"
            variant="outlined"
            value={templateName}
            onChange={(e) => {setTemplateName(e.target.value)}}
					/>
				</Grid>
        <BasicEventForm />
				<Grid item xs={4}>
          <RegisterBtn 
            mode={'update'}
            validation={validation}
            endpoint={'/eventTemplate'}
            data={{...eventBase, 
              template_name: templateName, 
              id: template.id,
            }}
          />  
				</Grid>
        <Grid item xs={4}>
          <DeleteBtn 
            endpoint={'/eventTemplate'}
            id={template.id}
          />  
				</Grid>
			</Grid>
		</Container>
	)
}

export default EditEventTemplate;