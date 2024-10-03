// getPorducts()
// const container = document.getElementById('container')
// const tags = document.getElementById('tags')

// async function getPorducts() {
//     const productsResponse = await fetch('https://dummyjson.com/products')
//     .then(res => res.json())
    
//     let products = productsResponse.products
    
//     //if we do it thruofh for loop

//     // for (var i = 0; i < products.length; i++) {
//     //     const card = `<div class='card' >
//     //     <img src =${products[i].thumbnail} />
//     //     <h4>${products[i].title} </h4>
//     //     </div>`
//     // }
    
//     //map
//     // let categories = products.map((obj, i) => {
//         //     var prod = obj
//         //     prod.available = true
//         //     return prod
//     // })
    

    
//     //For Each
//     products.forEach((data, i) => {
//         const card = `<div class='card' >
//         <img src =${data.thumbnail} />
//         <h4>${data.title} </h4>
//         <h4>${data.price} </h4>
//         </div>`
//         container.innerHTML += card
//     })
    
//     //map
//     var categories = []
//     products.map((obj, i) => {
//         if (!categories.includes(obj.category)) {
//             categories.push(obj.category)
//         }
//     })
    
//     categories.forEach((cat, i) => {
//         // const chip = `<div class = 'chip' id = 'chip'onclick="filterme(this)">  ${cat} </div>`
//         const chip = `<div class='chip' onclick="filterByCategory('${cat}')">${cat}</div>`
//         tags.innerHTML += chip
//     })
    
//     // filter
//     const smartphones = products.filter((data) => data.category == 'laptops')
//     console.log('smartphones->', smartphones)
    
//     //find
//     // const iphone = products.find((data) => data.title == 'iPhone X')
//     // console.log('iphone->', iphone)
// }

// // const chips = document.getElementById('chip')




// //for each
// //map
// //filter
// //find
// //findbyindex
// //reduce
// //sort




const container = document.getElementById('container');
const tags = document.getElementById('tags');
// let products = [];
// console.log(products);

async function getPorducts() {
  const productsResponse = await fetch('https://dummyjson.com/products').then((res) => res.json());
  // console.log(productsResponse);
 products = productsResponse.products;
  // console.log(products);


  var categories = [];
  products.map((obj) => {
    if (!categories.includes(obj.category)) {
      categories.push(obj.category);
    }
  });
  // console.log(categories);
  const chips = `<div class='chip' onclick="filterByCategory('all')">All</div>`;
  tags.innerHTML += chips;
  categories.map((cat) => {
    const chip = `<div class='chip' onclick="filterByCategory('${cat}')">${cat}</div>`;
    tags.innerHTML += chip;
  });
  all()
}
function all (){
    products.forEach((data) => {
        const card = `<div class="card" onclick=>
        <img src=${data.thumbnail} />
        <h4>${data.title}</h4>
        <h4>$${data.price}</h4>
    </div>`;
      container.innerHTML += card;
    });

}
function filterByCategory(category) {
  container.innerHTML = '';
//   console.log(products);
const filteredProducts = products.filter((product) => product.category === category);

filteredProducts.forEach((data) => {
    const card = `<div class="card">
    <img src=${data.thumbnail} />
    <h4>${data.title}</h4>
    <h4>$${data.price}</h4>
</div>`;
container.innerHTML += card;

});
if (category=='all'){
    all()
}
}

function filterProducts() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filteredProducts = products.filter((product) => {
    if (product.category.toLowerCase().includes(searchInput) || product.title.toLowerCase().includes(searchInput)) {
      return true;
    }
    return false;
  });

  container.innerHTML = '';

  filteredProducts.forEach((data) => {
    const card = `<div class="card">
      <img src=${data.thumbnail} />
      <h4>${data.title}</h4>
      <h4>$${data.price}</h4>
    </div>`;
    
    container.innerHTML += card;
  });
}


getPorducts();