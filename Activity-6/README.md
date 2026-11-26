
Create a React Native application that acts as a Notes or To-Do list, ensuring that data is saved locally to the device and remains available even when the app is completely closed and reopened.

Important Clarification:
This activity is strictly focused on local data persistence. You do not need to implement multi-screen navigation, Context API, or external data fetching. Your main goal is to successfully write data to the device's storage and read it back on startup.

Required Features:
-Integrate and configure the @react-native-async-storage/async-storage package to handle device storage.
-Implement all four standard CRUD operations within your app:
--Create: Add a new note/task to your list and save it to storage.
--Read: Use the useEffect hook to load the saved list from storage when the app first mounts, displaying it in the UI.
--Update: Edit an existing note/task and save the modified list.
--Delete: Remove an item from the list and update the storage accordingly.
-Demonstrate the correct handling of complex data by using JSON.stringify() before saving your array to storage, and JSON.parse() when retrieving it.

Submission:
-Upload ONLY the specific code files you created or edited for this exercise
-Do not upload .zip files, folders, or any project configuration files (like package.json or App.json).

Example:
If your Persistent Notes App uses App.js, StorageService.js, NoteItem.js, and styles.js, upload those four files only.

Focus on:
Mastering the golden rule of AsyncStorage (stringifying and parsing JSON), ensuring state stays in sync with your local database, and verifying that your CRUD operations successfully persist between app reloads.
