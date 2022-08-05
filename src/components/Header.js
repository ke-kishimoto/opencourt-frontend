import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <Grid container spacing={2} margin={1}>
            <Grid item xs={1}>
                メニュー
            </Grid>
            <Grid item xs={8} textAlign={'center'}>
                タイトル
            </Grid>
            <Grid item xs={1}>
                <Button variant="outlined">ログイン</Button>
            </Grid>
            <Grid item xs={1}>
                <Button variant="outlined">新規登録</Button>
            </Grid>
        </Grid>
    )
}

export default Header;