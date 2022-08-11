import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';

const TemplateSelectBox = () => {

  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    setTemplates([
      { id: 1, templateName: 'テンプレート名1' },
    ])
  }, [])

  return (
    <FormControl sx={{ width: '50%' }}>
      <InputLabel>テンプレート</InputLabel>
      <Select
        required
        name="template"
        label="テンプレート"
      >
        {templates.map(e => {
          return (
            <MenuItem
              value={e.id}
              key={e.id}
            >
              {e.templateName}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  )

}

export default TemplateSelectBox;