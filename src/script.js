function displayPoem(response) {

   new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    
   
  });
}
function generatePoem(event) {
    event.preventDefault();
    document.querySelector("#poem").innerHTML = "";
    let instructionsInput=document.querySelector("#user-instructions")
    let apiKey = "aac9e97a9bad93ctb4f09o460b13b0c2";
    let context ="You are a romantic poem expert and love to write short poems. Your mission is to generate a four line poem in basic HTML. Do not include a title. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' in <strong> element at the end of the poem";
    let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiURL).then(displayPoem);
  
 
  
}
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);