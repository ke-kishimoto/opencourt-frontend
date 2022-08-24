import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import RegisterBtn from '../elements/RegistBtn';
import Container from '@mui/material/Container';
import TemplateSelectBox from '../elements/TemplateSelectBox';
import BasicEventForm from '../forms/BasicEventForm';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { eventTemplateState } from '../states/atoms/eventTemplateAtom';
import { eventBaseState } from '../states/atoms/eventAtom';

const NewEventTemplate = () => {

  const [template, setTemplate] = useRecoilState(eventTemplateState);
  const [eventBase, setEventBase] = useRecoilState(eventBaseState);
  const [templateName, setTemplateName] = useState('');

  const resetTemplate = useResetRecoilState(eventTemplateState);

  useEffect(() => {
    resetTemplate()
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
					<Typography>イベントテンプレート新規作成</Typography>
				</Grid>
				<Grid item xs={6}>
          <TemplateSelectBox 
          />
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
					<Button
						variant="outlined"
					>
						クリア
							</Button>
				</Grid>
				<Grid item xs={4}>
          <RegisterBtn 
            mode={'new'}
            validation={validation}
            endpoint={'/eventTemplate'}
            data={{...eventBase, 
              template_name: templateName, 
            }}
            forward={'/templateManagement'}
          />  
				</Grid>
   		</Grid>
		</Container>
	)
}

export default NewEventTemplate;