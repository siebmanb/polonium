Polonium
=====

Polonium is a sneaky radioactive element that kills you really slowly and painfully. You get the same feeling when Internet is unreachable and you are waiting for it to come back! Polonium will poll your network connection and send you a push notification when Internet is back and you can browse the world wide web again.
		

Polonium is a mobile app built using jQuery and Cordova. The project is offered with the complete Cordova architecture, allowing you to deploy and test the app right away.

## Instructions
To deploy the app, execute the following command in a console, located in the project folder
```
   cordova build ios
```
or
```
   cordova build android
```

Then you will find your native project (XCode or Java) inside the platforms folder.

## Apple

This app has been refused by Apple because it uses geolocation to keep the app alive, even though the app does not need geolocation. Official quote: "Multitasking apps may only use background services for their intended purposes".

## Feedback

If you have any feedback, feel free to contact me at siebmanb@gmail.com. If you have improvments for the app, just do a pull request.