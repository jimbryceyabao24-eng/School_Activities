Create a simple React Native component that fetches and displays real data from an external public REST API.

You may use any free public API (such as JSONPlaceholder, PokeAPI, or The Dog API) to supply your data.

Important Clarification:
Do not build a fully functional or complex application. No navigation, local storage, or complex styling is required. This activity is strictly a single-screen exercise designed to test your ability to trigger a network request and handle the resulting data.

Required Features:
-A functional component that utilizes the useEffect hook with an empty dependency array ([]) to trigger the data fetch automatically when the component mounts.
-Use Asynchronous JavaScript (async / await and try...catch blocks) to handle the network request securely and catch any potential errors.
-Use the built-in fetch() function to make a GET request to your chosen public REST API and parse the response using .json().
-Use the useState hook to manage at least two distinct states:
--1 The actual data fetched from the API.
--2 A loading state (e.g., displaying a "Loading..." text while waiting for the data).
-Render the fetched data into your UI (e.g., mapping through an array of items to display a simple list, or showing text details of a single object).

Submission:
-Upload ONLY the specific code files you created or edited for this exercise.
-Do not upload .zip files, folders, or any project configuration files (like package.json or App.json).

Example:
If your exercise uses App.js and ApiDisplay.js, upload those two files only. If you prefer to put all your logic and styling into a single App.js file for this exercise, uploading just that one file is perfectly acceptable.
