//map -> defined function -> defined array -> defined function grabs items from the defined array
 // -> than the map creates a new array with those items

const labels = document.querySelectorAll(".form-control label");
labels.forEach(function (label) {
    label.innerHTML = label.innerText.split('')
        .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`).join('');
});
