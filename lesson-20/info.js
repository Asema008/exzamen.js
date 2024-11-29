
let urlParams =new URLSearchParams(window.location.search)
let idDrink = urlParams.get("id")
let API = `  https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`

async function getProductById() {
  try {
    const res = await fetch(API)
    const data = await res.json()

    console.log(data);
    
  } catch (error) {
    
  }
}

getProductById()

let mainOlder = document.querySelector(".older")




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


 