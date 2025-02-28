// event.js

window.onload = function() {
    const loadingScreen = document.querySelector('.loadingScreen');
    let bullets = Array.from(document.getElementsByClassName('bullets'));  // Convert to array

    // Fetch event data
    fetch('Scripts/Event_Page.json')
        .then(response => response.json())
        .then(data => {
            // Set event dates on page load
            setEventDates(data);
            loadingScreen.style.display = 'none';

            for (let i = 0; i < bullets.length; i++) {
                bullets[i].addEventListener('click', function() {
                    eventStuff(data, i);

                    for (let index = 0; index < bullets.length; index++) {
                        const bullet = bullets[index];

                        bullet.style.background = '#00223A';

                        // Highlight the clicked bullet
                        if (index === i) {
                            bullet.style.background = '#267EBD';
                        }
                    }
                });
            }

            if (data['events'] && data['events'][0]) {
                // Show first event by default
                eventStuff(data, 0);  
            }
        })
        .catch(error => {
            console.error('Error fetching the JSON file:', error);
        });
};

// Function to display event information based on the clicked bullet
function eventStuff(data, index) {
    var eventTitle = document.getElementsByClassName('event-Title')[0];  
    var eventDescription = document.getElementsByClassName('event-Description')[0]; 
    var currentDate = document.getElementsByClassName('current-event-date')[0];
    
    
    // Use the index to get the correct event information
    eventTitle.innerText = data['events'][index]['title'];
    currentDate.innerText = data['events'][index]['date'];

    eventDescription.innerText = data['events'][index]['description'];
}

// Set event dates under each bullet when the page is loaded
function setEventDates(data) {
    const bullets = document.querySelectorAll('.bullets');
    bullets.forEach((bullet, index) => {
        const eventDateElement = bullet.querySelector('.event-date');

        if (eventDateElement && data['events'][index]) {
            eventDateElement.innerText = data['events'][index]['date'];
        }
    });
}
