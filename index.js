function displayRecipe(response){
new Typewriter("#recipe", {
  strings: response.data.answer,
  autoStart: true,
  delay: 40,
  cursor: "",
});
}



function generateRecipe(event){
    event.preventDefault();


let instructionsInput = document.querySelector("#user-instructions");
let apiKey =  "4foba0te46425f633e30d965f9ae409d";
let context = "You are an expert on food, and love to write the best recipes for each food. Your mission is to generate a recipe for any ingridient or food in basic HTML without showing it, and separate each line with a <br/>. Make sure to follow the user instructions bellow. Do not include a title. ";
let prompt = `User instructions: Generate a delicious recipe about ${instructionsInput.value}`;
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement = document.querySelector("#recipe");
recipeElement.classList.remove("hidden");
recipeElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionsInput.value}</div>`;

axios.get(apiURL).then(displayRecipe);



 
}



let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);