// Unsplash Access Key
const UNSPLASH_ACCESS_KEY = 'zNV61RFxyOuUTKfoXZCwn0kpScM6qxPBw24uYX56ukM'; // Replace with your actual access key

// Function to fetch a random motivational image from Unsplash
async function fetchImage() {
    const url = `https://api.unsplash.com/photos/random?query=motivation&client_id=${UNSPLASH_ACCESS_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('image').src = data.urls.regular; // Use the regular-sized image from Unsplash
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}

// Function to fetch a random motivational quote
async function fetchQuote() {
    const url = 'https://api.quotable.io/random?tags=motivational';
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('quote').textContent = data.content;
        document.getElementById('author').textContent = `— ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

// Toggle between dark and light mode with background changes
function toggleMode() {
    const body = document.body;
    const modeToggleBtn = document.getElementById('mode-toggle');

    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        modeToggleBtn.textContent = 'Switch to Light Mode';
    } else {
        modeToggleBtn.textContent = 'Switch to Dark Mode';
    }

    // Change background image or color based on the mode
    if (body.classList.contains('dark-mode')) {
        body.style.backgroundImage = 'url(https://source.unsplash.com/random/1920x1080/?night,stars)'; // Change to a night-themed image
    } else {
        body.style.backgroundImage = 'url(https://source.unsplash.com/random/1920x1080/?day,sunrise)'; // Change to a day-themed image
    }
}

// Initialize the page with a new quote, image, and light mode on load
window.onload = function() {
    fetchQuote();
    fetchImage();
    document.body.classList.add('light-mode'); // Default to light mode
    document.getElementById('mode-toggle').addEventListener('click', toggleMode);
};
