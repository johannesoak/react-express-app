// src/components/app.tsx
// Import necessary dependencies
import React, { useEffect, useState } from "react";

// Fetch
import { fetchMessage } from "../fetch/fetchMessage";
import { fetchUsers } from "../fetch/fetchUsers";

// Create App component
function App() {
  // Prepare state hook for welcome message
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [usersList, setUsersList] = useState([]);

  // Use useEffect to call fetchMessage() on initial render
  useEffect(() => {
    fetchMessage(setWelcomeMessage);
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        {/* Display welcome message */}
        <p>{welcomeMessage}</p>
        {/* Button to fetch users data */}
        <button onClick={() => fetchUsers(setUsersList)}>Fetch users</button>
        {/* Display table of users after fetching users data */}
        {usersList.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </header>
    </div>
  );
}
export default App;
