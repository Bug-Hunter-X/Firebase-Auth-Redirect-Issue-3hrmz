function handleAuthStateChange(user) {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user);
    navigate('/dashboard', {replace: true}); // Redirect to dashboard and replace current entry
  } else {
    console.log('User is signed out');
    navigate('/login', {replace: true}); // Redirect to login and replace current entry
  }
}

// Additional improvements for production:
// 1. Add error handling for navigate function.
// 2. Use a loading screen while redirecting for smoother user experience.
// 3. Consider using a more robust routing library like React Router for complex applications.