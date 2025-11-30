document.addEventListener('DOMContentLoaded', function() {
  // Tunggu navbar sepenuhnya dimuat
  const addSignInButton = () => {
    const topbarRight = document.getElementById('topbar-right-container');
    const navbar = document.getElementById('navbar');
    
    // Coba targetkan topbar-right-container dulu, kalau tidak ada gunakan navbar
    const targetElement = topbarRight || navbar;
    
    if (targetElement && !document.querySelector('.custom-signin-btn')) {
      const signInButton = document.createElement('a');
      signInButton.href = 'https://app.neosantara.xyz/signin';
      signInButton.textContent = 'Sign In';
      signInButton.className = 'custom-signin-btn';
      signInButton.target = '_blank'; // Buka di tab baru (opsional)
      
      targetElement.appendChild(signInButton);
    }
  };
  
  // Coba beberapa kali karena navbar mungkin dimuat secara dinamis
  addSignInButton();
  setTimeout(addSignInButton, 100);
  setTimeout(addSignInButton, 500);
});