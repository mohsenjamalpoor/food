"use client"
import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { json } from 'stream/consumers'
import {
  UseQueryResult,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

export default  function Users() {
  const [users, setUsers] = useState([])
  
const getUsers =async()=>{
  console.log('====================================');
  console.log();
  console.log('====================================');
  const res =await axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')
  const data =  res.data;
  return data
}
//@ts-ignore
const { isLoading, isError, error, data } = useQuery({
  queryKey : ['users'],
  queryFn : getUsers
});



if (isLoading) {
  return <div>Loading..</div>
}
if (isError) {
   return <div>Errror, {error.message}</div>
 }
  //@ts-ignore

  return (
    <div>
      <h1 className='pb-2 text-red-600 font-bold'>
        Users
      </h1>
      <ul>
        {data?.map((user:any) => <li key={user.id}>{user.name}
       
        </li>)}
      </ul>
    </div>
  )
}
