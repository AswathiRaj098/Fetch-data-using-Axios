import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"


const Fetch = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUser(res.data))
    })

  return (
    <div align="center">
        <h1 style={{color:"Red"}}>Fetch the Data Using Axios</h1>
        {user.map(e => (
            <div>
                {e.id} {e.name} {e.email}
            </div>
        ))}     
    </div>
  )
}

export default Fetch;