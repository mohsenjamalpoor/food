"use client"

import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { json } from 'stream/consumers'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Console } from 'console'
import { isAnyArrayBuffer } from 'util/types'

export default  function Todos() {
  const [todos, setTodos] = useState("")
  
  
 
const getUsers =async()=>{
 
  const res =await Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  const data =  res.data;
  return data
}
//@ts-ignore
const { isLoading, isError, error, data } = useQuery({
  queryKey : ['todos'],
  queryFn : getUsers
});

useEffect(()=>{
  console.log('isLoading',isLoading);
  // setUsers(data)
},[JSON.stringify(data)])

if (isLoading) {
  return <div>Loading..</div>
}
if (isError) {
   return <div>Errror, {error.message}</div>
 }


  return (



  //   <div>
  //   {mutation.isPending ? (
  //     'Adding todo...'
  //   ) : (
  //     <>
  //       {mutation.isError ? (
  //         <div>An error occurred: {mutation.error.message}</div>
  //       ) : null}

  //       {mutation.isSuccess ? <div>Todo added!</div> : null}

  //       <button
  //         onClick={() => {
  //           mutation.mutate({ id: new Date(), title: 'Do Laundry' })
  //         }}
  //       >
  //         Create Todo
  //       </button>
  //     </>
  //   )}
  // </div>
    <div>
      
         
       
       <ul>
        {data?.map((todo:any) => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      

      
         
        
    </div>
  )
}