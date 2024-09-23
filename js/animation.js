// Select all elements with the class 'hideableObject'
const objects = document.querySelectorAll(".hideableObject");

// Loop through each object and attach event listeners
objects.forEach((object) => {
  object.addEventListener("click", () => {
    object.style.display = "none"; // Hide the object on click
  });

  object.addEventListener("touchstart", () => {
    object.style.display = "none"; // Hide the object on touch
  });
});
// document.querySelectorAll(".confetti").forEach((el) => {
//   el.addEventListener("mouseover", () => {
//     el.style.opacity = 0;
//   });
// });
// Select all elements with the class 'hideableObject'
// const objects = document.querySelectorAll(".hideableObject");

// // Loop through each object and attach event listeners
// objects.forEach((object) => {
//   object.addEventListener("click", () => {
//     object.style.display = "none"; // Hide the object on click
//   });

//   object.addEventListener("touchstart", () => {
//     object.style.display = "none"; // Hide the object on touch
//   });
// });