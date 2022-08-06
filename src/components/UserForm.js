import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const UserForm = () => {

	const gender = [
		{label: '男性', value: 'men'},
		{label: '女性', value: 'women'},
	]

	const categories = [
		{id: 1, label: '社会人'},
		{id: 2, label: '大学生'},
		{id: 3, label: '高校生以下'},
	]

	return (
		<Grid container spacing={5} margin={1}>
			<Grid item xs={3} />
			<Grid item xs={5}>
				<TextField
					fullWidth
					label="メールアドレス"
					variant="outlined"
				/>
			</Grid>
			<Grid item xs={3} />
			<Grid item xs={3} />
			<Grid item xs={5}>
				<TextField
					fullWidth
					label="名前"
					variant="outlined"
				/>
			</Grid>
			<Grid item xs={3} />
			<Grid item xs={3} />
			<Grid item xs={5}>
			<FormControl sx={{ width: '50%' }}>
          <InputLabel>性別</InputLabel>
          <Select
            required
            name="gender"
            label="性別"
          >
            {gender.map(e => {
              return (
                <MenuItem
                  value={e.value}
                  key={e.value}
                >
                  {e.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
			</Grid>
			<Grid item xs={3} />
			<Grid item xs={3} />
			<Grid item xs={5}>
			<FormControl sx={{ width: '50%' }}>
          <InputLabel>カテゴリ</InputLabel>
          <Select
            required
            name="category"
            label="カテゴリ"
          >
            {categories.map(e => {
              return (
                <MenuItem
                  value={e.id}
                  key={e.value}
                >
                  {e.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
			</Grid>
			<Grid item xs={3} />

			<Grid item xs={3} />
			<Grid item xs={5}>
				<TextField
					fullWidth
					label="パスワード"
					variant="outlined"
				/>
			</Grid>
			<Grid item xs={3} />

			<Grid item xs={3} />
			<Grid item xs={5}>
				<TextField
					fullWidth
					label="パスワード（確認用）"
					variant="outlined"
				/>
			</Grid>
			<Grid item xs={3} />
			<Grid item xs={7} />
			<Grid item xs={2}>
				<Button
					variant="contained"
				>
					登録
					</Button>
			</Grid>
			<Grid item xs={3} />
		</Grid>
	)
}

export default UserForm;