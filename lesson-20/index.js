
let urlParams =new URLSearchParams(window.location.search)
let name_s = urlParams.get("s")
let filter_name = urlParams.get("f")

let searchBy = "s";
let searchValue = "a"

if(filter_name){
  searchBy ="f"
  searchValue = filter_name
}

if(name_s){
  searchBy ="s"
  searchValue = name_s
}

let Margarita = `https://www.thecocktaildb.com/api/json/v1/1/search.php?${searchBy}=${searchValue}`;
let drink = document.querySelector(".drinks");

let input = document.getElementById("search")

document.addEventListener("keydown", (event) =>{
  if(event.keyCode == 13){
    let text = input.value;
    window.location.href = `index.html?s=${text}`
  }
  
})

async function getMargarita() {
  try {
    const res = await fetch(Margarita);
    const data = await res.json();
    console.log(data); 
    showMargarita(data.drinks); 
  } catch (error) {
    console.log(error);
  }
}
getMargarita();

function showMargarita(data) {
  if (!data) {
    console.log("Нет данных для отображения");
    return;
  }
  drink.innerHTML = data
    .map(
      (item) => `
            <div onclick="goToPage('${item.idDrink}')" class="drinks">
            <div class="drink-card">
                  <h2> ${item.strDrink} </h2>
                 <img src="${item.strDrinkThumb}" alt="">
                
            </div>
         </div>
      `
    )
    .join("");
}

function goToPage(id){
  window.location.href = `info.html?id=${id}`
}



let letterArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]

let filter = document.querySelector(".filter")

 filter.innerHTML = letterArray.map((item) => {
  return`
    <div onclick="changeFilter('${item}')" class="filter-item">${item}/ </div>
  `
 }) 

 function changeFilter(letter){
  window.location.href = `index.html?f=${letter.toLowerCase()}`
 }



