Create a React Native application that implements multi-screen tab navigation and shares data across those screens using global state management.

You may create any app that benefits from tabs and shared data, such as a Shopping Cart (Tab 1: Shop, Tab 2: Cart), a User Dashboard (Tab 1: Feed, Tab 2: Settings), or a Theme Switcher app.

Important Clarification:
Do not build a fully functional production app. No external API fetching or local database persistence is required for this activity. This exercise is designed specifically to test your ability to configure a tabbed menu and pass data using the Context API without relying on prop drilling.

Required Features:
-A NavigationContainer wrapping a Tab Navigator (e.g., createBottomTabNavigator) that manages at least 2 distinct screens.
-Use the Context API to create a global state (createContext and a Provider component).
-Wrap your navigation or screen components inside this Provider so that the state is accessible globally.
-Use the useContext hook inside your tab screens to read and update the shared data. (For example, modifying a setting on Tab 2 should instantly reflect a change on Tab 1).
-Implement a basic loading or error state in your UI. (For example, use conditional rendering to show a "Saving..." text for 1 second when a user updates their profile data before showing the new data).

Submission:
-Upload ONLY the specific code files you created or edited for this exercise.
-Do not upload .zip files, folders, or any project configuration files (like package.json or App.json).

Example:
-If your Shared State App uses App.js, AppContext.js, HomeTab.js, and ProfileTab.js, upload those four files only.

Focus on:
Correctly structuring your NavigationContainer alongside your Context Provider, successfully avoiding prop drilling, and ensuring that state updates in one tab are immediately visible in another tab.
