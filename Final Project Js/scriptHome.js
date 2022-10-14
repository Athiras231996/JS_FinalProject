
$(document).ready(function(){
    
    $('.slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false,
      });
          
    var clothingSection=document.getElementById("cloth_container");
    var accessoriesSection=document.getElementById("accessory_container");
    $.ajax({
        url:"https://5d76bf96515d1a0014085cf9.mockapi.io/product",
        method:"GET",
       success:function(data){
        //var productData=data;
        for(var i=0;i<data.length;i++){
       var product = data[i];
    var card = document.createElement('div');
    var text_container = document.createElement('div');
    text_container.classList.add('text_container');
    card.classList.add('card');
    var anger=document.createElement('a');
    anger.href="pdp.html?productId="+product.id;
    var img = document.createElement('img');
    img.src = product.preview;
    img.alt=product.name
    var h3 = document.createElement('h3');
    h3.innerText = product.name;
    var h4 = document.createElement('h4');
    h4.innerText = product.brand;
    var span = document.createElement('span');
    span.innerText = "Rs" + product.price;
    anger.append(img);
    text_container.append(h3,h4,span);
    card.append(anger,text_container);
    
    if(product.isAccessory === true) {
        accessoriesSection.append(card);
    } else {
        clothingSection.append(card);
    }
            
        }
        /*var itemsInCart=0;
        var miniCart=document.createElement("span");
        miniCart.id="miniCart";
        var addCart=$("#addCart").append(miniCart)
        miniCart.innerHTML=itemsInCart;*/
    },
    error: function(error) {
    alert("Something went wrong, please try agian after sometime!");
    },
});
    });
    