// const { use } = require("express/lib/application");

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

var userProfile = document.querySelector('.userProfile');
var saveChanges = document.getElementById('SaveChanges');
var exitButton = document.querySelector('.bx-x');
var userName = document.getElementById('userName');

// Load initials from localStorage when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const storedInitials = localStorage.getItem('userInitials');
    if (storedInitials) {
        userProfile.innerText = storedInitials; // Set stored initials
    }
});

userProfile.addEventListener("click", () => {
    document.querySelector('.overlay').style.display = 'flex';
});

exitButton.addEventListener('click', () => {
    document.querySelector('.overlay').style.display = 'none';
});

saveChanges.addEventListener('click', () => {
    const initials = getInitials(userName.value);
    userProfile.innerText = initials; // Update initials on the page
    localStorage.setItem('userInitials', initials); // Save initials to localStorage
});

function getInitials(fullName) {
    let splitName = fullName.trim().split(/\s+/);

    if (splitName.length === 0 || splitName[0] === '') {
        return 'AA'; // Default initials if empty
    }

    let firstInitial = splitName[0][0]?.toUpperCase() || '';
    let secondInitial = splitName[1]?.[0]?.toUpperCase() || '';

    return secondInitial ? `${firstInitial}${secondInitial}` : firstInitial;
}



