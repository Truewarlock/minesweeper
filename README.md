# Introduction

This is my take on the classic Minesweeper game that I never understood as a child, but that I grew to like as an adult. 

The app is made using the Angular framework and everything here was done from scratch by me (even the icons, no Chat GPT or stackoverflow help). 

This project was meant as an example for my students and junior programers.

![alt text](https://github.com/Truewarlock/minesweeper/blob/main/resources/the%20game%20currently.png)

# TODO list:

x add a way to randomly generate map states

x generate the map only after you clicked the first square(so you prevent clicking on a bomb on the first click)

x implement a reset button

x implement a recurring method that is abble to reveal the neighbouring cells if they are empty and if the are not neighbouring cells wiht mombs

x add multiple difficulties

x improve GAME OVER screen

x show the location of all bombs when you click one

x implement YOU WON screen


# Logic

The logic used here is not state of the art and it can use some refactoring. The state of the board is represented by a matrix inside a global service.The entire board is composed by a single cell component that is multiplied inside an ngFor. The state of that cell is handdled locally, curently.

![alt text](https://github.com/Truewarlock/minesweeper/blob/main/resources/cells.png)


# License type: MIT

Copyright 2023 Truewarlock (https://github.com/Truewarlock)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


