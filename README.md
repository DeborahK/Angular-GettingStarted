# Angular-Getting Started
Materials for the ["Angular: Getting Started"](http://bit.ly/Angular-GettingStarted) course on Pluralsight.

`APM-Start`: The starter files set up for this course. **Use this to code along with the course**. (Updated for <i>Angular version 14</i>)

`APM-Final`: The completed files. Use this to see the completed solution from the course. (Updated for <i>Angular version 14 </i>)

See the `README.md` file under each folder for details on installing and running the application.

If you have any problems installing or running this code, please post to the [discussion board for the course](https://app.pluralsight.com/library/courses/angular-2-getting-started-update/discussion)

NOTE: The installation was tested using node v16.15.1 and npm 8.11.0.

## LINKS
Here are some links to additional useful materials on YouTube:

[Gentle Introduction to GitHub](https://youtu.be/pICJdbC7j0Q): You'll learn the purpose of Git and GitHub and what a repository is. You'll create a repository, then try out GitHub Desktop and VS Code Git integration to clone, commit, and sync. You'll work with branches, and create pull requests to merge those branches. You'll then publish a website with GitHub Pages.

[Gentle Introduction to HTML](https://youtu.be/6tBnZ-T4uDE): You'll learn about HTML elements and attributes, how to structure a page, and use semantic elements to organize your content. You'll see how to build a list and table, add images and navigation, and create a data entry form.

[Gentle Introduction to CSS](https://youtu.be/3DAFg7tY4gE): You'll learn about CSS, where to define styles, CSS syntax, selectors, and the CSS box module. You'll try out CSS layout features and explore how styles cascade. Throughout this course, you'll style a web page.

[Gentle Introduction to Bootstrap 5](https://youtu.be/Yjs4PKmgPi0): You'll learn the Bootstrap styling framework and its benefits. You'll try out Bootstrap containers and utility classes. Then  walk through how to style a menu and a table, explore Bootstrap's grid system for layout, and how to style a data entry form.

[Gentle Introduction to JavaScript](https://youtu.be/jJLn5XxyXWc): You'll learn where and how to write JavaScript code. You'll examine JavaScript syntax including variables, statements, functions, and objects. You'll discover how to respond to actions, such as button clicks, add content to a web page and change element styles ... all with JavaScript. 

## INSTALLING THE CODE

The following are detailed instructions for installing the code so you can code along with the course.

0) Ensure you have node installed.

   At a command prompt, type `node -v` to ensure you have version `14.15.0` or higher before proceeding.

1) Download or clone the code from this repository.

   If you download as a zip file, be sure to unzip it.

2) Navigate to the APM-Start folder (or APM folder if you renamed it).

   There should be a package.json file in this folder.

3) In a command window (or the Command prompt in VS Code), type `npm install`.

   This creates a node_modules folder and installs all packages from the package.json file into that folder. You may see a few warnings during this process, but you should not see any errors.
   
4) In the same command window (or the Command property in VS Code), type `npm start`.

   The application should then compile and launch in your default browser.
   
If these steps don't work for you, see STACKBLITZ below.

## STACKBLITZ

If you want to work through the course without downloading npm or any of the libraries, try the course with Stackblitz by following this link: https://stackblitz.com/github/DeborahK/Angular-GettingStarted/tree/master/APM-Start

Stackblitz does not support reading json files from a folder defined in the angular.json file. Rather, you need to copy the products folder from the api folder to the assets folder. Then modify the productUrl to look in the assets folder: private productUrl = 'assets/products/products.json';

To install packages in Stackblitz, such as bootstrap and font-awesome, you need to use the DEPENDENCIES branch in the Project hierarchy to the left of the code in Stackblitz:
1) Open the DEPENDENCIES node. (You should see the list of existing dependencies such as @angular/common
2) Below the list of dependencies is an input box with the text "enter package name"
3) Enter bootstrap there and press enter.
4) If it asks you to install missing dependencies, click "INSTALL MISSING DEPENDENCIES"
5) Repeat step 3 with font-awesome

Stackbliz has the Angular CLI commands built in. Instead of installing the Angular CLI to your system, right-click on a folder in Stackblitz and you'll see an "Angular Generator" option. Under that menu you'll find the Angular CLI commands.
