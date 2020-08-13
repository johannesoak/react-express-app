  // Create async function for fetching welcome message
  export const fetchMessage = async (setWelcomeMessage) => {
    // Use Fetch API to fetch '/api' endpoint
    const message = await fetch('/api')
      .then(res => res.text()) // process incoming data
    // Update welcomeMessage state
    setWelcomeMessage(message)
  }