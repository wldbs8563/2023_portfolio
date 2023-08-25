const item = document.querySelectorAll('.list ul > .item')
const txt = document.querySelectorAll('.info')
console.log(item, txt)
item.forEach(function(t,i){
    t.addEventListener('mouseover',function(){
        txt[i].style.backgroundColor='rgba(255, 255, 255, 0.5)'
    })
    t.addEventListener('mouseout',function(){
        txt[i].style.background='none'
    })
})
const filter = document.querySelector('.title_left .filter')
const toggle = document.querySelector('#toggle')
console.log(filter, toggle)
filter.classList.add('display')
toggle.addEventListener('click',function(){
    filter.classList.toggle('display')
})
