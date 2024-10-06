# Motivation-poster
Daily Motivation Website
The Daily Motivation Website displays a random motivational quote along with a random motivational image every time the page is refreshed. It also supports light and dark modes, allowing users to toggle between different themes, with background images updating accordingly.

Features
Random Motivational Quote: Fetches a new motivational quote on every page load.
Random Motivational Image: Displays a new motivational-themed image from Unsplash with each refresh.
Light/Dark Mode: Users can toggle between light and dark modes, and the website dynamically changes the background image and colors to match the selected mode.
Responsive Design: The layout is responsive and adjusts well across different screen sizes.
Technologies Used
HTML: Markup for creating the structure of the webpage.
CSS: Basic styling for layout, dark/light mode transitions, and background changes.
JavaScript: Handles fetching of quotes and images from external APIs, theme toggling, and event handling.
APIs:
Unsplash API: Provides random motivational images.
Quotable API: Provides random motivational quotes.
Installation and Usage
Prerequisites
An Unsplash API key (to fetch random images from Unsplash).
A modern web browser that supports JavaScript and HTML5.
Steps to Set Up:
Clone the repository or download the files to your local machine.

bash
Copy code
git clone <repository-url>
Open the index.html file in a web browser.

Replace the placeholder API key in the app.js file with your own Unsplash API key:

javascript
Copy code
const UNSPLASH_ACCESS_KEY = 'your-unsplash-access-key';
Upon loading, the page will display a random motivational quote and image.

Use the "Switch to Dark Mode" button to toggle between light and dark modes. The background image and colors will update accordingly.

How It Works
Motivational Quote: The quote is fetched using the Quotable API, which provides random quotes tagged as motivational.

Motivational Image: A random image related to motivation is fetched from the Unsplash API. The image is displayed at the top of the page and refreshed with each reload.

Theme Toggle: Users can toggle between dark and light modes by clicking the toggle button. This updates the background image and the page's color scheme.

API Setup
Unsplash API
To use the Unsplash API, you'll need an API access key:

Visit Unsplash Developers.
Sign up or log in to your Unsplash account.
Create a new application to get your API key.
Replace the UNSPLASH_ACCESS_KEY in app.js with your generated API key.
Contributing
Contributions to improve the project or add new features are welcome! You can create a pull request or suggest new ideas by opening an issue in the repository.

License
This project is open-source and available under the MIT License.
