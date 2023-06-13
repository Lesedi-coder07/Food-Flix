let endpoint = 'https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert.';
const img = document.querySelector('#food_img')
const instruct = document.querySelector('#instruct')
let food_title = document.querySelector('#food_title')
const genBtn = document.querySelector('#gen')
let ingredient_list = document.querySelector('#ing_list')
let priceEl = document.querySelector('#price');
let healthEl = document.querySelector('#health');
let timeEl = document.querySelector('#time');
let dish_typeEl = document.querySelector('#dish_type');




function fetchData (){
let result = fetch(endpoint, {
    headers: {
        "x-api-key": "3f5d6f6bfca74a90aedccc7c68c5cff0",
       "Content-Type": "application/json"
    },
    
})
.then(
 raw_data => raw_data.json()
).then(data => {console.log(data)
                 sort(data.recipes[0])
 })

 function sort (rec) {
    
    img.src = rec.image;
   // instruct.innerHTML = rec.instructions
    rec.analyzedInstructions[0].steps.map(current => instruct.innerHTML += `<li> ${ current.step } </li>`)
    food_title.innerHTML = rec.title;
    genBtn.disabled = true;
 
    rec.extendedIngredients.map(ingredient => {
        ingredient_list.innerHTML += `<li> ${ingredient.nameClean} ${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitShort} </li>`
    })

    priceEl.innerHTML = `R${rec.pricePerServing}`;

    if(rec.vegetarian === true ) {
        healthEl.innerHTML = 'Vegeterian'
    }

    timeEl.innerHTML = `${rec.readyInMinutes} min`

 } }



 const search = () => {
  const searchQuery = document.querySelector('#food_search_input').value;
  alert(searchQuery)
  
 }