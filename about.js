// console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("The form has been submitted successfully.");
  // console.log('form submit');
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);
const duckyFlirt = (el) => {
  el.preventDefault();
  alert("The ducky loves you, petty officer.");
};
let ducky = document.getElementById("rubber-ducky");

ducky.addEventListener("mouseover", duckyFlirt);
