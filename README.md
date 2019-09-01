## Sports Poll

### Usage
This application allows the user to vote on who will a given sport event. The event data are drawn from the given .json file, and are randomly rendered one at a time by the app. The user  can pick the winner of the event or draw, by clicking one of the three given options below . After that the user can click the next event button so that the app can load it and render it to the screen. 

### How to run it.

You can the find the app deployed on [https://react-sports-poll.dantegr.now.sh/](https://react-sports-poll.dantegr.now.sh/).

In case you want to run it locally here is how you can do it: 

1. Make sure you have installed globally the most recent version on node.js
2. Clone this github repo to your computer
3. Open your favourite terminal app and navigate to folder you've just cloned.
4. Type `npm install` in order to download all the required node modules
5. Type `yarn start` in order to start the development server
6. Open [http://localhost:3000](http://localhost:3000) to view it in your favourite browser.


### Build with

* React - Javascript framework.
* SASS- CSS pre-processor that allows for extra functionality between css files.
* flag-icon-css - CSS package tha offers several country flags to use.
* Node.js - used to build and provide server status.

### Improvements

In order to make this application more usable several improvements must be implemented.

1. Implement a method that would store the input user data, in order for them to be used to provide accurate odds and statistical data.
2. Implement a method that would fetch the json file from somewhere over the internet. 
3. Several css improvements in order to make the application responsive and in general more pleasing to the eye.

