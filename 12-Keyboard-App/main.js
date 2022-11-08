const keyContainers = document.querySelectorAll(".keys");
let textArea = document.querySelector(".display textarea");
// console.log(keyContainers);
// console.log(keyContainers[0]);
// console.log(keyContainers[0].children);

keyContainers.forEach(function (key) {
  key.addEventListener("click", function (e) {
    console.log(e);

    // Use this code to debug firefox issues. It works perfectly well with Chrome and firefox.

    // If e.target.value is not true then return from the function and if it is true then grab each pressed key lowercase it and add more letter s if more keys are pressed.

    // e.target.value is only true when the user has actually clicked on any letter. If the user clicks any where else on the page, then it is false and we wrap up the function or return the function or the function terminates. Otherwise, meaning when e.target.value is true meaning it returns some value for a letter, then we print it on the textarea.
    console.log(e.target.value);

    if (!e.target.value) return;

    let keyClicked = e.target.value.toLowerCase();
    textArea.value += keyClicked;
  });
});
