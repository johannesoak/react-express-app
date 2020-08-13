  // Create async function for fetching users list
  export const fetchUsers = async (setUsersList) => {
    const users = await fetch('/users/all')
      .then(res => res.json()) // Process the incoming data
    // Update usersList state
    setUsersList(users)
  }