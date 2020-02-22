 # Data Entry App for the Jewish Relief Agency
 A single page responsive desktop application developed for the Jewish Relief Agency.
 
## Technologies I utilized
-   React
-   Firebase
-   Electron
-   Material-UI

## Purpose
I developed this app to solve a problem the Jewish Relief Agency was having. After receiving over one thousand “hard-copy” paper surveys from people across the country annually, they needed a way to easily and efficiently store the survey data. Users (the data entry operators) login through the app and select which survey they are going to enter. The user enters the data presented on the survey they are entering and at the end of data entry, the user submits the data.

## Key Features

-   Authentication
-   Realtime database that can be accessed by authorized users at any time to later be analyzed.
-   The app streamlines data entry by matching the exact survey’s layout where each page has the same questions as the survey.
-   The data is dynamically rendered from JSON, allowing for easily editing the survey questions. This will allow for custom surveys by users in the future.

## Future updates

-   Contact admin feature, where user can click button to send an email to request an account.
-   Data validation, where user can only proceed to next page if all fields are filled out.
-   Allow custom surveys to be built by the user.