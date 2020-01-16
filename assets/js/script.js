const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionList.forEach( e => {
    e.addEventListener("click", () =>{
        selected.innerHTML = e.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});