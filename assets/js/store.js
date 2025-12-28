<script>
function generateOrderID(){
return "CA-"+Math.random().toString(36).substr(2,8).toUpperCase();
}

function openCheckout(product, price){
const orderId = generateOrderID();

document.getElementById("productName").innerText = product;
document.getElementById("price").innerText = price;
document.getElementById("orderId").innerText = orderId;

document.getElementById("checkout").classList.add("show");
}

function closeCheckout(){
document.getElementById("checkout").classList.remove("show");
}
</script>
