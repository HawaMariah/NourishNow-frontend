import React from 'react'
import { useCookies } from 'react-cookie'
import { useState } from 'react';
import { useEffect } from 'react';
function Profile() {
    const [cookies] = useCookies(['user']); 
    const [user_donations, set_donations] = useState([])
    const user_data = cookies.user[0]
   
        useEffect(() => {
            // Fetch user donations when the component mounts
            fetch(`http://127.0.0.1:5000/userDonations/${user_data.id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((response) => response.json())
              .then((data) => {
                set_donations(data);
                console.log(data);
              });
          }, [])

    

    
  return (
    <div>
        <h1>Hello {user_data.name}</h1>
        <h2>Email: {user_data.email}</h2>
       
        <ul>
        {user_donations.map((donation) => (
          <li key={donation.id}>
            Amount: {donation.amount}<br/>
            Date: {donation.date}<br/>
            Type: {donation.type}<br/>
            <hr/>
          </li>
          
          
          
        ))}
      </ul>

    </div>
  )
}

export default Profile