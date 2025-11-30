document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('search-bar-entry');
  if (searchBar) {
    const signupButton = document.createElement('a');
    signupButton.href = 'https://app.neosantara.xyz/signup';
    signupButton.textContent = 'Sign Up';
    signupButton.style.cssText = 'margin-right: 12px; padding: 8px 16px; background: #0066FF; color: white; border-radius: 6px; text-decoration: none; font-weight: 500;';
    searchBar.parentNode.insertBefore(signupButton, searchBar);
  }
});