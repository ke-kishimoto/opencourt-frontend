import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { userState, tokenState } from '../states/atoms/userAtom';
import { useResetRecoilState } from 'recoil';
import { useAxios } from '../utils/axiosUtil';
import { useRecoilValue } from 'recoil';
import { isAdminState, isSystemAdminState } from '../states/selectors/userSelector';

const UserMenu = (props) => {
  const navigate = useNavigate();
  const axios = useAxios();
  const resetUser = useResetRecoilState(userState);
  const resetToken = useResetRecoilState(tokenState);
  const isAdmin = useRecoilValue(isAdminState);
  const isSystemAdmin = useRecoilValue(isSystemAdminState);

  const logout = async () => {
    await axios.post('/logout');
    resetUser();
    resetToken();
  }
  
  return (
    <Menu
    anchorEl={props.anchorEl}
    id="account-menu"
    open={props.open}
    onClose={props.handleClose}
    onClick={props.handleClose}
  >
    <MenuItem
      onClick={() => navigate('/configManagement')}
      sx={{
        backgroundColor: "#ffb6c1",
      }}
    >
    システム設定
    </MenuItem>
    <MenuItem
      onClick={() => {navigate('/policyManagement')}}
      sx={{
        backgroundColor: "#ffb6c1",
        display: `${isSystemAdmin ? 'flex' : 'none' }`,
      }}
    >
      ポリシー管理
    </MenuItem>
    <MenuItem
      onClick={() => {navigate('/UserCategory')}}
      sx={{
        backgroundColor: "#ffb6c1",
        display: `${isSystemAdmin ? 'flex' : 'none' }`,
      }}
    >
      ユーザーカテゴリ管理
    </MenuItem>
    <MenuItem
      onClick={() => {navigate('/eventManagement')}}
      sx={{
        backgroundColor: "#6495ed",
        display: `${isSystemAdmin ? 'flex' : 'none' }`,
      }}
    >
      イベント管理
    </MenuItem>
    <MenuItem
      onClick={() => navigate('/userManagement')}
      sx={{
        backgroundColor: '#6495ed',
        display: `${isAdmin ? 'flex' : 'none' }`,
      }}
    >
      ユーザー管理
  </MenuItem>
    <MenuItem
      onClick={() => navigate('/templateManagement')}
      sx={{
        backgroundColor: '#6495ed',
        display: `${isAdmin ? 'flex' : 'none' }`,
      }}
    >
      テンプレート管理
  </MenuItem>
    <MenuItem
      onClick={() => navigate('/segmentDelivery')}
      sx={{
        backgroundColor: '#6495ed',
        display: `${isAdmin ? 'flex' : 'none' }`,
      }}
    >
      セグメント配信
    </MenuItem>
    <MenuItem
      onClick={() => navigate('/salesManagement/monthly')}
      sx={{
        backgroundColor: '#6495ed',
        display: `${isAdmin ? 'flex' : 'none' }`,
      }}
    >
      売上管理
    </MenuItem>
    <MenuItem
      onClick={() => navigate('/inquiryManagement')}
      sx={{
        backgroundColor: '#6495ed',
        display: `${isAdmin ? 'flex' : 'none' }`,
      }}
    >
      問い合わせ管理
    </MenuItem>
    <MenuItem
      onClick={() => navigate('/newsManagement')}
      sx={{
        backgroundColor: '#6495ed',
        display: `${isAdmin ? 'flex' : 'none' }`,
      }}
    >
      お知らせ管理
    </MenuItem>
    <MenuItem
      onClick={() => {navigate('/mypage')}}
    >
      マイページ
    </MenuItem>
    <MenuItem
      onClick={() => navigate('/bulkReservation')}
    >
      一括申し込み
    </MenuItem>
    <MenuItem
      onClick={() => navigate('/inquiry')}
    >
      問い合わせ
    </MenuItem>
    <MenuItem
      onClick={() => {
        logout();
      }}
    >
    ログアウト
    </MenuItem>
  </Menu>
  )
}

export default UserMenu;