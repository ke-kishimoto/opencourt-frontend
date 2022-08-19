import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const LineLogin = () => {

  const clientId = process.env.LINE_LOGIN_CLIENT_ID
  const callbackUrl = process.env.LINE_LOGIN_COLLBACK_URL
  
  return (
    <Box>
      <Typography>LINEでログイン</Typography>
        <a href={'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=' + clientId + '&redirect_uri=' + callbackUrl + '&state=' + '12345' + '&bot_prompt=aggressive&scope=profile%20openid'}>
            <img src={`${process.env.PUBLIC_URL}/LINE/DeskTop/2x/20dp/btn_login_base.png`} />
        </a>
    </Box>
  )
}

export default LineLogin;