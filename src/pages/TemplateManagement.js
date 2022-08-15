import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import RegisterBtn from '../elements/RegistBtn';
import DeleteBtn from '../elements/DeleteBtn';
import Container from '@mui/material/Container';
import TemplateSelectBox from '../elements/TemplateSelectBox';
import BasicEventForm from '../forms/BasicEventForm';
import { useRecoilValue } from 'recoil';
import { getEventTemplate } from '../states/selectors/eventTemplateSelector';
import { getEventBase } from '../states/selectors/eventSelector';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const TemplateManagement = () => {

  const template = useRecoilValue(getEventTemplate);
  const eventBase = useRecoilValue(getEventBase);
  const [templateName, setTemplateName] = useState('');
  const [isNew, setIsNew] = useState(false);

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
					<Typography>テンプレート管理</Typography>
				</Grid>
				<Grid item xs={6}>
          <TemplateSelectBox />
				</Grid>
				<Grid item xs={6}>
         <FormControlLabel control={<Checkbox />} label="新規作成" 
          name="isNew"
          onChange={() => setIsNew(!isNew)}
         />
        </Grid>
				<Grid item xs={12}>
					<TextField
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
            mode={isNew ? 'new' : 'update'}
            validation={validation}
            endpoint={'/eventTemplate'}
            data={{...eventBase, template_name: templateName, isNew, isNew}}
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

export default TemplateManagement;