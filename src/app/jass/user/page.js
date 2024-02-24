'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Users() {
    const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchSessionData() {
      try {
        // Make an API call to fetch session data
        const response = await axios.get('/api/jass/sessions');
        // Assuming the API returns user data
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching session data:', error);
      }
    }

    fetchSessionData();
  }, []);
  return (
    <div>
      <h2>Session Data</h2>
      {userData ? (
        <div>
          <p>User ID: {userData.id}</p>
          <p>Username: {userData.username}</p>
          {/* Display other user data as needed */}
        </div>
      ) : (
        <p>Loading session data...</p>
      )}
    </div>
  )
}
