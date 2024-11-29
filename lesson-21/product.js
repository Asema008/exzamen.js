


let urlParams = new URLSearchParams(window.location.search)

let id = urlParams.get("id")
let products = `https://dummyjson.com/products/${id}`

let section = document.querySelector(".section")

async function getProduct() {
     try {
      const res = await fetch(products);
      const data = await res.json();
      console.log(data);
      showProduct(data)
    
     } catch (error) {
        console.log(error);
     }
}
getProduct()

function showProduct(data){
  section.innerHTML = `
      <div class="content ">
        <p>Home / Shop</p>
        <div class="image1">
            <img src="${data.thumbnail}" alt="">
        </div>
        <div class="content-image">
        ${
          data.images.map((item) => {
            return`<img src="${item}" alt= "">`
          }).join("")
        }
        </div>
    </div>

     <div class="about">
        <div class="card">
            <h3>${data.title}</h3>
            <span>${data.price}</span>
            <div class="card-img">
            </div>
            <p>19 Customer Review</p>
    
    
            <div class="text">
                <h4>Short Description:</h4>
                <p>${data.description}</p>
                <h5>Rating:</h5>
                <ul class="tamga"> 
                ${data.reviews.map((item) => {
                  return`<li>${item.rating}</li>`
                }).join("")
              }
                   
                </ul>
            </div>
        </div>
    
        <div class="box">
            <button id="decrement">-</button>
            <span id="count">1</span>
            <button id="increment">+</button>
        </div>
        <button class="btn">Buy NOW</button>
    
        <button class="btn2">Add to cart</button>
    
        <div class="box-btn">
            <button class="img-btn">
                <img src="./assets/love.svg" alt="">
            </button>
        </div>
    
        <div class="texts">
            <p>SKU :</p>
            <span>${data.sku}</span>
            <p>Categories :</p>
            <span>${data.category}</span>
            <p>Tags :</p>
            ${data.tags.map((item) =>`<span>${item}</span>`)}
            
        </div>
    
        <div class="product">
            <h3>Share this products:</h3>
            <img src="./assets/facebook.svg" alt="">
            <img src="./assets/twitter.svg" alt="">
            <img src="./assets/link.svg" alt="">
            <img src="./assets/vector.svg" alt="">
        </div>
    </div>
  `
}






