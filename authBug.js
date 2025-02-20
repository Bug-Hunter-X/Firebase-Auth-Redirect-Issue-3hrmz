function handleAuthStateChange(user) {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user);
    // Here's where you would typically redirect to a protected route or display user-specific content
  } else {
    // User is signed out
    console.log('User is signed out');
    // Redirect to the login page
    navigate('/login'); 
  }
}