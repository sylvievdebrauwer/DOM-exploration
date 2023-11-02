// TODO: Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.

console.log(document.title);

// TODO: Get all elements which have the important class
const importantElements = document.querySelectorAll(".important");
console.log(importantElements);

// Iterate over the important elements and add a title attribute to each one.
for (const element of importantElements) {
    element.setAttribute("aria-label", "This is an important element.");
  }



// TODO: Select all the img tags and loop through them. If they have no important class, turn their display property to none
// TODO: Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
// TODO: Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.


