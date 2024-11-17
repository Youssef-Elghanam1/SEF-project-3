let imgfixed1=document.getElementById('img-fixed1');
let imgfixed2=document.getElementById('img-fixed2');
let imgfixed3=document.getElementById('img-fixed3');
imgfixed1.addEventListener('click',function(){
    if(imgfixed1.getAttribute('data')=='duble1'){
        imgfixed2.style.display='block';
        imgfixed3.style.display='block';
        imgfixed1.setAttribute('data','duble2')
    }else{
        imgfixed2.style.display='none';
        imgfixed3.style.display='none';
        imgfixed1.setAttribute('data','duble1')
    }
})
// section4//////////////
let section4Btn=document.getElementById('section4Btn');
section4Btn.addEventListener('click',function(){
    alert('تم نسخ النص')
})