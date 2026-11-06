/*function getApi() {


    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var result= this.responseText; //string
            var ali= JSON.parse(result); //object
            var shahinaz=ali.recipes;
            

            var basket= "";
            for (var i = 0; i < shahinaz.length; i++) {
            var cartoona = `<div class="md:col-4 text-center" >
                            <img src="${shahinaz[i].image_url}" class="w-100" style="height:350px ">
                            <h4>${shahinaz[i].title}</h4>
                            <h6>${shahinaz[i].publisher}</h6>
                        </div>`;
                    basket = basket + cartoona;
                }
                document.querySelector(".test").innerHTML = basket;
            }
        };

        xhttp.open("GET","https://forkify-api.jonas.io/api/v2/recipes?search=pizza", true);
        xhttp.send();

}
getApi();
    */




/*function getApi() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var result= this.responseText; //string
            var ali= JSON.parse(result); //object
            var shahinaz=ali.products;
            

            var basket= "";
            for (var i = 0; i < shahinaz.length; i++) {
                
            var cartoona = `<div class="md:col-4 text-center" >
                            <img src="${shahinaz[i].images[0]}" class="w-100" style="height:350px ">
                            <h4>Name:${shahinaz[i].title}</h4>
                            <h6>Brand:${shahinaz[i].brand}</h6>
                            <h6>Category:${shahinaz[i].category}</h6>
                            <h6>Rating:${shahinaz[i].rating} of 5 </h6>
                            <h6>Price:${shahinaz[i].price}$ </h6>
                            <h6>ID:${shahinaz[i].id}</h6>
                        </div>`;
                    basket = basket + cartoona;
                }
                document.querySelector(".test").innerHTML = basket;
            }
        };

        xhttp.open("GET","https://dummyjson.com/products", true);
        xhttp.send();

}

getApi();

*/



 //Fetch

// fetch("https://dummyjson.com/products")
//    .then(function (result) {
//      return result.json();
//    })
//     .then(function (ali) {
//         var result = ali.products;
//         var basket = "";
//         for (var i = 0; i < result.length; i++) {
//             var cartona = `
//                         <div class="md:col-4 text-center mb-12">
//                         <img src="${result[i].images[0]}"
//                         class="w-100" style="height: 300px; object-fit: cover;"/>

//                         <h4>Name: ${result[i].title}</h4>
//                         <h5>Brand: ${result[i].brand}</h5>
//                         <h6>Category: ${result[i].category}</h6>
//                         <h6>Rating: ${result[i].rating} of 5</h6>
//                         <h6>Price: ${result[i].price}$</h6>
//                         <h6>ID: ${result[i].id}</h6>
//             </div>
//         `;

//                 basket += cartona;
//         }

//     document.querySelector(".test").innerHTML = basket;
// });


    async function getApi() {
    var result = await fetch("https://dummyjson.com/products");
    var res = await result.json();

    var Products = res.products;
    var basket = "";
    for (var i = 0; i < Products.length; i++) {
        var cartona = `
        <div class="md:col-4 text-center mb-12">
            <img src="${Products[i].images[0]}"
                class="w-100"
                style="height: 300px; object-fit: cover;"/>

            <h4>Name: ${Products[i].title}</h4>
            <h5>Brand: ${Products[i].brand}</h5>
            <h6>Category: ${Products[i].category}</h6>
            <h6>Rating: ${Products[i].rating} of 5</h6>
            <h6>Price: ${Products[i].price}$</h6>
            <h6>ID: ${Products[i].id}</h6>
        </div>
        `;

        basket += cartona;
    }

    document.querySelector(".test").innerHTML = basket;
    }
    getApi();






// fetch API Pizza

fetch("https://forkify-api.jonas.io/api/v2/recipes?search=pizza")
    .then(function (result) {
        return result.json();
    })
    .then(function (res) {
        var result = res.data.recipes;
        var basket = "";

        for (var i = 0; i < result.length; i++) {
        var cartona = `
            <div class="md:col-4 text-center mb-12">
            <img src="${result[i].image_url}"
                class="w-100"
                style="height: 300px; object-fit: cover;"/>

            <h4>${result[i].title}</h4>
            <h6>${result[i].publisher}</h6>
            </div>
        `;

        basket += cartona;
        }

        document.querySelector(".Pizza").innerHTML = basket;
    });


