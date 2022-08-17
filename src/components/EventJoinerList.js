import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import BasicUserItem from './BasicUserItem';
import BasicCompanionItem from './BasicCompanionItem';
import { useAxios } from '../utils/axiosUtil';

const EventJoinerList = () => {

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
      return (
        <div
          key={e.id}
        >
          <BasicUserItem user={e.user} />
          {e.companions.map((c, index) => {
            return (
              <BasicCompanionItem 
                key={index}
                companion={c}
                index={index}
              />
            )
          })}
        </div>
      )
    })}
    </>
  )

}

export default EventJoinerList;