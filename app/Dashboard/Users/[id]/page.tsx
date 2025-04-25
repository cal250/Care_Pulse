import React from 'react'

function Userdetails() {
    const page = ({params}):{params:{id:string}} => {
        const {id} = params;
  return (
    <h1>user profile:{id}</h1>
  )
}

export default Userdetails