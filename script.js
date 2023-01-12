

var container = document.createElement("div");
container.setAttribute("class", "container");
var row = document.createElement("div");
row.setAttribute("class", "row");
row.classList.add("row", "m-3");
container.append(row);


async function drinkdata() {
  let response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  let data = await response.json();
  console.log(data.drinks);
  for (let i = 0; i < 6; i++) {
    let drink = data.drinks[i];
    console.log(drink);
    row.innerHTML += `<div class="col-md-4">
     <div class="card" style="width: 18rem;">
  <img src="${data.drinks[i].strDrinkThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">TYPE:${data.drinks[i].strCategory}</h5>
    <p class="card-text">${data.drinks[i].strInstructions}</p>
    
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${data.drinks[i].strIngredient1}</li>
    <li class="list-group-item">Name:${data.drinks[i].strDrink}</li>
    <li class="list-group-item">Glass Type:${data.drinks[i].strGlass}</li>
  </ul>
  </div>`;

    document.body.append(container);
  }
}





drinkdata();



