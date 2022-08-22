import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';
import { useSetRecoilState } from 'recoil';
import { eventTemplateState } from "../states/atoms/eventTemplateAtom";

const TemplateSelectBox = (props) => {

  const [templates, setTemplates] = useState([]);
  const axios = useAxios();
  
  const setTemplate =  useSetRecoilState(eventTemplateState);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/getTemplateList');
      setTemplates(result.data);
    };
    fetchData();
  }, []);

  const getTemplate = async (id) => {
    const result = await axios.get('/getTemplate/' + id);
    setTemplate(result.data);
  }

  return (
    <FormControl fullWidth>
      <InputLabel>テンプレート</InputLabel>
      <Select
        id="template-select"
        required
        name={props.name}
        label="テンプレート"
        onChange={(e) => getTemplate(e.target.value)}
      >
        {templates.map(e => {
          return (
            <MenuItem
              value={e.id}
              key={e.id}
            >
              {e.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  )

}

export default TemplateSelectBox;