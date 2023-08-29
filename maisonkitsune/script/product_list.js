const item = document.querySelectorAll('.list ul > .item')
const txt = document.querySelectorAll('.info')
console.log(item, txt)
item.forEach(function(t,i){
    t.addEventListener('mouseover',function(){
        txt[i].style.display='block'
        txt[i].style.background='linear-gradient(358deg, #fff 5%, transparent)'
    })
    t.addEventListener('mouseout',function(){
        txt[i].style.display='none'
    })
})
const filter = document.querySelector('.title_left .filter')
const toggle = document.querySelector('#toggle')
console.log(filter, toggle)
filter.classList.add('display')
toggle.addEventListener('click',function(){
    filter.classList.toggle('display')
})
