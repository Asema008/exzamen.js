

let product = "https://boykot.kg/api/v1/products/";
let products = document.querySelector(".products");



async function getProducts() {
    try {
        let res = await fetch(product);
        let data = await res.json();

        console.log(data);
        

        showProduct(data.results);
    } catch (error) {
        console.error("Ошибка:", error);
    }
}
getProducts()
function showProduct(data) {
    
    products.innerHTML = data.map((item) => {
        return `
         <div class="product">

           
            <h3 class="brand">${item.brand}</h3>
            <img class="image" src="${item.logo}" alt="">
          <p class="status ${item.status ? 'true' :'false'}"> ${item.status }</p>
             
            
                
        </div>     
     
        `;
    }).join(''); 
}

 let item = true 
 item == false? "yes" : "no"

showProduct()


  
  
 







