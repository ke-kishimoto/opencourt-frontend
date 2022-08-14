import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import BasicUserItem from '../components/BasicUserItem';
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

    // setUsers([
    //   {id:1, name: 'AAA', gender_name: '男性', category_name: '社会人'},
    //   {id:1, name: 'BBB', gender_name: '女性', category_name: '大学生'},
    //   {id:1, name: 'CCC', gender_name: '男性', category_name: '高校生'},
    // ])
  }, [])

  return (
    <>
    {users.map(e => {
      return (
        <BasicUserItem user={e.user} />
      )
    })}
    </>
  )

}

export default BasicUserList;