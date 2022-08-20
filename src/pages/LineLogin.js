import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userState, tokenState } from "../states/atoms/userAtom";
import { useAxios } from '../utils/axiosUtil';

const LineLogin = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const code = query.get('code');

  const axios = useAxios();
  const navigate = useNavigate();

  const [user, setUser] = useRecoilState(userState);
  const [token, setToken] = useRecoilState(tokenState);
  
  useEffect(() => {
    axios.post(`/lineLogin/${code}`)
    .then(res => {
      if(res.status === 200) {
        setUser(res.data.user);
        setToken(res.data.token);
        navigate('/')
      } else {
        console.log('LINEログイン失敗')
        navigate('/')
      }
    })
    .catch(error => {
      console.log(error)
      navigate('/')
    })
  }, [])

  return (
    <>
    </>
  )
}

export default LineLogin;