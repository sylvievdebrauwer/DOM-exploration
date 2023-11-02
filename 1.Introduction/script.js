/* 
X Display the document title in the console
X Change the document title to Modifying the DOM
Change the background color of the body to hot pink (#FF69B4). 
If that worked, try with a random color as an extra challenge. 
(tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).
Using the children method and a for ... of  loop, 
display every children elements of the second child element of your document (display all children elements of the <body>) */

console.log(document.title);
document.title =("Modifying the DOM");
document.body.style.backgroundColor = "#FF69B4";
document.body.style.backgroundColor = "rgb(0,25,20,0.5)";

const elements= document.body.children;

for (let children of elements) {
    console.log(children)
}