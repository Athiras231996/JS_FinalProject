var itemsInCart=0;
var itemsInCart =localStorage.getItem("quantity");
var miniCart=document.createElement("span");
miniCart.id="miniCart"
var addCart=$("#addCart").append(miniCart);
miniCart.innerText = itemsInCart;

   
   /*var productDetails=localStorage.getItem('productDetails');
    
   if(productDetails>0){
    var i=0;
  var namesArr = []; 
  namesArr[i]=(productDetails); 
  localStorage.setItem('productDetails', JSON.stringify(namesArr)); 
  i++
  }
  var storedNames = JSON.parse(localStorage.getItem("productDetails")); 
  console.log(storedNames)*/
  