const $=(selector,context=document)=>context.querySelector(selector);
const $$=(selector,context=document)=>Array.from(context.querySelectorAll(selector));

const mainImage=$('#mainImage');
$$('.thumb').forEach((button)=>{
  button.addEventListener('click',()=>{
    $$('.thumb').forEach((item)=>item.classList.remove('active'));
    button.classList.add('active');
    if(mainImage){
      mainImage.style.opacity='0';
      window.setTimeout(()=>{
        mainImage.src=button.dataset.src;
        mainImage.alt=button.dataset.alt || 'Durex Play Buzzy Rabbit product image';
        mainImage.style.opacity='1';
      },140);
    }
  });
});

let qty=1;
const qtyNode=$('#qty');
const minus=$('#minus');
const plus=$('#plus');
if(minus && plus && qtyNode){
  minus.addEventListener('click',()=>{qty=Math.max(1,qty-1);qtyNode.textContent=String(qty);});
  plus.addEventListener('click',()=>{qty=Math.min(9,qty+1);qtyNode.textContent=String(qty);});
}

const toast=$('#toast');
const addToCart=$('#addToCart');
if(addToCart && toast){
  addToCart.addEventListener('click',()=>{
    toast.classList.add('show');
    window.setTimeout(()=>toast.classList.remove('show'),1800);
  });
}
