function generatePoem(event) {
    event.preventDefault();

    document.querySelector("#poem").innerHTML = "";

    new Typewriter("#poem", {
    strings: " They smell really nice ",
    autoStart: true,
    delay: 1,
    cursor: "",
   
  });
  
}
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);