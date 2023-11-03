// TODO: select the last child of the <OL> tag
const firstSectionOl = document.querySelector('ol')
const lastChild = firstSectionOl.lastElementChild;

// TODO: move the last child to the beginning of the list
firstSectionOl.insertBefore(lastChild, firstSectionOl.firstChild);

// TODO: get all section elements
const sections = document.querySelectorAll("section");
// TODO: Select the <h2> of the third section and second section
const secondSectionH2 = sections[1].querySelector('h2');
const thirdSectionH2 = sections[2].querySelector("h2");
// TODO: move the <h2> to the second section and vice versa

secondSectionH2.insertBefore(thirdSectionH2, secondSectionH2.parentElement.firstChild);
thirdSectionH2.insertBefore(secondSectionH2, thirdSectionH2.parentElement.firstChild);

// TODO: Delete the last section from the DOM, we don't need it anyways

const thirdSection = sections[2];
thirdSection.remove();
