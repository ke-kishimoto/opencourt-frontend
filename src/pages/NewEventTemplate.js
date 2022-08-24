import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import RegisterBtn from '../elements/RegistBtn';
import Container from '@mui/material/Container';
import TemplateSelectBox from '../elements/TemplateSelectBox';
import BasicEventForm from '../forms/BasicEventForm';
import { useRecoilValue } from 'recoil';
import { getEventTemplate } from '../states/selectors/eventTemplateSelector';
import { getEventBase } from '../states/selectors/eventSelector';

const NewEventTemplate = () => {

  const template = useRecoilValue(getEventTemplate);
  const eventBase = useRecoilValue(getEventBase);
  const [templateName, setTemplateName] = useState('');

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
            name="template_id"
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
          />  
				</Grid>
   		</Grid>
		</Container>
	)
}

export default NewEventTemplate;