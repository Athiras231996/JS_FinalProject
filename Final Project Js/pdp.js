$(document).ready(function(){
    
       var queryParams = location.search;
     var productId = queryParams.substring(queryParams.lastIndexOf('=') + 1);
    
   var product=[];
    var clothingSection=document.getElementById("cloth_container");
    var accessoriesSection=document.getElementById("accessory_container");
    var leftSection=document.getElementById("leftSec");
    var pdtDescription=document.getElementById("pdtDesc");
    var itemsInCart,productId,totalPrice
       $.ajax({
        url:'https://5d76bf96515d1a0014085cf9.mockapi.io/product/' +productId,

        method:"GET",
       success:function(data){
        product=data;
        //localStorage.setItem("productData",data);
       var leftImg = document.createElement("img");
       leftImg.classList.add("display-img");
       leftImg.src = product.photos[0];
       leftSection.append(leftImg);
      
       pdtDescription.innerHTML=`<h1>${product.name} </h1>
                     <h2>${product.brand} </h2> 
                     <h4> Price:Rs <span>${product.price}</span> </h4>
                     <div class="description">
                     <h4>Description</h4>
                     <p>${product.description}</p>
                     </div>
                     <h4>Product Preview</h4>
                     <div id="photoContainer">
                                          </div>
                      <button id="btn">Add to Cart</button>`;
                      
                      var photo_=product.photos

                      for(var i=0;i<photo_.length;i++){
                        var productImg = document.createElement("img");
                        productImg.classList.add("product-img");
                        productImg.src = photo_[i];
                       var photoContainer=document.getElementById("photoContainer")
                       photoContainer.append(productImg);

                       productImg.addEventListener("click", onProductImgClick);
                      }
                      photoContainer.childNodes[1].classList.add("active");

function onProductImgClick(e) {
    leftImg.src = e.target.src;
    var images = photoContainer.childNodes;
  for (var counter = 1; counter < images.length; counter++) {
    images[counter].classList.remove("active");
  }

  e.target.classList.add("active");

}  

var myCartCount=localStorage.getItem('quantity');

var itemsInCart=0;
var totalPrice;
$("#btn").on("click", function(){
  
      myCartCount++;
      itemsInCart++;
  
    var oneProductCount;
   miniCart.innerText = myCartCount;
   var productDetails=localStorage.setItem('productDetails', +productId);
   localStorage.setItem('quantity',+myCartCount);
   localStorage.setItem("oneProductCount",itemsInCart);
   var total =localStorage.getItem("oneProductCount");  

  var productItems;   
  productItems=JSON.parse(localStorage.getItem("productItems") || "[]");
  console.log(productItems.length);
  (function(){
if(productItems.length<1){
    productItems.push(data) 
    localStorage.setItem("productItems", JSON.stringify(productItems));
}else{
  dupFlag=0;
  for(var i=0;i<productItems.length;i++){
  console.log(data.id,productItems[i].id);

    if(parseInt(productItems[i].id)==parseInt(data.id) ) {
      dupFlag=1;
      console.log("flag")
      break;
    }
  }
}
  if(dupFlag==0){
    ("push data")
    productItems.push(data) 
    localStorage.setItem("productItems", JSON.stringify(productItems));
  }
    

  //localStorage.setItem("productItems", JSON.stringify(productItems));
  productItems = JSON.parse(localStorage.getItem("productItems") || "[]");
  
  //console.log(productItems);
})();
   
          
});
                  
    },
    error: function(error) {
    alert("Something went wrong, please try agian after sometime!");
    },
    
});  

    });
    