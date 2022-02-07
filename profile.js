const favoriteButtons = document.querySelectorAll("button");

for (let i = 0; i < favoriteButtons.length; i++) {
  favoriteButtons[i].addEventListener("click", (element) => {
    alert(`My favorite ${element.target.id} is ${element.target.value}`);
  });
}
