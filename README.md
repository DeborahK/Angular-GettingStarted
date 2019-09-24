# Angular-Getting Started
Materials for the ["Angular: Getting Started"](http://bit.ly/Angular-GettingStarted) course on Pluralsight.

`APM-Start`: The starter files set up for use in VSCode, WebStorm, or other editors. **Use this to code along with the course**. (Updated for <i>Angular version 8 or higher</i>)

`APM-Final`: The completed files. Use this to see the completed solution from the course. (Updated for <i>Angular version 8 or higher</i>)

See the `README.md` file under each folder for details on installing and running the application.

If you have any problems installing or running this code, please see the ["Angular: Getting Started Problem Solver"](http://blogs.msmvps.com/deborahk/angular-2-getting-started-problem-solver/)

If that does not resolve your issue, please post to the [discussion board for the course](https://app.pluralsight.com/library/courses/angular-2-getting-started-update/discussion)

NOTE: The installation was tested using node v10.16.0 and npm 6.9.0.

## STACKBLITZ

If you want to work through the course without downloading npm or any of the libraries, try the course with Stackblitz by following this link: https://stackblitz.com/github/DeborahK/Angular-GettingStarted/tree/master/APM-Start

Stackblitz does not support reading json files from a folder defined in the angular.json file. Rather, you need to copy the products folder from the api folder to the assets folder. Then modify the productUrl to look in the assets folder: private productUrl = 'assets/products/products.json';

To install packages in Stackblitz, such as bootstrap and font-awesome, you need to use the DEPENDENCIES branch in the Project hierarchy to the left of the code in Stackblitz:
1) Open the DEPENDENCIES node. (You should see the list of existing dependencies such as @angular/common
2) Below the list of dependencies is an input box with the text "enter package name"
3) Enter bootstrap there and press enter.
4) If it asks you to install missing dependencies, click "INSTALL MISSING DEPENDENCIES"
5) Repeat step 3 with font-awesome

Stackblitz does not seem to recognize the Font Awesome icons. So you will instead see portions of squares.
