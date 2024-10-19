"use client"
import axios from 'axios'
import { json } from 'stream/consumers'
import Link from 'next/link';
import api from '@/services/Axios/config';
import {
  UseQueryResult,
  useQuery,
  useMutation,
  UseQueryOptions,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";
import { useEffect, useState } from "react/";
import { title } from 'process';


export default  function Posts() {
   const qureyClient = useQueryClient()
  
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts , setPosts] = useState([])
  

  // const filterPosts = (id : number)=>{
  
  //   //@ts-ignore
  //    setPosts(posts.filter(item => item.id !== id))
     
  
  // }


  const getUsers =async()=>{
    console.log('====================================');
    console.log();
    console.log('====================================');
    const res =await api.get('/posts?_limit=10')
    const data =  res.data;
    setPosts(data)
    return data
  }
  //@ts-ignore
  const { isPending, isError, error, data  } = useQuery({
    queryKey : ['posts'],
    queryFn : getUsers,
    gcTime:10000,
    staleTime:5000,
    enabled:true,
  

    
  }
  
  
);
const deleteMutation = useMutation({
  //@ts-ignore
  mutationFn:(id) => 
 axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`),
 

  
});

const mutation = useMutation({
  //@ts-ignore
  mutationFn:(newPost) => 
 axios.post("https://jsonplaceholder.typicode.com/posts", newPost),
});


   if (isPending) {
     return <div>Loading..</div>
   }
  

  
  if (isError) {
     return <div>Error, {error.message}</div>
   }

 


  

  
  
//@ts-ignore
  const submitData = (event) => {
     event.preventDefault();
  
    console.log({title, body} )
    //@ts-ignore
    mutation.mutate({title, body });
  };




  
   // @ts-ignore 
    const handlerDelete = (id) => {
      const filterPosts = (id : number)=>{
    
       //@ts-ignore
       setPosts(posts.filter(item => item.id !== id))
         
      
      }
      // @ts-ignore
       filterPosts(id)
       deleteMutation.mutate(id) 
  
    };


  return (
    <div className="flex flex-col ">
      <h1 className='text-red-600 font-bold'>
        Posts
      </h1>
      
      <ul>
        {posts?.map((post:any) => (
          <>
          <li key={post.id}>{post.title}

          <button className='pl-5 text-red-700 font-bold' onClick={() =>handlerDelete(post.id)}>Remove</button>
          </li>

          </>
          
        ))}
      </ul>


      <div>
      {mutation.isPending ? (
        'Adding todo...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

         
        </>
      )}
      <div>

      <input className="border-2 border-solid border-black mr-4"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        />
      <input className="border-2 border-solid border-black mr-4"
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        />
      
      <button onClick={submitData}>Add post</button>
        </div>
    
    </div>
      


      
      
    </div>
  )
}
