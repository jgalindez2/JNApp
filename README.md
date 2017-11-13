# jnapp (John Note App)

This is a simple Note App built with Node.js and ES6 features.

## Getting Started

You need to have installed node js and follow these simple steps:

* Clone this repo
* Go to the folder project and make `npm install`
* Run `npm start` and add your first note!

## Actions

There are some actions that you can make in this app, the app always will ask you
this question: `Hi! What do you want to do now? : Enter the command:`

* **Add note**: To add a note you need run this command: `add` and then
    first type the title (make sure is correct and not empty) and the body. That's it!
* **List notes**: If want to see all the notes run this command: `list`
* **Show a specific note**: If you want to read a specific note run this command:
  `read`and type the title of the note of your preference
* **Remove note**: To remove to node all you need to do is run this command:
  `remove` and then type the title of the note of your preference
* **Export**: You also can export all the note in a text file, just run this
  command: export` and the file **notes.txt** will be created in the main
  folder project.

If you need some help, type this command: `help` and the app will show you
the list of commands.

## Dependencies

* [prompt](https://github.com/flatiron/prompt) - A command-line prompt for node.js

## Acknowledgments

Thanks **Andrew Mead** for this course [The Complete Node.js Developer Course (2nd Edition)](https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/overview)