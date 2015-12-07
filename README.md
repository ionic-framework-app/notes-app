#Find Another Framework - IONIC
##The differences between Ionic & Angular.

A project by Kenji, Jack & Emily for CF SEA-D45-Javascript.

##A Brief Introduction to Angular-
AngularJS is a JavaScript MVC framework that lets you build well structured and maintainable front-end apps. HTML is great for static documents but not so great for creating dynamic views in web-apps. That's where Angular comes in. AngularJS lets you extend HTML and results in more expressive apps with less code and more flexibilty.

This is accomplished with two-way data binding. The implementation of controllers connect the HTML(view) to your JavaScript object(model) so that any update on the model will be immediately reflected in the view. This is positive because it eliminates the need for DOM manipulation or event handling with jQuery.

AngularJS makes it possible for every feature to be modified or replaced to suit unique needs.

##An Intro to Ionic-
Ionic is an open-source HTML5 framework for building hybrid mobile apps. It uses web technologies like HTML, CSS and JavaScript and focuses on front-end, handling the look and feel of the app.

Hybrid apps are basically small websites running a browser shell in an app that also have access to the native platform layer. Ionic apps are not meant to be run in a browser, but rather the low-level browser shell, which are wrapped by tools like Cordova. When you break it down, an Ionic app is really just a web page running in a native app shell. The only real different between this and a web page is that rather than creating a website that users can link to, it is built as a self-contained app.

##Working Together-
In short, Ionic is an extension of Angular. Ionic uses AngularJS for a lot of the core functionality of the framework. While the CSS portion of the framework can still be used without Angular, Ionic will not be working at it's full potential. Using Ionic with Angular is one of the best ways to build brower-based mobile apps as you will have access to a full list of features including UI interactions, guestures and animations.

##Notes during development-
We built this app by following along with Tyler's Ionic lectures.

Ionic looks like it has a lot of potential, but it's a little buggy. First of all, while we did manage to install an android emulator, it's really slow to do a build and emulation (it did work, however). The solution seems to be is to use an emulator  like Genymotion (https://www.genymotion.com/#!/) or to deploy the app to an actual device.

As far as launching the emulator in iOS, the experience was much smoother and faster. It didn't work in iOS, however (None of the CRUD operations worked). There seems to be a compatibility issue (or perhaps issues) with iOS9's UIWebView http://blog.ionic.io/ios-9-potential-breaking-change/. This should be fixed in Ionic 1.2.

Luckily there was a quick way to see if what we built worked before emulation and that was with the "ionic serve" command. This loaded our app up in a web browser and was great for debugging. After we got it to work on the web, we used the android emulator ("ionic run android") to see if it still worked. Emulation worked on android, so that was a win.

Although ionic is based on angular, it was developed in a way that it expected developers to require in their dependencies through script tags instead of adding it to a webpack bundle file, this messes with the scoping in angular so that instead of declaring a $scope variable, we have to use "this" and bind "this" to every method we declare. So it's a tradeoff. Because of this, most of the ionic tutorials out there provide examples with the $scope variable and not "this" which makes implementation a little more difficult.

Overall, in spite of initial frustrations getting builds and platforms to work. Ionic can be very useful for developing a moble app prototype with a single codebase for many different platforms.
