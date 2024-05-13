// document.getElementById('picture-segment').addEventListener('click', function() {
//     document.getElementById('file-input').click();
// });

// document.getElementById('file-input').addEventListener('change', function() {
//     var file = this.files[0];
//     if (file) {
//         var reader = new FileReader();
//         reader.onload = function(event) {
//             document.getElementById('preview-image').src = event.target.result;
//             document.getElementById('preview-image').style.display = 'block';
//         };
//         reader.readAsDataURL(file);
//     }
// });
const prod_name = document.querySelector('.name');
const prod_price = document.querySelector('.pricing');
const prod_img = document.querySelector('#pro-img');
const img_thumb = document.querySelectorAll('.img-thumb');
const img_caro = document.querySelectorAll('.img-caro');
const imp = document.querySelector('.dip');
const dBtn = document.getElementById('r-items');
const iBtn = document.getElementById('i-items');
const addCart = document.querySelector('.add-cart');
const cartNum = document.querySelector('.cartNum');
const numb = document.querySelector('.num');
const productInfo = document.querySelector('.prod-img');
let cartArray = [
];
// const obj = { poduct_name: prod_name.textContent, product_price: prod_price.textContent, product_qty: numb.textContent, product_img: prod_img.src};

function activeImg() {
    img_thumb.forEach((imgs) =>
        imgs.classList.remove('active'));
    this.classList.add('active');
    prod_img.src = '';
    prod_img.src = this.src;
    // obj.product_img = prod_img.src;
    
    console.log('cartArray:', cartArray);
    // localStorage.setItem('selected_img',prod_img.src);
}

let count = 0;
function increaseCount() {
    count += 1;
    document.querySelector('.num').innerHTML = count;
}
function decreaseCount() {
    if (count > 1) {
        count -= 1;
        document.querySelector('.num').innerHTML = count;
    }
    else {
        count = 1;
    }
}
let listProduct = [];


// function activeCaro(){
    //     img_caro.forEach((img) =>
        // img.classList.remove('active'));
    // this.classList.add('active');
    // imp.src = '';
    // imp.src = this.src;
    //  const init = () =>{
        //     fetch('products.json')
        //     .then(response => response.json())
        //     .then(data => {
            //             listProduct = data;
            //             console.log(listProduct);
            //         }
            //         )
            
            //  }
            //  init();
            // console.log(obj);
            
            
            // }
            //var style = numb.style;
            dBtn.onclick = decreaseCount;
            iBtn.onclick = increaseCount;
            addCart.onclick = () => {
                let actualPrice;
                actualPrice = totalPrice(actualPrice);
                // let li = document.createElement('li');
                //     li.innerHTML = inputBox.value; 
                //     listContainer.appendChild(li);
                //     let span = document.createElement('span');
                //     span.innerHTML = ('\u00d7');
                //     li.appendChild(span);
                //     saveData();
                
                //     if(cartArray) {
                    //         cartArray.forEach((element, index, array) => {
                        //             // console.log(element);
                        //             let existingItem = cartArray.find(element=> element.img.src === img.src);
                        //     if(existingItem){
                            //         existingItem.quantity++;
                            //     }
                            //     else{
                                //         cartArray.push({ img, prod_price, quantity: 1 });
                                //     }
                                cartArray.push({img: `${prod_img.src}`,
                                                quantity: `${numb.innerHTML}`,
                                            price:`${actualPrice}`});
          
//     console.log('elements: ', cartArray);
            
           
// });
    
    // console.log(prod_price);
    localStorage.setItem('addedCart', JSON.stringify(cartArray));
    // localStorage.setItem('addedValue', numb.innerHTML);
    // localStorage.setItem('addedName', prod_name.innerHTML);
    // localStorage.setItem('addedPrice', actualPrice);
    // if(numb.innerHTML > 0){
    //     cartNum.innerHTML = numb.innerHTML;
    //     cartNum.style.opacity = '100%';
    // }
    // else{
    //     cartNum.style.opacity = '0';
    // }
}
function totalPrice(actualPrice){
    return actualPrice = Number(prod_price.innerHTML) * Number(numb.innerHTML);
   
    

}






img_thumb.forEach(imgs => imgs.addEventListener('click', activeImg));

// img_thumb.forEach(img => img.addEventListner('click', function() {
//   console.log('Entered');
// }));
//img_caro.forEach(img => img.addEventListener('click', activeCaro));

//  function saveData(){
//      localStorage.setItem('data',productInfo.innerHTML);
//  }