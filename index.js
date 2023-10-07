function calculatePrice(q){
    let total = document.getElementById("total-amount");
    total.innerText = (q * price).toFixed(2);
}

function quantity(v){
    let q_value = document.getElementById("q-value");
    if (v == 'up') {
        q_value.value = parseInt(q_value.value) + 1;
    }
    else if (v == 'down'){
        if (q_value.value > 0) q_value.value = q_value.value - 1;
    }
    else {
        alert("Error quantity operation!");
        return;
    }
    calculatePrice(q_value.value);
}


function changeColor(p, b, e){
    let product = document.getElementById("product"); 
    let productBack = document.getElementById("p-back");
    
    let colorButtons = document.querySelectorAll('.color-v');

    colorButtons.forEach(item=>{
        item.classList.remove('c-active');
    })
    e.classList.add('c-active')
    

    product.classList.remove('animate-product');
    void product.offsetWidth;
    product.classList.add('animate-product');
    product.style.filter = 'drop-shadow(-10px 20px 30px rgba(0,0,0,0.4)) hue-rotate(' + p + 'deg)';

    productBack.style.background = 'linear-gradient(' + b + ')';
}   
