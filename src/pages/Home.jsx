import React from 'react'
import Users from '../components/Users'
function Home() {
    const api = import.meta.env.VITE_SERVER_API;
    return (
        <div>
            <h2>Farm Setu Website</h2>
            <p>{api} window api</p>
            <Users />
        </div>
    )
}

export default Home