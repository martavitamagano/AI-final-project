function generateRecipe(event){
    event.preventDefault();

  let recipeElement = document.querySelector("#recipe");

new Typewriter("#recipe", {
  strings: ['Recipe loading...'],
  autoStart: true,
  delay: 40,
  cursor: "",
});

 
}



let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);