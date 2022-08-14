import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import BasicUserItem from '../components/BasicUserItem';
import BasicCompanionItem from '../components/BasicCompanionItem';
import { useAxios } from '../utils/axiosUtil';

const BasicUserList = () => {

  const axios = useAxios();
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios.get('/getEventUser/' + id)
      setUsers(result.data);
    }
    fetchData();

  }, [])

  return (
    <>
    {users.map(e => {
      console.log(e)
      return (
        <>
          <BasicUserItem user={e.user} />
          {e.companions.map((c, index) => {
            return (
              <BasicCompanionItem 
                companion={c}
                index={index}
              />
            )
          })}
        </>
      )
    })}
    </>
  )

}

export default BasicUserList;