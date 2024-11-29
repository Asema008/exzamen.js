



let urlParams = new URLSearchParams(window.location.search)
let category_slug = urlParams.get("category")

let product = "https://dummyjson.com/products/"
let products = document.querySelector(".products")


let CATEGORY_API = "https://dummyjson.com/products/categories"
let category_list = document.querySelector(".category-list")

document.addEventListener('DOMContentLoded', () => {
  getCategory()
})


if (category_slug) {
  product = `https://dummyjson.com/products/category/${category_slug}`
}
async function getProducts() {
  try {
    let res = await fetch(product);
    let data = await res.json();

    showProduct(data.products);

  } catch (error) {
    console.log(error);
  }
}
getProducts()


function showProduct(data) {
  products.innerHTML = data.map((item) => {
    return `
       <div onclick="goToPage('${item.id}')" class='product'>
            <div class="discount">${item.discountPercentage}% OFF</div>
            <img src='${item.thumbnail}'/>
            <h5>${item.title}</h5>
            <span>${item.price}$</span>
        </div>
    `
  }).join('')
}
showProduct()



async function getCategory() {
  try {
    const res = await fetch(CATEGORY_API)
    const data = await res.json()

    console.log(data);
    category_list.innerHTML = data.map((item) => {

      return `
      <li onclick="setCategory('${item.slug}')" >${item.name}</li>
      `
    }).join("")

  } catch (error) {
    console.log(error);
  }
}
getCategory()

function setCategory(slug) {
  window.location.href = `index.html?category=${slug}`
}












function toggleLogin() {
  const modal = document.getElementById('login-modal');
  if (modal.style.display === 'none' || modal.style.display === '') {
    modal.style.display = 'flex';
  } else {
    modal.style.display = 'none';
  }
}


function deleteWindow() {
  const element = document.getElementById('myWindow');
  if (element) {
    element.remove();
  }
}








