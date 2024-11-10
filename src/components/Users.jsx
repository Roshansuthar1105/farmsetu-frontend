import React, { useEffect, useState } from 'react'

function Users() {
    const [users ,setUsers]=useState([]);
    useEffect(()=>{
        fetchAllUsers();
    },[]);
    const fetchAllUsers = async ()=>{
        const url = import.meta.env.VITE_SERVER_API;
        if(!url){
            console.log("Server api url not found !");
            return;
        }
        try {
            const response = await fetch(`${url}/api/v1/user/all`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const resp = await response.json();
            setUsers(resp);
            console.log(resp);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }
  return (
    <div>Total Users : {users.length}</div>
  )
}

export default Users