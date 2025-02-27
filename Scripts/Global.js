

window.onload = function() {
    const loadingScreen = document.querySelector('.loadingScreen');
    const content = document.getElementById('content');

    // Show the loading screen initially
    loadingScreen.style.display = 'flex';  

    // Hide the content while loading
    content.style.display = 'none';  

    // Once everything is loaded, show the content and hide the loading screen
    content.style.display = 'block'; 
    loadingScreen.style.display = 'none';
};
