// TODO: Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.
//CHECK: document title
console.log(document.title);

// TODO: Get all elements which have the important class
const importantElements = document.querySelectorAll(".important");
// CHECK:
console.log(importantElements);

// Iterate over the important elements and add a title attribute to each one.
for (const element of importantElements) {
    element.setAttribute("title", "This is an important element.");``
// CHECK:
    console.log(element.getAttribute("title"));
  }
 

  // TODO: Select all the img tags
  const imgTags = document.querySelectorAll("img");
  // CHECK:
  console.log(imgTags);

  // TODO: Loop through all the img tags

  for (const image of imgTags) {
 // TODO: check If img tags have no important class 
    if (image.classList.contains("important") === false) {
// TODO:  turn images with no important class display property to none
        image.style.display = "none";
// CHECK: to check the hidden images:
        console.log("Hiding image:", image);
    }
  }


// TODO: Loop through all the paragraphs and 
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// TODO: display their content in the console.


for (const paragraph of paragraphs) {
    console.log(paragraph.TextContent);
// TODO: If the paragraph has a class ---> does the paragraph have a class?
    if (paragraph.classList.length > 0) {
// TODO: Yes? --> display its classname as well
        console.log(paragraph.classList);
    }
}


// Function to generate a random color in hex format
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


// TODO: Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
// TODO: If the paragraph doesn't have a class (loop through the paragraphs again)
for (const paragraph of paragraphs) {
    console.log(paragraph.TextContent);
    if (paragraph.classList.length <=0) {
// TODO: assign each of the paragraph a random text color
        const randomColor = getRandomColor();
        paragraph.style.backgroundColor = randomColor;
    }
}

