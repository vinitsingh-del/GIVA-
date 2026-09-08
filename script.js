const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];

const mainImage=$('#mainImage');
$$('.thumb').forEach(btn=>btn.addEventListener('click',()=>{
  $$('.thumb').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  mainImage.style.opacity='0';
  setTimeout(()=>{mainImage.src=btn.dataset.src;mainImage.alt=btn.dataset.alt||'Durex Buzzy Rabbit product image';mainImage.style.opacity='1'},160);
}));

let qty=1;
const qtyEl=$('#qty');
$('#minus').addEventListener('click',()=>{qty=Math.max(1,qty-1);qtyEl.textContent=qty});
$('#plus').addEventListener('click',()=>{qty=Math.min(9,qty+1);qtyEl.textContent=qty});

const toast=$('#toast');
function showToast(){toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}
$('#addToCart').addEventListener('click',showToast);
$('#mobileAdd').addEventListener('click',showToast);

const carousel=$('#productCarousel');
$('#nextRec').addEventListener('click',()=>carousel.scrollBy({left:340,behavior:'smooth'}));
$('#prevRec').addEventListener('click',()=>carousel.scrollBy({left:-340,behavior:'smooth'}));

$('#newsletterForm').addEventListener('submit',e=>{e.preventDefault();$('#newsMsg').textContent='Thanks — you’re on the list.';e.currentTarget.reset()});

$$('details').forEach(d=>d.addEventListener('toggle',()=>{
  if(!d.open) return;
  const group=d.parentElement;
  $$('details',group).forEach(other=>{if(other!==d) other.open=false});
}));

window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  document.documentElement.style.setProperty('--scrollY',y+'px');
},{passive:true});
