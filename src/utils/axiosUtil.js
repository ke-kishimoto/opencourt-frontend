import axios from "axios";
import { useRecoilValue } from 'recoil';
import { getAccessToken } from '../states/selectors/userSelector';

const useAxios = () => {

  const token = useRecoilValue(getAccessToken);
  
  const instance = axios.create();
  instance.defaults.baseURL = process.env.REACT_APP_API_URL;
  instance.defaults.withCredentials = true;
  instance.interceptors.request.use(request => {
    if (token) {
      request.headers["Authorization"] = "Bearer " + token;
    }
    return request
  })

  return instance
}

export { useAxios }