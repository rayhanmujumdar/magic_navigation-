// let list = document.querySelectorAll('.list');
// function magic(){
//     list.forEach((rayhan)=>
//     rayhan.classList.remove('active'));
//     this.classList.add('active');
// }
// list.forEach((rayhan)=>
// rayhan.addEventListener('click',magic));

// let list = document.querySelectorAll('.list');
// function click(){
//     list.forEach((item)=>
//     item.classList.remove("active"));
//     this.classList.add('active');
// }
// list.forEach((item)=>
// item.addEventListener('mouseover',click));

let list = document.querySelectorAll('.list');
function magic(){
list.forEach((allitem) =>
allitem.classList.remove('active'))
this.classList.add('active');
}
list.forEach((allitem)=>
allitem.addEventListener('scroll',magic));
// click toggle add javascript

let btn = document.querySelector('.btn');
let hide = document.querySelector('.hide');

btn.addEventListener('click',function(){
    if(hide.style.display =='block'){
        hide.style.display = 'none';
        btn.style.background = 'green';
        btn.innerHTML= 'Show'
    }
    else{
        hide.style.display = 'block';
        btn.style.background = 'tomato';
        btn.innerHTML= 'Hide'
    }
})