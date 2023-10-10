import React, { useState } from 'react';

export default function Logout() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = () => {
    // Perform any logout operations here (e.g., clearing session, tokens, etc.)
    // For demonstration purposes, we'll simply set the isLoggedOut state to true.
    setIsLoggedOut(true);
  };
  
  return (
    <div>
      {!isLoggedOut ? (
        <center><button onClick={handleLogout}>Logout</button></center>
      ) : (
        <center><h2>Logout successfully</h2></center>
      )}
    </div>
  );
}